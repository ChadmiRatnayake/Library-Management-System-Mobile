
import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen';
import BookDetailsScreen from '../screens/BookDetailsScreen';
import WishlistScreen from '../screens/WishlistScreen';
import BottomTabNavigator from './BottomTabNavigator';
import EditProfileScreen from '../screens/EditProfileScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import Books from '../screens/BooksScreen';
import ReservedBookScreen from '../screens/ReservedBookScreen';
import BorrowedBookScreen from '../screens/BorrowedBookScreen';
import DisplayBooks from '../components/DisplayBooks';


const Stack = createNativeStackNavigator();



export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name="Library" options={{headerShown: false}} component={BottomTabNavigator} />
        <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen} />
        <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
        <Stack.Screen name="UserProfile" options={{headerShown: false}} component={ProfileScreen} />
        <Stack.Screen name="BookDetailsScreen" options={{headerShown: false}} component={BookDetailsScreen} />
        <Stack.Screen name="Wishlist" options={{headerShown: false}} component={WishlistScreen} />
        <Stack.Screen name="EditProfile" options={{headerShown: true}} component={EditProfileScreen} />
        <Stack.Screen name="Recents" options={{headerShown: true}} component={DisplayBooks} />
        <Stack.Screen name="Reserved Books" options={{headerShown: true}} component={ReservedBookScreen} />
        <Stack.Screen name="Borrowed Books" options={{headerShown: true}} component={BorrowedBookScreen} />
        
        
        <Stack.Screen name="Notifications" options={{headerShown: true}} component={NotificationsScreen} />
        
      </Stack.Navigator>

      
    </NavigationContainer>
  )
}
