import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define the type for the admin object
export interface ADMIN {
  _id: string;
  firstname: string;
  lastname: string;
  username: string;
  token: string;
  address: string;
  email: string;
  password: string;
  loggedIn: boolean;
  phone_number: number;
}

// Define the type for the props to be passed to the thunk
interface PROPS {
  email: string;
  password: string;
}
// const objs={
//   type:"admin/login",
//   email:"muzaffar571181@gmail.com",
//   password:"ifromurgut2005"
// }

// Define an async thunk for fetching admin data
export const fetchAdminData = createAsyncThunk<ADMIN[], PROPS>(
  'admin/fetchAdminLogin',
  async ({ email, password }: PROPS) => {
    try {
      alert(email)
      alert(password)
      const response = await axios.post<ADMIN[]>(`http://localhost:9000/auth`, {type:"admin/login",email,password});
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

// Define the type for the action returned by fetchAdminData
type FetchAdminAction = ReturnType<typeof fetchAdminData.fulfilled>;
