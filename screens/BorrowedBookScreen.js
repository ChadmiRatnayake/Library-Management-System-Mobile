import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { bookItems } from '../constants'; // Import your dummy data
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import BookCard from '../components/BookCard';
import { getBarrowed } from '../services/BooksController';


const BorrowedBookScreen = () => {
  const navigation = useNavigation();
  const [barrowedList, setbarrowedList] = useState();

  useEffect(() => {
      getBarrowed()
      .then((data) => {
        setbarrowedList(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);




  // Render each book item in the barrowedList
  const renderItem = ({ item }) => (
    <BookCard
        book={item.book}
        showRemoveButton={false} // Pass true to show the remove button
        onRemovePress={() => handleRemoveFrombarrowedList(item.id)}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={barrowedList}
        renderItem={renderItem}
        keyExtractor={(item) => item.barrow_id}
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

export default BorrowedBookScreen;

