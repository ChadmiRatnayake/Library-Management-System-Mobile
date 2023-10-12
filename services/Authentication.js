import AsyncStorage from '@react-native-async-storage/async-storage';

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

export { SetAuth, getAuth };