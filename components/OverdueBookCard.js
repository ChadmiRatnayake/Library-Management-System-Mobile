import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const OverdueBookCard = ({ book, onBookPress }) => {
  return (
    <TouchableOpacity onPress={() => onBookPress(book)}>
      <View style={styles.bookItem}>
        <Image source={book.coverPage} style={styles.bookImage} />
        <View style={styles.bookCard}>
          <Text style={styles.bookTitle}>{book.title}</Text>
          <Text style={styles.bookCategory}>Category: {book.category}</Text>
          <Text style={styles.bookAuthor}>Author: {book.author}</Text>
          <Text style={styles.bookLanguage}>Language: {book.language}</Text>
        </View>
        {book.overDue && (
          <View style={styles.overdueLabelContainer}>
            <Text style={styles.overdueLabel}>Overdue</Text>
          </View>
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
  overdueLabelContainer: {
    backgroundColor: 'red',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overdueLabel: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default OverdueBookCard;
