import { Alert } from 'react-native';
import { config } from '../configurations/config';
import { getAuth } from './Authentication';

export async function addToWishlist(bookId) {
  try {
    const authToken = await getAuth();
    const data = {
      bookId: bookId,
    };
    const response = await fetch(`${config.url}/api/wishlist/add`, {
      method: 'POST',
      headers: {
        'x-auth-token': authToken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      Alert.alert('Book added to wishlist successfully');
    } else {
      Alert.alert('Failed to add book to wishlist');
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function wishlist() {
  try {
    const authToken = await getAuth();
    const response = await fetch(`${config.url}/api/wishlist/get`, {
      headers: {
        'x-auth-token': authToken,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function removeFromWishlist(bookId) {
  try {
    const authToken = await getAuth();
    const response = await fetch(`${config.url}/api/wishlist/remove/${bookId}`, {
      method: 'DELETE',
      headers: {
        'x-auth-token': authToken,
      },
    });
    Alert.alert('Book removed from wishlist successfully');
  } catch (error) {
    Alert.alert('Error removing book from wishlist');
    throw error;
  }
}

export default { addToWishlist, wishlist, removeFromWishlist };
