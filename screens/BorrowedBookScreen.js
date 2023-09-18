import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { bookItems } from '../constants'; // Import your dummy data
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import BookCard from '../components/BookCard';



const BorrowedBookScreen = () => {
  const navigation = useNavigation();
  const [reservedList, setReservedList] = useState(bookItems.filter((book) => book.reserved));

  const handleRemoveFromReservedList = (bookId) => {
    // Remove the book from the reservedList based on its ID
    const updatedReservedList = reservedList.filter((book) => book.id !== bookId);
    setReservedList(updatedReservedList);
  };

  // Render each book item in the reservedList
  const renderItem = ({ item }) => (
    <BookCard
        book={item}
        showRemoveButton={false} // Pass true to show the remove button
        onRemovePress={() => handleRemoveFromReservedList(item.id)}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* <TouchableOpacity
          style={styles.goBackButton}
          onPress={() => navigation.goBack()}
        >
          <FontAwesomeIcon icon={faArrowLeft} size={20} color="black" />
      </TouchableOpacity>

      <Text style={styles.header}>Reserved Books</Text> */}
      <FlatList
        data={reservedList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
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
  bookDetails: {
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

