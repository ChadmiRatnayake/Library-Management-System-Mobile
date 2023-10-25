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

