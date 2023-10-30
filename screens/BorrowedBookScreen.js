// import React, { useState, useEffect } from 'react';
// import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
// import { bookItems } from '../constants'; // Import your dummy data
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useNavigation } from '@react-navigation/native';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
// import BookCard from '../components/BookCard';
// import { borrowedlist } from '../services/BooksServices';


// const BorrowedBookScreen = () => {
//   const navigation = useNavigation();
//   const [borrowedList, setBorrowedList] = useState();
//   const [error, setError] = useState(null);

//   // const handleRemoveFromborrowedList = (bookId) => {
//   //   // Remove the book from the borrowedList based on its ID
//   //   const updatedBorrowedList = borrowedList.filter((book) => book.id !== bookId);
//   //   setBorrowedList(updatedBorrowedList);
//   // };

//   useEffect(() => {
//     // Call the fetchBooks function to fetch book data
//     borrowedlist()
//       .then((data) => {
//         setBorrowedList(data);
    
//         //console.log(data);
      
//       })
//       .catch((error) => {
//         setError(error);
//       });
//   },[])

//   // Render each book item in the borrowedList
//   // const renderItem = ({ item }) => (
//   //   <BookCard
//   //       book={item}
//   //       showRemoveButton={false} // Pass true to show the remove button
//   //       onRemovePress={() => handleRemoveFromborrowedList(item.id)}
//   //   />
//   // );

//   const renderItem = ({ borrow }) => (
//     <BookCard
//         book={borrow.book}
//         showRemoveButton={false} // Pass true to show the remove button
        
//     />
//   );


//   return (
//     <SafeAreaView style={styles.container}>
//       {/* <TouchableOpacity
//           style={styles.goBackButton}
//           onPress={() => navigation.goBack()}
//         >
//           <FontAwesomeIcon icon={faArrowLeft} size={20} color="black" />
//       </TouchableOpacity>

//       <Text style={styles.header}>Reserved Books</Text> */}
//       <FlatList
//         data={borrowedList}
//         renderItem={({ item }) => renderItem({ borrow: item })}
//         keyExtractor={(item) => item.barrow_id}
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
//   bookItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   bookImage: {
//     width: 80,
//     height: 120,
//     borderRadius: 8,
//   },
//   BookDetailsScreen: {
//     marginLeft: 16,
//     flex: 1,
//   },
//   bookTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   bookCategory: {
//     fontSize: 16,
//   },
//   bookAuthor: {
//     fontSize: 16,
//   },
//   bookLanguage: {
//     fontSize: 16,
//   },
//   removeButton: {
//     backgroundColor: 'red',
//     paddingVertical: 8,
//     paddingHorizontal: 6,
//     borderRadius: 8,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   removeButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
// });

// export default BorrowedBookScreen;



import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { bookItems } from '../constants'; // Import your dummy data
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import BookCard from '../components/BookCard';
import OverdueBookCard from '../components/OverdueBookCard';

import { borrowedlist } from '../services/Borrowings';


const BorrowedBookScreen = () => {
  const navigation = useNavigation();
  const [borrowedList, setBorrowedList] = useState();

  useEffect(() => {
    // Call the fetchBooks function to fetch book data
    borrowedlist()
      .then((data) => {
        setBorrowedList(data);
        // console.log(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);



  // // Render each book item in the borrowedList
  // const renderItem = ({ item }) => (
  //   <OverdueBookCard
  //       book={item}
  //       showRemoveButton={false} // Pass true to show the remove button
  //       onRemovePress={() => handleRemoveFromborrowedList(item.id)}
  //   />
  // );

  // Render each book item in the reservedList
  const renderItem = ({ borrowing }) => (
    <BookCard
        book={borrowing.book}
        showRemoveButton={false} // Pass true to show the remove button}
    />
  );


  return (
    <SafeAreaView style={styles.container}>
      {/* <TouchableOpacity
          style={styles.goBackButton}
          onPress={() => navigation.goBack()}
        >
          <FontAwesomeIcon icon={faArrowLeft} size={20} color="black" />
      </TouchableOpacity>

      <Text style={styles.header}>Reserved Books</Text> */}
      <FlatList
        data={borrowedList}
        renderItem={({ item }) => renderItem({ borrowing: item })}
        keyExtractor={(item) => item.barrow_id}
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

export default BorrowedBookScreen;