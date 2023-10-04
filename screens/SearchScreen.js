// // SearchScreen.js

// import React, { useEffect, useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
// import { bookItems } from '../constants'; // Import your book data
// import { SafeAreaView } from 'react-native';
// import { ScrollView } from 'react-native';
// import BookCard from '../components/BookCard';
// import Books from './BooksScreen';


// function SearchScreen() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState([]);

//   // useEffect(() => {
//   //   handleSearch()
//   // }, []);


//   const handleSearch = () => {
    
//     // Filter the books based on the entered title
//     const filteredBooks = bookItems.filter(book =>
//       book.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     // Update the search results state
//     setSearchResults(filteredBooks);
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView>
//         <View style={styles.innerContainer}>
//           <Text style={styles.header}>Search Books</Text>
//           <TextInput
//             style={styles.input}
//             onChange={() => handleSearch()}
//             placeholder="Search by title"
//             value={searchTerm}
//             onChangeText={text => setSearchTerm(text)}
//           />
//           <Button title="Search" onPress={handleSearch} />


//           {searchResults.map((book) => (
//             <BookCard
//               key={book.id}
//               book={book}
//               showRemoveButton={false} // Don't show the remove button
//             />
//           ))}
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   innerContainer: {
//     padding: 20,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     alignSelf: 'center',
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
//   bookContainer: {
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   author: {
//     fontSize: 16,
//   },
//   abstract: {
//     fontSize: 14,
//   },
// });

// export default SearchScreen;



import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Platform } from 'react-native';
import { bookItems } from '../constants';
import { SafeAreaView } from 'react-native';
import BookCard from '../components/BookCard';

function SearchScreen() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Filter the books based on the entered title
    const filteredBooks = bookItems.filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // Update the search results state
    setSearchResults(filteredBooks);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.innerContainer}>
          <Text style={styles.header}>Search Books</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setSearchTerm(text)}
            value={searchTerm}
            placeholder="Search by title"
          />
          <Button title="Search" onPress={handleSearch} />

          {searchResults.map(book => (
            <BookCard
              key={book.id}
              book={book}
              showRemoveButton={false}
            />
          ))}
        </View>
      </ScrollView>
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
