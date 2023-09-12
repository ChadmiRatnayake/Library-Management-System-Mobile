import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import UserScreen from "../screens/UserScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import Icon from "react-native-vector-icons/Ionicons";
import { StyleSheet } from "react-native";

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
          } else if (route.name == "Welcome") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name == "UserProfile") {
            iconName = focused ? "list" : "list-outline";
          } else if (route.name == "Login") {
            iconName = focused ? "person" : "person-outline";
          }
          return <Icon name={iconName} size={24} color={black} />;
        },
      })}
    >
      <TabStack.Screen name="Home" component={HomeScreen} />
      <TabStack.Screen name="Welcome" component={WelcomeScreen} />
      <TabStack.Screen name="UserProfile" component={UserScreen} />
      <TabStack.Screen name="Login" component={LoginScreen} />
    </TabStack.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
    tabBarStyle: {
      position: 'absolute',
      backgroundColor: 'white',
      height: 50,
      borderTopWidth: 1,
      borderTopColor: 'lightgray',
    },
  });