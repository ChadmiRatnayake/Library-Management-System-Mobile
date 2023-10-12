import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Platform } from 'react-native';
import { bookItems } from '../constants';
import { SafeAreaView } from 'react-native';
import BookCard from '../components/BookCard';
import DisplayBooks from '../components/DisplayBooks';
import { fetchBooks } from '../services/BooksServices';
import { set } from 'react-native-reanimated';



function SearchScreen() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [bookData, setBookData] = useState([]);

  const handleSearch = (text) => {
    setSearchTerm(text);
    const filteredBooks = bookData.filter(book =>
      book.title.toLowerCase().includes(text.toLowerCase())
    );
    // Update the search results state
    setSearchResults(filteredBooks);
  };

  useEffect(() => {
    // Fetch the book data and update the state
    fetchBooks()
      .then((data) => {
        setBookData(data);
      })
      .catch((error) => {
        console.error('Error fetching book data:', error);
      });
  }, []);


  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView contentContainerStyle={styles.scrollViewContent}> */}
        <View style={styles.innerContainer}>
          <Text style={styles.header}>Search Books</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => {handleSearch(text)}}
            value={searchTerm}
            placeholder="Search by title"
          />
          <Button title="Search" onPress={() => handleSearch(searchTerm)} />

          
        </View>
      {/* </ScrollView> */}
        <DisplayBooks searchTerm={searchTerm} searchResults={searchResults}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    minHeight: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%', // Take full width
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default SearchScreen;