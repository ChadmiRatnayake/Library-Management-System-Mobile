import React from "react";
import {useTheme} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import UserScreen from "../screens/UserScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import WishlistScreen from "../screens/WishlistScreen";
import ReservedBookScreen from "../screens/ReservedBookScreen";
import Icon from "react-native-vector-icons/Ionicons";
import { View, StyleSheet } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const TabStack = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <TabStack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarIcon: ({ black, size, focused }) => {
          let iconName;

          if (route.name == "Home") {
            iconName = focused ? "home" : "home-outline";
          }else if (route.name == "Login") {
            iconName = focused ? "search" : "search-outline";
          }else if (route.name == "Reserved") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name == "UserProfile") {
            iconName = focused ? "person" : "person-outline";
          } 
          return <Icon name={iconName} size={24} color={black} />;
        },
      })}
    >
      <TabStack.Screen name="Home" component={HomeScreen} />
      <TabStack.Screen name="Login" component={LoginScreen} />
      <TabStack.Screen name="Reserved" component={ReservedBookScreen} />
      <TabStack.Screen name="UserProfile" component={ProfileStackScreen} />
      
      
    </TabStack.Navigator>
  );
};

export default BottomTabNavigator;

const ProfileStack = createStackNavigator();


const ProfileStackScreen = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={UserScreen}
        options={{
          title: 'Profile',
          
          headerRight: () => (
            <View style={{marginRight: 10}}>
              <MaterialCommunityIcons.Button
                name="account-edit"
                size={35}
                backgroundColor={'white'}
                color={'black'}
                onPress={() => navigation.navigate('EditProfile')}
              />
            </View>
          ),
        }}
      />
      <ProfileStack.Screen
        name="EditProfile"
        options={{
          title: 'Edit Profile',
        }}
        component={WelcomeScreen}
      />
    </ProfileStack.Navigator>
  );
};



const styles = StyleSheet.create({
    tabBarStyle: {
      position: 'absolute',
      backgroundColor: 'white',
      height: 70,
      borderTopWidth: 1,
      borderTopColor: 'lightgray',
    },
  });