// import React from 'react';
// import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
// import { bookItems } from '../constants';

// export default function CategoryBooks({ category }) {
//   // Filter books based on the selected category
//   const filteredBooks = bookItems.filter((book) => book.category === category);

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={filteredBooks}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.bookContainer}>
//             <Image source={item.coverPage} style={styles.bookImage} />
//             <Text style={styles.bookTitle}>{item.title}</Text>
//             {/* Add other book details you want to display */}
//           </View>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   bookContainer: {
//     marginBottom: 16,
//   },
//   bookImage: {
//     width: '100%',
//     height: 200,
//     borderRadius: 8,
//   },
//   bookTitle: {
//     fontSize: 18,
//     marginTop: 8,
//     fontWeight: 'bold',
//   },
//   // Add styles for other book details here
// });
