import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Button,
  Image,
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import ImagePicker from 'react-native-image-picker';
import { getUser } from "../services/User";
import { updateUser } from "../services/User";

const EditProfileScreen = () => {

    const navigation = useNavigation();
    const [profileImage, setProfileImage] = useState(null);
    const [user, setUser] = React.useState([]);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone_number, setPhone_number] = useState("");
    
  useEffect(() => {
    getUser()
      .then((data) => {
        setUser(data);
        setUsername(data.name);
        setEmail(data.email);
        setAddress(data.address);
        setPhone_number(data.phone_number);
        
      })
      .catch((error) => {
        setError(error);

      });
    
  }, []);




  

  // Function to handle profile picture upload
  const selectProfileImage = () => {
    const options = {
      title: 'Select Profile Picture',
      cancelButtonTitle: 'Cancel',
      takePhotoButtonTitle: 'Take Photo',
      chooseFromLibraryButtonTitle: 'Choose from Library',
      customButtons: [{ name: 'delete', title: 'Delete Profile Picture' }],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
  
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton === 'delete') {
        // Handle delete option here
        setProfileImage(null); // Clear the profile image
      } else {
        // Handle selected image from camera/gallery here
        setProfileImage({ uri: response.uri });
      }
    });
  };
 
  
  // Function to save changes
  const saveChanges = async() => {

    await updateUser({
      name: username,
      email: email,
      address: address,
      phone_number: phone_number,
    });
    navigation.goBack();
  };

  return (
    
    <View style={styles.container}>
        <SafeAreaView>
      {/* Profile Picture */}
      <View style={styles.profileImageContainer}>
  <TouchableOpacity onPress={selectProfileImage}>
    <View style={styles.profileImageWrapper}>
      <Image
        source={profileImage ? { uri: profileImage.uri } : require('../assets/images/profilePic.png')}
        style={styles.profileImage}
      />
      
    </View>
    <Icon onPress={selectProfileImage} name="edit" size={20} color="#FFFFFF" style={styles.editIcon} />
  </TouchableOpacity>
</View>


      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter username"
          value={user.name}
          onChangeText={(text) => setUsername(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter email"
          value={user.email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter address"
          value={user.address}
          onChangeText={(text) => setAddress(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter phone number"
          value={user.phone_number}
          onChangeText={(text) => setPhone_number(text)}
        />
      </View>

      </SafeAreaView>

      <View style={styles.button}>
        <TouchableOpacity onPress={saveChanges} style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </TouchableOpacity>
      </View>

      

      
    </View>
    
  );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  profileImage: {
    width: windowWidth * 0.4,
    height: windowWidth * 0.4,
    borderRadius: (windowWidth * 0.4) / 2,
    backgroundColor: "lightgray",
    marginBottom: 10,
    alignSelf: "center",
  },
  inputContainer: {
    flexDirection: "column",
    marginBottom: 6,
    marginHorizontal: 5,
  },
  label: {
    margin: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
  },
  profileImageContainer: {
    alignItems: "center",
    //marginBottom: 10,
    margin: 20,
  },
  profileImageWrapper: {
    position: "relative",
    width: 120, // Adjust the size as needed
    height: 120, // Adjust the size as needed
    borderRadius: 60, // Half of the width and height to create a circle
    overflow: "hidden",
  },
  profileImage: {
    width: "100%",
    height: "100%",
  },
  editIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#808080",
    borderRadius: 20, // Adjust as needed for your icon
    padding: 5,
    
  },
  button: {
    alignItems: "center",
    marginTop: 20,
  },
  saveButton: {
    backgroundColor: "#FF6347",
    padding: 15,
    borderRadius: 10,
    width: windowWidth * 0.5,
    alignItems: "center",
  },
  saveButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default EditProfileScreen;

