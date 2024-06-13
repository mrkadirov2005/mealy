import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define the type for the admin object
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

// Define the type for the props to be passed to the thunk
interface PROPS {
  firstname:string
}
// const objs={
//   type:"admin/login",
//   email:"muzaffar571181@gmail.com",
//   password:"ifromurgut2005"
// }

// Define an async thunk for fetching admin data
export const getAdminProducts = createAsyncThunk<Meal[], PROPS>(
  'admin/getAdminProducts',
  async ({ firstname }: PROPS) => {
    try {
      
      const response = await axios.post<Meal[]>(`http://localhost:9000/products`, {firstname});
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

// Define the type for the action returned by fetchAdminData
type FetchAdminAction = ReturnType<typeof getAdminProducts.fulfilled>;
