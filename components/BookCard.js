import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const BookCard = ({ book, showRemoveButton, onRemovePress, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(book)}>
      <View style={styles.bookItem}>
        <Image source={book.coverPage} style={styles.bookImage} />
        <View style={styles.bookCard}>
          <Text style={styles.bookTitle}>{book.title}</Text>
          <Text style={styles.bookCategory}>Category: {book.category}</Text>
          <Text style={styles.bookAuthor}>Author: {book.author}</Text>
          <Text style={styles.bookLanguage}>Language: {book.language}</Text>
        </View>
        {showRemoveButton && (
          <TouchableOpacity
            style={styles.removeButton}
            onPress={onRemovePress}
          >
            <Text style={styles.removeButtonText}>Remove</Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
  bookCard: {
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

export default BookCard;
