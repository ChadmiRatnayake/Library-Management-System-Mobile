import { View, Text, Image, Dimensions, TextInput, TouchableOpacity, FlatList, Platform } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { BellIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import {themeColors} from '../theme';
import {categoryData, bookItems} from '../constants';
import Carousel from 'react-native-snap-carousel';
import BookCard from '../components/BookCard';


const {width, height} = Dimensions.get('window');
const ios = Platform.OS == 'ios';

export default function HomeScreen() {

  const [activeCategory, setActiveCategory] = useState(1);

  return (
    <View className="flex-1 relative bg-white">
      <StatusBar />

      <Image 
        source={require('../assets/images/bgBooks.jpg')} 
        className="w-full absolute -top-5 opacity-10" 
        style = {{height: 300}}
      />

      <SafeAreaView className="flex-1">
        {/* avatar and bell icon */}
        <View className="mx-4 flex-row justify-between items-center">
          <Image source={require('../assets/images/avatar.png')} 
            className="h-9 w-9 rounded-full" />
          
          <View className="flex-row justify-between items-center">
            <BellIcon size="27" color="black" />
          </View>
        </View>

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
        <View className="px-5 mt-6">
          <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categoryData}
            keyExtractor={item=> item.id}
            className="overflow-visible"
            renderItem={({item})=>{
              let isActive = item.id==activeCategory;
              let activeTextClass = isActive? 'text-white': 'text-gray-700';
              return (
                <TouchableOpacity 
                  onPress={()=> setActiveCategory(item.id)}
                  style={{backgroundColor:  isActive? themeColors.bgLight: 'rgba(0,0,0,0.07)'}} 
                  className="p-2 px-5 mr-2 rounded-full shadow"
                >
                  <Text className={"font-semibold" + activeTextClass}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              )
              }}
            />

        </View>

      

      {/* book cards */}
      <View className={`overflow-visible flex justify-center flex-1}`}>
        <View className="mt-16 py-2">
          <Carousel
            containerCustomStyle={{overflow: 'visible'}}
            data={bookItems}
            renderItem={({item})=> <BookCard item={item} />}
            firstItem={1}
            loop={true}
            inactiveSlideScale={0.75}     // opacity of interactive slides
            inactiveSlideOpacity={0.75}   // size of interactive slides
            sliderWidth={width}    // actal slide width
            itemWidth={width*0.63}  // card width
            slideStyle={{display: 'flex', alignItems: 'center'}}
          />
        </View>
        
      </View>
      </SafeAreaView>

    </View>
  )
}