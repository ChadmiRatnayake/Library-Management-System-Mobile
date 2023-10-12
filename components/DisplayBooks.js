import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { fetchBooks } from '../services/BooksController';

const windowWidth = Dimensions.get('window').width;

export default function DisplayBooks({ searchTerm, searchResults}) {
  const navigation = useNavigation();
  const [bookData, setBookData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const onArrowPress = () => {
    navigation.navigate('SearchScreen');
  };

  useEffect(() => {
    // Call the fetchBooks function to fetch book data
    fetchBooks()
      .then((data) => {
        setBookData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const renderBookItem = ({ item }) => (
    <TouchableOpacity
      style={styles.bookItem}
      onPress={() => navigation.navigate('BookDetailsScreen', { book: item })} // Pass book data to BookDetailsScreen screen
    >
      <View style={styles.bookImageContainer}>
        <Image source={{ uri: item.url }} style={styles.bookImage} />
      </View>
      <Text style={styles.bookTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  // Determine which set of data to display based on the search term
  const dataToDisplay = searchTerm ? searchResults : bookData;

  return (
    <View style={styles.container}>
      <View style={styles.safeAreaContainer}>
        <FlatList
          data={dataToDisplay}
          keyExtractor={(item) => item.bookid} // Ensure the key is a string
          renderItem={renderBookItem}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
        />
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
    container: {
      flex: 4.5,
      backgroundColor: 'white',  
    },
    safeAreaContainer: {
      flex: 1,
      padding: 16,
    },
    // title: {
    //   fontSize: 24,
    //   fontWeight: 'bold',
    //   color: 'gray',
    //   marginBottom: 16,
    // },
    columnWrapper: {
      justifyContent: 'space-between',
    },
    bookItem: {
      flex: 0.5, // Two items per row, so each item should take half the space
      marginBottom: 16,
      backgroundColor: 'white',
      borderRadius: 16,
      elevation: 3,
      shadowColor: 'black',
      shadowOpacity: 0.2,
      shadowOffset: { width: 0, height: 2 },
    },
    bookImageContainer: {
      alignItems: 'center',
      padding: 8,
    },
    bookImage: {
      width: windowWidth * 0.4, // Adjust the width as needed
      height: 250,
      borderRadius: 8,
    },
    bookTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 8,
      marginBottom: 16,
      alignSelf: 'center',
    },
    bottomRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 16,
    },
    bottomText: {
      fontWeight: 'bold',
    },
    
  });