import React, { useState, useEffect } from 'react';
import { View, Text, Image, Dimensions, TextInput, TouchableOpacity, FlatList, Platform } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { BellIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import {themeColors} from '../theme';
import {categoryData, bookItems} from '../constants';
import Carousel from 'react-native-snap-carousel';
import Categories from '../components/Categories'
//import BookCard from '../components/BookCard';
import axios from 'axios';
import Books, { BooksFavourites, BooksReccomended, BooksRecent } from '../components/Books';
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native';



const {width, height} = Dimensions.get('window');
//const ios = Platform.OS == 'ios';

export default function AdventureScreen() {
  
  

  return (
    <SafeAreaView className="flex-1 relative bg-white">
      

      <Books/>


          


    </SafeAreaView>
    
  );
}
