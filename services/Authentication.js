import AsyncStorage from '@react-native-async-storage/async-storage';
import { config } from "../configurations/config";
import { Alert } from 'react-native';

// To store the token
const SetAuth = (Token) => {
  AsyncStorage.setItem('x-auth-token', Token);
}

const getAuth = async () => {
  try {
    const value = await AsyncStorage.getItem('x-auth-token');
    if (value !== null) {
      return value; // You can return the token if needed
    }
    
  } catch (e) {
    console.log(e);
    return null; // Return null or handle the error appropriately
  }
}
const authenticateUser = async () => {
    try {
        const authToken = await getAuth();
        const response = await fetch(`${config.url}/api/users/me`, {
            headers: {
                'x-auth-token': authToken,
            },
        });


        if (response.ok) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        Alert.alert('Network Error: ' + error.message);
        throw error; 
    }
};

const logout = async () => {
  try {
    await AsyncStorage.removeItem('x-auth-token');
    } 
  catch (e) {
    console.log(e);
  }
  
}

export { SetAuth, getAuth, authenticateUser , logout};


