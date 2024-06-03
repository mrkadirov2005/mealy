import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define the type for the admin object
// TODO correct interface of VIP

export interface VIP {
  _id: string,
  firstname: string,
  lastname: string,
  username: string,
  email: string,
  phone_number: number
  password: string | number,
  loggedIn: boolean,
  token: string,
  __v: number,
}
// Define the type for the props to be passed to the thunk
interface PROPS {
  number:number | string,
  email: string;
  password: string;
}


// Define an async thunk for fetching admin data
export const fetchVIPData = createAsyncThunk<VIP[], PROPS>(
  'admin/fetchVIPlogin',
  async ({ number,email, password }: PROPS) => {
    try {
    console.log(number,email,password)
      const response = await axios.post<VIP[]>(`http://localhost:9000/auth`, {type:"vip/login",number,email,password});
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

// Define the type for the action returned by fetchAdminData
type FetchAdminAction = ReturnType<typeof fetchVIPData.fulfilled>;
