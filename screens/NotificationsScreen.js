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
