
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';


export default function LoginScreen() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  


  const handleLogin = async () => {
    try {
      console.log(JSON.stringify({ name, password }));
      const response = await fetch('http://192.168.8.185:8080/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, password }),
      });
      console.log(response.status);
        if(response.status === 200){
          navigation.navigate('Library');
          console.log('Login Success:', response);
          //Alert.alert('Login Success');
        }
        else{
          Alert.alert('Login Failed');
        }
       

    } catch (error) {
      console.error('Network Error:', error);
    }
  };
  

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 0 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'start' }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              backgroundColor: 'yellow',
              padding: 12,
              borderTopRightRadius: 20,
              borderBottomLeftRadius: 20,
              marginLeft: 4,
            }}
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
