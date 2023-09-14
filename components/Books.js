import React, {useState} from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../theme';
import { bookItems } from '../constants'; // Import dummy data

const windowWidth = Dimensions.get('window').width;

export default function Books() {
  const navigation = useNavigation();


  

  const renderBookItem = ({ item }) => (
    <TouchableOpacity
      style={styles.bookItem}
      onPress={() => navigation.navigate('BookDetails', { book: item })} // Pass book data to BookDetails screen
    >
      <View style={styles.bookImageContainer}>
        <Image source={item.coverPage} style={styles.bookImage} />
      </View>
      <Text style={styles.bookTitle}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaContainer}>

        <Text style={styles.title}>
          All Books
        </Text>

        <FlatList
          data={bookItems} // Use the filtered books
          keyExtractor={(item) => item.id}
          renderItem={renderBookItem}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
        />



      </SafeAreaView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  safeAreaContainer: {
    flex: 1,
    paddingTop: -10,
    paddingLeft: 16,
    paddingRight: 16,
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'gray',
    marginBottom: 16,
  },
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
  loginText: {
    color: '#3da749',
    fontWeight: 'bold',
    marginLeft: 4,
  },
});
