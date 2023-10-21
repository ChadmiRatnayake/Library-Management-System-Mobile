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

// export async function findBook(bookId) {
//   try {
//     console.log(bookId);
//     const response = await fetch(`${config.url}/api/books/findone/${bookId}`);
//     return response.data;
//   } // Assuming the API returns an array of book data
//   catch (error) {
//     console.log(error)
//     throw error;
//   }

// }


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
    console.log(error);
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
    console.log(error);
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


// export async function cancelReservation(reservationId) {
//   try {
//     const authToken = await getAuth();
//     // Show a confirmation box
//     Alert.alert(
//       "Confirm Delete",
//       "Are you sure you want to delete this reservation?",
//       [
//         {
//           text: "Cancel",
//           style: "cancel",
//         },
//         {
//           text: "OK",
//           onPress: async () => {
//             try {
//               const response = await fetch(
//                 `${config.url}/api/reservations/delete/${reservationId}`,
//                 {
//                   method: "DELETE",
//                   headers: {
//                     "x-auth-token": authToken,
//                   },
//                 }
//               );
//               if (response.ok) {
//                 Alert.alert("Reservation deleted successfully");
//               } else {
//                 Alert.alert("Failed to delete reservation");
//               }
//             } catch (error) {
//               Alert.alert("Error deleting reservation");
//               throw error;
//             }
//           },
//         },
//       ],
//       { cancelable: true }
//     );
//   } catch (error) {
//     Alert.alert("Error deleting reservation");
//     throw error;
//   }
// }




export async function borrowedlist() {
  try {
    const authToken = await getAuth(); // Use await to get the authentication token
    const response = await fetch(`${config.url}/api/barrows/find`, {
      headers: {
        'x-auth-token': authToken, // Use the obtained token here
      },
    });
    const data = await response.json(); // Parse the response as JSON
    const books = data.map(item => ({ book: item.book, name: item.name, barrow_id: item.barrow_id }));
    return books;
  } catch (error) {
    console.log(error);
    return null; // Return null or handle the error as needed
  }
}

