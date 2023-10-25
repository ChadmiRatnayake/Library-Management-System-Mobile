import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { bookItems } from '../constants'; // Import your dummy data
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import BookCard from '../components/BookCard';
import WishlistBooks from '../components/WishlistBooks';


const WishlistScreen = () => {
  const navigation = useNavigation();
  const [wishlist, setWishlist] = useState(bookItems.filter((book) => book.inWishlist));

  const handleRemoveFromWishlist = (bookId) => {
    // Remove the book from the wishlist based on its ID
    const updatedWishlist = wishlist.filter((book) => book.id !== bookId);
    setWishlist(updatedWishlist);
  };

  // Render each book item in the wishlist
  const renderItem = ({ item }) => (
    <WishlistBooks
        book={item}
        showRemoveButton={true} // Pass true to show the remove button
        onRemovePress={() => handleRemoveFromWishlist(item.id)}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
          style={styles.goBackButton}
          onPress={() => navigation.goBack()}
        >
          <FontAwesomeIcon icon={faArrowLeft} size={20} color="black" />
      </TouchableOpacity>

      <Text style={styles.header}>Wishlist</Text>
      <FlatList
        data={wishlist}
        renderItem={renderItem}
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
  bookItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  bookImage: {
    width: 80,
    height: 120,
    borderRadius: 8,
  },
  BookDetailsScreen: {
    marginLeft: 16,
    flex: 1,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bookCategory: {
    fontSize: 16,
  },
  bookAuthor: {
    fontSize: 16,
  },
  bookLanguage: {
    fontSize: 16,
  },
  removeButton: {
    backgroundColor: 'red',
    paddingVertical: 8,
    paddingHorizontal: 6,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  removeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default WishlistScreen;




// import React, { useState, useEffect } from 'react';
// import { FlatList, StyleSheet, Alert } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useNavigation } from '@react-navigation/native';
// import BookCard from '../components/BookCard';
// import { wishlist } from '../services/Wishlist';
// import { removeFromWishlist } from '../services/Wishlist';

// const WishlistScreen = () => {
//   const navigation = useNavigation();
//   const [wishlistItems, setWishlistItems] = useState();

//   const handleRemoveFromWishlist = (bookId) => {
//     Alert.alert(
//       'Remove from Wishlist',
//       'Are you sure you want to remove this book from your wishlist?',
//       [
//         {
//           text: 'Cancel',
//           style: 'cancel',
//         },
//         {
//           text: 'OK',
//           onPress: async () => {
//             try {
//               await removeFromWishlist(bookId);
//               const updatedWishlistItems = wishlistItems.filter(
//                 (book) => book.id !== bookId
//               );
//               setWishlistItems(updatedWishlistItems);
//             } catch (e) {
//               console.log(e);
//             }
//           },
//         },
//       ],
//       { cancelable: false }
//     );
//   };

//   useEffect(() => {
//     // Call the fetchBooks function to fetch book data
//     wishlist()
//       .then((data) => {
//         setWishlistItems(data);
//         //console.log(data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   // Render each book item in the wishlist
//   const renderItem = ({ book }) => (
//     <BookCard
//       book={book}
//       showRemoveButton={true} // Pass true to show the remove button
//       onRemovePress={() => handleRemoveFromWishlist(book.id)}
//     />
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={wishlistItems}
//         renderItem={({ item }) => renderItem({ book: item })}
//         keyExtractor={(item) => item.id}
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   // Your style definitions here
// });

// export default WishlistScreen;
