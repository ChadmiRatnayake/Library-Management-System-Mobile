import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { bookItems } from '../constants'; // Import your dummy data
import { SafeAreaView } from 'react-native-safe-area-context';
import OverdueBookCard from '../components/OverdueBookCard';
import OverdueCharge from '../components/OverdueCharge';

const OverdueScreen = () => {
  const overdueBooks = bookItems.filter((book) => book.overDue);

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={styles.header}>Overdue Charges</Text> */}
      <FlatList
        data={overdueBooks}
        renderItem={({ item }) => <OverdueCharge book={item} />}
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

export default OverdueScreen;