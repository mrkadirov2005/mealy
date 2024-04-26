import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define the type for the meal object
export interface Meal {
  name: string;
  ingredients: string[];
  type: string;
  price: number;
  count: number;
  country: string;
  id: number;
  ordered: number;
}


// Define an async thunk for fetching meals
export const fetchMealsData = createAsyncThunk<Meal[], void>(
  'meals/fetchMeals',
  async () => {
    try {
      const response = await axios.get<Meal[]>(`http://localhost:9000/meals`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

// Define the type for the action returned by fetchMealsData
type FetchMealsAction = ReturnType<typeof fetchMealsData.fulfilled>;
