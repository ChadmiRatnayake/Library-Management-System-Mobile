
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import { config } from "../configurations/config";
import { SetAuth } from '../services/Authentication';

export default function LoginScreen() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();


  const handleLogin = async () => {
    try {
    
      const response = await fetch(`${config.url}/api/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, password }),
      });
      
    
      if (response.status === 200 || response.status === 201) {
        SetAuth(response.headers.map['x-auth-token']);
        Alert.alert('Login Success');
        navigation.navigate('Library');
      } else if (response.status === 404) {
        Alert.alert('Login Failed: Resource not found');
      } else {
        Alert.alert('Login Failed: Unexpected error');
      }
    } catch (error) {
      Alert.alert('Network Error: ' + error.message);
    }
    
  };
  

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 0 }}>
        <View style={{ flexDirection: 'row', justifyContent:'flex-start' }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.goBackButton}
          >
            <ArrowLeftIcon size={20} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Image
            source={require('../assets/images/login.png')}
            style={{ width: 300, height: 200, marginTop: 50 }}
          />
        </View>
      </SafeAreaView>
      <View style={styles.contentContainer}>
        <View className="form space-y-2">
        <Text className="text-gray-700 ml-4">User name</Text>
            <TextInput 
              className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
              placeholder="user"
              value={name}
              onChangeText={(text) => setName(text)} 
            />
            <Text className="text-gray-700 ml-4">Password</Text>
            <TextInput 
              className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
              secureTextEntry
              placeholder="password"
              value={password}
              onChangeText={(text) => setPassword(text)} 
            />
            <TouchableOpacity className="flex items-end">
              <Text className="text-gray-700 mb-5">Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={()=> handleLogin()}
              className="py-3 bg-yellow-400 rounded-xl">
                <Text 
                    className="text-xl font-bold text-center text-gray-700"
                >
                  Login
                </Text>
             </TouchableOpacity>
            
        </View>

        
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: themeColors.bg,
  },
  goBackButton:{
    backgroundColor: 'yellow',
    padding: 12,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    marginLeft: 4,
  },
  contentContainer: {
    flex: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: 'white',
    marginTop: 30,
    paddingHorizontal: 16,
    paddingTop: 44, // Adjust the top padding to reduce the height
  },
  
});
