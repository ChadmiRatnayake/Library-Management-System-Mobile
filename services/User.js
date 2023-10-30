import { Alert } from "react-native";
import { config } from "../configurations/config";
import { getAuth } from "./Authentication";

export async function userDetails() {
  try {
    const authToken = await getAuth();
    const response = await fetch(`${config.url}/api/users/me`, {
      headers: {
        'x-auth-token': authToken,
      },
    });

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const userData = await response.json();

    if (userData && userData.name && userData.email) {
      const name = userData.name;
      const email = userData.email;
      console.log(name, email);
      return [name, email];
    } else if (userData && !userData.name && !userData.email) {
      throw new Error('User data is missing or incomplete: Both name and email are missing');
    } else if (userData && !userData.name) {
      throw new Error('User data is missing or incomplete: Name is missing');
    } else if (userData && !userData.email) {
      throw new Error('User data is missing or incomplete: Email is missing');
    } else {
      throw new Error('User data is missing or incomplete: Unknown issue');
    }
  } catch (error) {
    console.error("Error fetching user details:", error);
    Alert.alert("Error", "Failed to fetch user details");
    return [null, null];
  }
}
