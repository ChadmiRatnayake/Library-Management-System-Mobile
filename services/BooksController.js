import { Alert } from "react-native";
import { config } from "../configurations/config";
import { getAuth } from "./Authentication";


export const fetchBooks = async () => {
  try {
    const response = await fetch(`${config.url}/api/books/find`);

    if (!response.ok) {
      throw new Error(response.status);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}




////////////////////////////////////////////////////////////////////////////////////////////


export async function reserve(bookId) {
  try {
    const authToken = await getAuth(); // Declare 'authToken' with 'const'

    const data = {
      bookid: bookId
    };

    const response = await fetch(`${config.url}/api/reservations`, {
      method: 'POST',
      headers: {
        'x-auth-token': authToken,
        'Content-Type': 'application/json', // Set Content-Type header for JSON
      },
      body: JSON.stringify(data), // Serialize data to JSON
    });

    if (response.ok) {
      // Successful reservation
      Alert.alert('Reservation Successful');
    } else {
      // Handle reservation failure
      Alert.alert('Reservation Failed');
    }
  } catch (error) {
    if (error.response && error.response.status !== 401) {
      // Handle non-401 errors
      Alert.alert('Reservation Failed');
    }
    throw error;
  }
}


export async function reservedlist() {
  try {
    const authToken = await getAuth(); // Use await to get the authentication token
    const response = await fetch(`${config.url}/api/reservations/find`, {
      headers: {
        'x-auth-token': authToken, // Use the obtained token here
      },
    });
    const data = await response.json(); // Parse the response as JSON
    const books = data.map(item => ({ book: item.book, name: item.name, reservation_id: item.reservation_id }));
    return books;
  } catch (error) {
    return null; // Return null or handle the error as needed
  }
}

export async function cancelReservation(reservationId) {
  try {
    const authToken = await getAuth();
    const response = await fetch(`${config.url}/api/reservations/delete/${reservationId}`, {
      method: 'DELETE',
      headers: {
        'x-auth-token': authToken,
      },
    });
    Alert.alert('Reservation deleted successfully');
  } catch (error) {
    Alert.alert('Error deleting reservation');
    throw error;
  }
}


export async function getBarrowed() {
  try {
    const authToken = await getAuth();
    const res = await fetch(`${config.url}/api/barrows/findone`, {
      method: 'GET',
      headers: {
        'x-auth-token': authToken,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    if (error.response.status !== 401) {
      Alert.alert("Getting barrow Unseccessful");
    }
    throw error;
  }
}



