import { View, Text, TouchableOpacity, Image, ScrollView, TextInput, ImageBackground} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { themeColors } from '../theme'

const Logo = require('../assets/images/Logo.png');
const backgroundImage = require('../assets/images/regBackground.png');
const Fruits = require('../assets/images/fruitCat.png');
const Vegitables = require('../assets/images/vegCat.png');
const Grains = require('../assets/images/grainCat.png');
const Fertilizers = require('../assets/images/fertiCat.png');
const Equipments = require('../assets/images/eqCat.png');
const Product_1 = require('../assets/images/product_1.jpg');
const Product_1_1 = require('../assets/images/product_1_1.jpg');

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={backgroundImage} // Change the path to your background image
      style={{ flex: 1, backgroundColor: themeColors.bg }}
    >
    <View className="flex-1 bg-white" style={{backgroundColor: themeColors.bg}}>
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
            <TouchableOpacity 
                onPress={()=> navigation.goBack()}
                className="bg-[#3da749] p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
            >
                <ArrowLeftIcon size="20" color="black" />
            </TouchableOpacity>
        </View>

        
               
        </SafeAreaView>
        <View className="flex-1 bg-white px-8 pt-8"
        style={{borderTopLeftRadius: 40, borderTopRightRadius: 40,backgroundColor: 'rgba(255, 255, 255, 0.75)'}}
      >    
      <View>
        <View  className="flex-row justify-center">
          <Image source={Logo} 
          style={{width: 100, height: 100}} />
        </View>
        <Text className="text-semibold text-center mb-2">Your Trusted Partner {'\n'} in Agriculture Excellence</Text>
      
        </View>    
        
        <ScrollView style={{ flex: 1, backgroundColor: themeColors.bg }}>
        <SafeAreaView style={{ flex: 1 }}>
        <View className="form space-y-2 justify-center items-center">
        <TouchableOpacity className="py-3 bg-white w-64 rounded-xl">
            <View  className="flex-row justify-center">
              <Image source={Fruits} 
              style={{width: 150, height: 150}} />
            </View>
              <Text className="font-xl font-bold text-center text-black">
                  Fruits
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="py-3 bg-white w-64 rounded-xl">
            <View  className="flex-row justify-center">
              <Image source={Vegitables} 
              style={{width: 150, height: 150}} />
            </View>
              <Text className="font-xl font-bold text-center text-black">
                  Vegitables
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="py-3 bg-white w-64 rounded-xl">
            <View  className="flex-row justify-center">
              <Image source={Grains} 
              style={{width: 150, height: 150}} />
            </View>
              <Text className="font-xl font-bold text-center text-black">
                  Grains
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="py-3 bg-white w-64 rounded-xl">
            <View  className="flex-row justify-center">
              <Image source={Fertilizers} 
              style={{width: 150, height: 150}} />
            </View>
              <Text className="font-xl font-bold text-center text-black">
                  Fertilizers
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="py-3 bg-white w-64 rounded-xl">
            <View  className="flex-row justify-center">
              <Image source={Equipments} 
              style={{width: 150, height: 150}} />
            </View>
              <Text className="font-xl font-bold text-center text-black">
                  Equipments
              </Text>
            </TouchableOpacity>
            
        </View>

        <Text className="text-2xl font-bold tracking-tight text-gray-900">
            All Products
        </Text>

        <View className="form space-y-2 justify-center items-center">
            <TouchableOpacity className="py-3 bg-white w-36 rounded-xl">
            <View  className="flex-row justify-center">
              <Image source={Product_1} 
              style={{width: 100, height: 100}} />
            </View>
              <Text className="font-xl font-bold text-center text-black">
              Passion Fruit
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="py-3 bg-white w-36 rounded-xl">
            <View  className="flex-row justify-center">
              <Image source={Product_1_1} 
              style={{width: 100, height: 100}} />
            </View>
              <Text className="font-xl font-bold text-center text-black">
              Passion Fruit
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="py-3 bg-white w-36 rounded-xl">
            <View  className="flex-row justify-center">
              <Image source={Product_1} 
              style={{width: 100, height: 100}} />
            </View>
              <Text className="font-xl font-bold text-center text-black">
                Passion Fruit
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="py-3 bg-white w-36 rounded-xl">
            <View  className="flex-row justify-center">
              <Image source={Product_1_1} 
              style={{width: 100, height: 100}} />
            </View>
              <Text className="font-xl font-bold text-center text-black">
                  Passion Fruit
              </Text>
            </TouchableOpacity>
            
        </View>

        </SafeAreaView>
        </ScrollView>
        <Text className="text-xl text-gray-700 font-bold text-center  md-4">
            Footer Section
            To be Implemented
        </Text>
        <View className="flex-row justify-center m-7 ">
            <Text className=" font-semibold">Already have an account?</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                <Text className="font-semibold text-[#3da749] "> Login</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
    </ImageBackground>
       
   
  )
}