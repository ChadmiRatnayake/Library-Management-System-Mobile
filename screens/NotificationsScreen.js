// NotificationsScreen.js

import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { bookItems } from '../constants'; // Import your dummy data
import { SafeAreaView } from 'react-native-safe-area-context';
import OverdueBookCard from '../components/OverdueBookCard';

const NotificationsScreen = () => {
  const overdueBooks = bookItems.filter((book) => book.overDue);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Notifications</Text>
      <FlatList
        data={overdueBooks}
        renderItem={({ item }) => <OverdueBookCard book={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default NotificationsScreen;



// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, StyleSheet } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import OverdueBookCard from '../components/OverdueBookCard';
// import axios from 'axios'; // Import Axios for making API requests
// import { config } from '../configurations/config';
// import {fetchNotifications} from '../services/Notifications'

// const NotificationsScreen = () => {
//   const [notifications, setNotifications] = useState([]);

//   useEffect(() => {
//     fetchNotifications()
//       .then((data) => {
//         setNotifications(data);
//       })
//       .catch((error) => {
//         console.error('Error fetching notifications:', error);
//       });
//   }, []);

//   // const fetchNotifications = async () => {
//   //   try {
//   //     const response = await fetch(`${config.url}/api/notification/notifications`);
//   //     //console.log(response);
//   //     if (!response.ok) {
//   //       throw new Error('Failed to fetch data');
//   //     }
//   //     const data = await response.json();
//   //     setNotifications(data);
//   //   } catch (error) {
//   //     console.error('Error fetching notifications:', error);
//   //   }
//   // };
  

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.header}>Notifications</Text>
//       <FlatList
//         data={notifications}
//         renderItem={({ item }) => <OverdueBookCard book={item} />}
//         keyExtractor={(item) => item.id.toString()} // Convert the id to a string if it's not already
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: 'white',
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
// });

// export default NotificationsScreen;
