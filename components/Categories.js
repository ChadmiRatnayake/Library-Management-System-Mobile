import { View, Text, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react';
import { categoryData } from '../constants';
import {themeColors} from '../theme';


export default function Categories({selectedCategory, setActiveCategory}){
    return (
        <View className="px-5 mt-6">
        <FlatList 
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categoryData}
          keyExtractor={item=> item.id}
          className="overflow-visible"
          renderItem={({item})=>{
            let isActive = item.id==selectedCategory;
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
    );
  
}