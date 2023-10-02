// import { View, Text, Image, TouchableOpacity } from 'react-native'
// import React from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import { themeColors } from '../theme'
// import { useNavigation } from '@react-navigation/native'

// export default function WelcomeScreen() {
//     const navigation = useNavigation();
//   return (
//     <SafeAreaView className="flex-1" style={{backgroundColor: themeColors.bg}}>
//         <View className="flex-1 flex justify-around my-4">
//             <Text 
//                 className="text-white font-bold text-4xl text-center">
//                 Let's Get Started!
//             </Text>
//             <View className="flex-row justify-center">
//                 <Image source={require("../assets/images/logo.png")}
//                     style={{width: 350, height: 350, resizeMode: 'contain'}} />
//             </View>
//             <View className="space-y-4">
//                 <TouchableOpacity
//                     onPress={()=> navigation.navigate('Login')}
//                     className="py-3 bg-yellow-400 mx-7 rounded-xl">
//                         <Text 
//                             className="text-xl font-bold text-center text-gray-700"
//                         >
//                             Get Started
//                         </Text>
//                 </TouchableOpacity>
                
//             </View>
//         </View>
//     </SafeAreaView>
//   )
// }



import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'


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
            onPress={() => navigation.navigate('Login')}
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
    //justifyContent: 'center',
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
