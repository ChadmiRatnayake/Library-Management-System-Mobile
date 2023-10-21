import { Alert } from "react-native";
import { config } from "../configurations/config";
import { getAuth } from "./Authentication";


const fetchNotifications = async () => {
    try {
      const response = await fetch(`${config.url}/api/notification/notifications`);
      //console.log(response);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };