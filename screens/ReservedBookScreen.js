import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import BookCard from '../components/BookCard';
import { reservedlist } from '../services/BooksServices';
import { cancelReservation } from '../services/BooksServices';

const ReservedBookScreen = () => {
  const navigation = useNavigation();
  const [reservedList, setReservedList] = useState();


  const handleRemoveFromReservedList = async (reservation_id) => {
   
    try{
      await cancelReservation(reservation_id);
      const updatedReservedList = reservedList.filter((reservation) => reservation.reservation_id !== reservation_id);
      setReservedList(updatedReservedList);
    }
    catch(e){
      console.log(e);
    }
    // Remove the book from the reservedList based on its ID
  };


  useEffect(() => {
    // Call the fetchBooks function to fetch book data
    reservedlist()
      .then((data) => {
        setReservedList(data);
    
        //console.log(data);
      
      })
      .catch((error) => {
        setError(error);
      });
  },[])
  

  // Render each book item in the reservedList
  const renderItem = ({ reservation }) => (
    <BookCard
        book={reservation.book}
        showRemoveButton={true} // Pass true to show the remove button
        onRemovePress={() => handleRemoveFromReservedList(reservation.reservation_id)}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={reservedList}
        renderItem={({ item }) => renderItem({ reservation: item })}
        keyExtractor={(item) => item.reservation_id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  bookItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  bookImage: {
    width: 80,
    height: 120,
    borderRadius: 8,
  },
  BookDetailsScreen: {
    marginLeft: 16,
    flex: 1,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bookCategory: {
    fontSize: 16,
  },
  bookAuthor: {
    fontSize: 16,
  },
  bookLanguage: {
    fontSize: 16,
  },
  removeButton: {
    backgroundColor: 'red',
    paddingVertical: 8,
    paddingHorizontal: 6,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  removeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ReservedBookScreen;

