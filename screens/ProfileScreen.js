import React, { useEffect } from 'react';
import { View, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native';
import { logout } from '../services/Authentication';
import { getUser } from '../services/User';
import MyLoadingComponent from '../components/Loading';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [user, setUser] = React.useState([]);

  if (user == null) {
    return <MyLoadingComponent/>
  }

  useEffect(() => {
    getUser()
      .then((data) => {
        setUser(data);
        
      })
      .catch((error) => {
        setError(error);

      });
    
  }, []);


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.userInfoSection}>
          <View style={{ flexDirection: 'row', marginTop: 25 }}>
            <Avatar.Image
              source={
                require('../assets/images/profilePic.png')
              }
              size={80}
            />
            <View style={{ marginLeft: 20 }}>
              <Title style={[styles.title, {
                marginTop: 15,
                marginBottom: 5,
              }]}>{user.name}</Title>
              <Caption style={styles.caption}>{user.national_id}</Caption>
            </View>
          </View>
        </View>

        <View style={styles.userInfoSection}>
          <View style={styles.row}>
            <Icon name="email" color="#777777" size={20} />
            <Text style={{ color: "#777777", marginLeft: 20 }}>{user.email}</Text>
          </View>
          <View style={styles.row}>
            <Icon name="map-marker-radius" color="#777777" size={20} />
            <Text style={{ color: "#777777", marginLeft: 20 }}>{user.address}</Text>
          </View>
          <View style={styles.row}>
            <Icon name="phone" color="#777777" size={20} />
            <Text style={{ color: "#777777", marginLeft: 20 }}>{user.phone_number}</Text>
          </View>
        </View>

        <View style={styles.infoBoxWrapper}>
          <TouchableOpacity
            style={[
              styles.infoBox,
              {
                borderRightColor: '#dddddd',
                borderRightWidth: 1,
              },
            ]}
            onPress={() => navigation.navigate('Reserved Books')} // Pass the infoType as a parameter
          >
         
            <Text style={{color:"darkred", fontWeight:600}}>Reserved Books</Text>
            <Icon name="bookmark-outline" color="#FF6347" size={25} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.infoBox}
            onPress={() => navigation.navigate('Borrowed Books')} // Pass the infoType as a parameter
          >
           
            <Text style={{color:"black", fontWeight:600}}>Borrowed Books</Text>
            <Icon name="book-outline" color="#FF6347" size={25} />
          </TouchableOpacity>
        </View>

        <View style={styles.menuWrapper}>
          <TouchableRipple onPress={() => navigation.navigate('Wishlist')}>
            <View style={styles.menuItem}>
              <Icon name="heart-outline" color="#FF6347" size={25} />
              <Text style={styles.menuItemText}>Your Wishlist</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => { }}>
            <View style={styles.menuItem}>
              <Icon name="book" color="#FF6347" size={25} />
              <Text style={styles.menuItemText}>Borrowed Books History</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => { }}>
            <View style={styles.menuItem}>
              <Icon name="credit-card" color="#FF6347" size={25} />
              <Text style={styles.menuItemText}>Overdue Charges</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {
            logout();
            navigation.navigate('Welcome')
          }}>
            <View style={styles.menuItem}>
              <Icon name="account" color="#FF6347" size={25} />
              <Text style={styles.menuItemText}>Logout</Text>
            </View>
          </TouchableRipple>
        </View>
      </ScrollView>

    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});