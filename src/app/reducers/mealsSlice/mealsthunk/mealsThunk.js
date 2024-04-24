import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define an async thunk for fetching meals
export const fetchMealsData = createAsyncThunk(
  'meals/fetchMeals',
  async () => {
    try {
      const response = await axios.get(`http://localhost:9000/meals`);
      return response.data; // Assuming you want to return the data from the response
    } catch (error) {
      throw error;
    }
  }
);
