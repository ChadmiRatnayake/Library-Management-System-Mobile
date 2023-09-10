import { View, Text, TouchableOpacity, Image, ScrollView, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { themeColors } from '../theme'

const Book1 = require('../assets/images/charlieChocoFac.jpg');
const Book2 = require('../assets/images/paddington.jpg');

export default function Books() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-white">
      <ScrollView className="flex-1">
        <SafeAreaView className="flex-1">

          <Text className="text-2xl font-bold tracking-tight text-gray-900 ml-8">
            All Books
          </Text>

          <View className="form space-y-2 justify-center items-center">
            {/*
              Group books in pairs and wrap them in a row (flexDirection: 'row')
              to display them in two columns.
            */}
            <View className="flex-row">
              <TouchableOpacity className="py-3 bg-white w-36 rounded-xl">
                <View className="flex-row justify-center">
                  <Image source={Book1}
                    style={{ width: 150, height: 250 }} />
                </View>
                <Text className="font-xl font-bold text-center text-black">
                  Charlie & the Chocolate Factory
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className="py-3 bg-white w-36 rounded-xl ml-5">
                <View className="flex-row justify-center">
                  <Image source={Book2}
                    style={{ width: 150, height: 250 }} />
                </View>
                <Text className="font-xl font-bold text-center text-black">
                  Paddington at the Palace
                </Text>
              </TouchableOpacity>
            </View>

            <View className="flex-row">
              <TouchableOpacity className="py-3 bg-white w-36 rounded-xl">
                <View className="flex-row justify-center">
                  <Image source={Book1}
                    style={{ width: 150, height: 250 }} />
                </View>
                <Text className="font-xl font-bold text-center text-black">
                  Charlie & the Chocolate Factory
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className="py-3 bg-white w-36 rounded-xl ml-5">
                <View className="flex-row justify-center">
                  <Image source={Book2}
                    style={{ width: 150, height: 250 }} />
                </View>
                <Text className="font-xl font-bold text-center text-black">
                  Paddington at the Palace
                </Text>
              </TouchableOpacity>
            </View>
          </View>

        </SafeAreaView>
      </ScrollView>

      <View className="flex-row justify-center m-7 ">
        <Text className=" font-semibold">Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text className="font-semibold text-[#3da749] "> Login</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}
