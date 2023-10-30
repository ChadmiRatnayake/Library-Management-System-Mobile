import AsyncStorage from '@react-native-async-storage/async-storage';
import { config } from "../configurations/config";
import { Alert } from 'react-native';
import { getAuth } from './Authentication';

export async function getUser() {
    try {
        const authToken = await getAuth();
        const response = await fetch(`${config.url}/api/users/me`, {
            headers: {
                "x-auth-token": authToken,
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}

export async function updateUser(formData) {
    try {
        const authToken = await getAuth(); // Assuming getAuth() is a function that correctly retrieves the authentication token.
        const response = await fetch(`${config.url}/api/users/update`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': authToken,
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            const data = await response.text();
        
        } else {
            const errorData = await response.text();
        }
    } catch (error) {
        Alert.alert(`An error occurred: ${error.message}`);
        throw error;
    }
}
