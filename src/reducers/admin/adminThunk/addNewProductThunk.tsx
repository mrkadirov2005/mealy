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
  name:string
}
// const objs={
//   type:"admin/login",
//   email:"muzaffar571181@gmail.com",
//   password:"ifromurgut2005"
// }

// Define an async thunk for fetching admin data
export const addNewProductByAdmin = createAsyncThunk<Meal[], PROPS>(
  'admin/addNewProduct',
  async ({ name }: PROPS) => {
    try {
      
      const response = await axios.post<Meal[]>(`http://localhost:9000/add_product`, {name});
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

// Define the type for the action returned by fetchAdminData
type FetchAdminAction = ReturnType<typeof getAdminProducts.fulfilled>;
