import { config } from "../configurations/config";

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
};
