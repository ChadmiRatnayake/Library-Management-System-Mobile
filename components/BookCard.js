import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback, Dimensions, Platform } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'
import { StarIcon } from 'react-native-heroicons/solid';
import { PlusIcon } from 'react-native-heroicons/outline';
const {width, height} = Dimensions.get('window');
const ios = Platform.OS == 'ios';

export default function BookCard({item}) {
  const navigation = useNavigation();
  return (

      <View>
        <Text>Book card</Text>
        

      </View>
    
  )
}