import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { faArrowLeft, faCheck, faTimes  } from '@fortawesome/free-solid-svg-icons';

export default function BookDetailsScreen({ route }) {
  const { book } = route.params;
  const navigation = useNavigation();

  const [wishlisted, setWishlisted] = useState(false);
  const [reserved, setReserved] = useState(false);
  const [bookReserved, setBookReserved] = useState(false);
  const [bookBorrowed, setBookBorrowed] = useState(false);

  useEffect(() => {
    setBookReserved(book.reserved);
    setBookBorrowed(book.borrowed);
  }, [book]);

  const availabilityIcon = book.available ? (
    <FontAwesomeIcon icon={faCheck} size={20} color="green" />
  ) : (
    <FontAwesomeIcon icon={faTimes} size={20} color="red" />
  );

  const handleWishlistToggle = () => {
    if (!bookReserved && !bookBorrowed) {
      setWishlisted(!wishlisted);
    }
  };

  const handleReserveToggle = () => {
    if (!bookBorrowed) {
      if (!bookReserved) {
        setReserved(!reserved);
      }
      setBookReserved(!bookReserved);
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.goBackButton}
            onPress={() => navigation.goBack()}
          >
            <FontAwesomeIcon icon={faArrowLeft} size={20} color="black" />
          </TouchableOpacity>

          <Image source={book.coverPage} style={styles.bookImage} />
          <Text style={styles.bookTitle}>{book.title}</Text>
          
          <View style={styles.availabilityContainer}>
            <Text style={styles.availabilityText}>
              Availability: {availabilityIcon}
            </Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.iconTextContainer}
              onPress={handleWishlistToggle}
              // disabled={bookReserved || bookBorrowed}
            >
              <View style={styles.iconContainer}>
                <FontAwesomeIcon
                  icon={faHeart}
                  size={24}
                  color={wishlisted ? 'red' : 'gray'}
                />
              </View>
              <Text style={styles.buttonText}>
                {wishlisted ? 'Wishlisted' : 'Add to Wishlist'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.iconTextContainer}
              onPress={handleReserveToggle}
              disabled={bookBorrowed}
            >
              <View style={styles.iconContainer}>
                <FontAwesomeIcon
                  icon={faShoppingBag}
                  size={24}
                  color={book.reserved ? 'gray' : 'green'}
                />
              </View>
              <Text style={styles.buttonText}>
                {book.reserved ? 'Reserved' : 'Reserve'}
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.bookCategory}>Category: {book.category}</Text>
          <Text style={styles.bookAuthor}>Author: {book.author}</Text>
          <Text style={styles.bookLanguage}>Language: {book.language}</Text>
          <Text style={styles.bookAbstract}>{book.abstract}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  goBackButton: {
    backgroundColor: '#d4a574',
    padding: 5,
    borderRadius: 16,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    marginLeft: 4,
    marginTop: 4,
    alignSelf: 'flex-start',
  },
  bookImage: {
    width: '50%',
    height: 250,
    borderRadius: 8,
    alignSelf: 'center',
  },
  bookTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  availabilityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  availabilityText: {
    fontSize: 16,
    marginLeft: 8,
    alignSelf: 'center',
  },
  bookCategory: {
    fontSize: 16,
    marginTop: 8,
    fontWeight: 'bold',
  },
  bookAuthor: {
    fontSize: 16,
    marginTop: 8,
  },
  bookLanguage: {
    fontSize: 16,
    marginTop: 8,
  },
  bookAbstract: {
    fontSize: 16,
    marginTop: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
    marginBottom: 16,
  },
  iconTextContainer: {
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    marginTop: 4,
  },
});
