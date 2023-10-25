import { Alert } from "react-native";
import { config } from "../configurations/config";
import { getAuth } from "./Authentication";




export async function borrowedList() {
    try {
      const authToken = await getAuth();
      const response = await fetch(`${config.url}/api/barrows/find`, {
        headers: {
          'x-auth-token': authToken,
        },
      });
      const data = await response.json();
      const books = data.map((item) => ({
        book: item.book,
        name: item.name,
        barrow_id: item.barrow_id,
      }));
      return books;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  