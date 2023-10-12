import { React, useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { fetchBooks } from "../services/BooksController";

const windowWidth = Dimensions.get('window').width;

const BooksHorizontal = ({ title }) => {
    const navigation = useNavigation();
    const [bookData, setBookData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const onArrowPress = () => {
        navigation.navigate('SearchScreen');
    };

    useEffect(() => {
        // Call the fetchBooks function to fetch book data
        fetchBooks()
          .then((data) => {
            setBookData(data);
            setLoading(false);
          })
          .catch((error) => {
            setError(error);
            setLoading(false);
          });
      }, []);
    


    const renderBookItem = ({ item, index }) => {
        if (index < 4) { 
            //console.log(item.url);
            return (
                
                <TouchableOpacity
                    style={styles.bookItemHorizontal}
                    onPress={() => navigation.navigate('BookDetailsScreen', { book: item })}
                >
                    <View style={styles.bookImageContainerHorizontal}>
                        <Image source={{uri:item.url}} style={styles.bookImageHorizontal} />
                    </View>
                    <Text style={styles.bookTitleHorizontal}>
                        {item.title}
                    </Text>
                </TouchableOpacity>
            );
        } else if (index === 4) { 
            return (
                <TouchableOpacity
                    style={styles.seeMoreContainer}
                    onPress={() => navigation.navigate('Recents')}
                >
                    <Text style={styles.seeMoreText}>See More</Text>
                    <FontAwesomeIcon icon={faArrowRight} size={20} color="black" />
                </TouchableOpacity>
            );
        }
    };
    


    if (loading) {
        return <Text>Loading...</Text>;
    }

    if (error) {
        return <Text>Error: {error.message}</Text>;
    }


    return (
        <View style={styles.containerHorizontal}>
            <View style={styles.headerContainer}>
                <Text style={styles.titleHorizontal}>
                    {title}
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Recents')} style={styles.arrowContainer}>
                    <Text style={styles.seeMoreText}>See More</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={bookData}
                keyExtractor={(item) => item.bookid}
                renderItem={renderBookItem}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.bookList}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    containerHorizontal: {
        flex: 1,
        backgroundColor: '#9992',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: 'white',
    },
    titleHorizontal: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'gray',
    },
    bookList: {
        paddingVertical: 8,
    },
    bookItemHorizontal: {
        marginBottom: 16,
        backgroundColor: 'white',
        borderRadius: 16,
        elevation: 3,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        marginHorizontal: 8,
        width: windowWidth * 0.45,
    },
    bookImageContainerHorizontal: {
        alignItems: 'center',
        padding: 8,
    },
    bookImageHorizontal: {
        width: windowWidth * 0.3,
        height: 180,
        borderRadius: 8,
        overflow: 'hidden',
        marginTop: 8,
    },
    bookTitleHorizontal: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 8,
        marginBottom: 8,
        alignSelf: 'center',
    },
    seeMoreContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
        backgroundColor: 'white',
        borderRadius: 16,
        elevation: 3,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        marginHorizontal: 8,
        width: windowWidth * 0.45,
    },
    seeMoreText: {
        fontSize: 16,
        fontWeight: 'regular',
        color: '#0A84FF',
        marginBottom: 4,
    },
});

export default BooksHorizontal;
