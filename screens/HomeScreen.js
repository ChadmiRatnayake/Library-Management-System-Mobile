import React, { useState, useEffect } from 'react';
import { View, Text, Image, Dimensions, TextInput, TouchableOpacity, FlatList, Platform, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { BellIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import {themeColors} from '../theme';
import {categoryData, bookItems} from '../constants';
import Carousel from 'react-native-snap-carousel';
import Categories from '../components/Categories'
//import BookCard from '../components/BookCard';
import axios from 'axios';
import Books, { BooksFavourites, BooksRecommended, BooksRecent } from './BooksScreen';
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native';



const {width, height} = Dimensions.get('window');
//const ios = Platform.OS == 'ios';

export default function HomeScreen() {
  //const [activeCategory, setActiveCategory] = useState('Category 1');
  const [searchInput, setSearchInput] = useState('');
  const [filteredBooks, setFilteredBooks] = useState(bookItems);
  const [selectedCategory, setSelectedCategory] = useState('Category 1');

  const navigation = useNavigation();

  useEffect(() => {
    // Filter the books based on the selected category
    const filtered = bookItems.filter((book) => book.category === selectedCategory);
    setFilteredBooks(filtered);
  }, [selectedCategory]);


  

  

  return (
    <View className="flex-1 relative bg-white">
      {/* <StatusBar /> */}

      <Image 
        source={require('../assets/images/bgBooks.jpg')} 
        className="w-full absolute -top-5 opacity-3" 
        style = {{height: 220}}
      />

      <SafeAreaView className="flex-1">
        {/* avatar icon */}
        {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16 }}>
          {/* Add an empty view as a placeholder for spacing */}
          <View />
          {/* <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
            <Image source={require('../assets/images/avatar.png')} style={{ width: 36, height: 36, borderRadius: 18 }} />
          </TouchableOpacity>
        </View> */} 


        {/* search bar */}
        <View className="mx-5 shadow" style={{marginTop: height*0.06}}>
          <View className="flex-row items-center rounded-full p-1 bg-[#e6e6e6]">

            <TextInput placeholder='Search' className="p-4 flex-1 font-semibold text-gray-700" />
            <TouchableOpacity 
              className="rounded-full p-2" 
              style={{backgroundColor: themeColors.bgLight}}>
              <MagnifyingGlassIcon size="25" strokeWidth={2} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        


        {/* categories */}
        <View>  
          <Categories activeCategory={selectedCategory} setActiveCategory={setSelectedCategory}/>
        </View>
        {/* <Books selectedCategory={selectedCategory} /> */}

        <ScrollView>
        <BooksRecommended />
        <BooksRecent />
        
        <BooksFavourites />
        </ScrollView>


        
        
      {/* <Books books={filteredBooks} />
      <FlatList
        data={filteredBooks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          // Render your book item here
          <View>
            <Text>{item.title}</Text>
          </View>
        )}
        />*/} 


    </SafeAreaView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContainer: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  bookContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 16,
  },
  abstract: {
    fontSize: 14,
  },
});
