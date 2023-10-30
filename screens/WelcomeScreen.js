
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'
import { authenticateUser} from '../services/Authentication'

export default function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Let's Get Started!</Text>
        <View style={styles.logoContainer}>
          <Image source={require("../assets/images/logo.png")} style={styles.logoImage} />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={async () => {
              const authToken = await authenticateUser();
      
              if (authToken) {
                navigation.navigate('Library');
                
              } else {
                navigation.navigate('Login');
              }
            }}
            
            style={styles.button}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColors.bg,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-around',
    marginVertical: 4,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logoImage: {
    width: 350,
    height: 350,
    resizeMode: 'contain',
  },
  buttonContainer: {
    marginTop: 16,
  },
  button: {
    backgroundColor: 'yellow',
    padding: 12,
    borderRadius: 20,
    marginHorizontal: 7,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'gray',
  },
});