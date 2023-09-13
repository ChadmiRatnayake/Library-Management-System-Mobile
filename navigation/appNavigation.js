
import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import UserScreen from '../screens/UserScreen';
import BookDetails from '../components/BookDetails';
import HomeScreen from '../screens/HomeScreen';
import WishlistScreen from '../screens/WishlistScreen';
import BottomTabNavigator from '../components/BottomTabNavigator';
import EditProfileScreen from '../screens/EditProfileScreen';

const Stack = createNativeStackNavigator();



export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name="Library" options={{headerShown: false}} component={BottomTabNavigator} />
        <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen} />
        <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
        <Stack.Screen name="SignUp" options={{headerShown: false}} component={SignUpScreen} />
        <Stack.Screen name="UserProfile" options={{headerShown: false}} component={UserScreen} />
        <Stack.Screen name="BookDetails" options={{headerShown: false}} component={BookDetails} />
        <Stack.Screen name="Wishlist" options={{headerShown: false}} component={WishlistScreen} />
        <Stack.Screen name="EditProfile" options={{headerShown: true}} component={EditProfileScreen} />
        
        
      </Stack.Navigator>

      
    </NavigationContainer>
  )
}
