import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeftIcon } from 'react-native-heroicons/solid'; // Import ArrowLeftIcon
import { SafeAreaView } from 'react-native-safe-area-context'; // Import SafeAreaView


export default function BookDetails({ route }) {
  const { book } = route.params;
  const navigation = useNavigation(); // Access navigation object

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.goBackButton}
          onPress={() => navigation.goBack()}
        >
          <ArrowLeftIcon size={20} color="black" />
        </TouchableOpacity>

        <Image source={book.coverPage} style={styles.bookImage} />
        <Text style={styles.bookTitle}>{book.title}</Text>
        <Text style={styles.bookCategory}>Category: {book.category}</Text>
        <Text style={styles.bookAuthor}>Author: {book.author}</Text>
        <Text style={styles.bookLanguage}>Language: {book.language}</Text>
        <Text style={styles.bookAbstract}>{book.abstract}</Text>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  goBackButton: {
    backgroundColor: '#d4a574',
    padding: 5,
    borderRadius: 16,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    marginLeft: 4,
    marginTop: 4,
    alignSelf: 'flex-start', // Align to the top-left corner
  },
  bookImage: {
    width: '50%',
    height: 250,
    borderRadius: 8,
    alignSelf: 'center',
  },
  bookTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    alignSelf: 'center',
  },
  bookCategory: {
    fontSize: 16,
    marginTop: 8,
  },
  bookAuthor: {
    fontSize: 16,
    marginTop: 8,
  },
  bookLanguage: {
    fontSize: 16,
    marginTop: 8,
  },
  bookAbstract: {
    fontSize: 16,
    marginTop: 16,
  },
});