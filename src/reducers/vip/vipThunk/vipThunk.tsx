import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define the type for the admin object
// TODO correct interface of VIP
export interface VIP {

_id:string,
firstname:string,
lastname
"kadirov"
username
"mr_kadirov101"
email
"muzaffar571181@gmail.com"
phone_number
974088108
password
"$2b$10$myarlbcN9rFt8sJ0RfqxyOnZyQhivgbhN.MPIefhigcjSgTYBtgdK"
loggedIn
false
token
""
__v
0
}

// Define the type for the props to be passed to the thunk
interface PROPS {
  phone_number:number | string,
  email: string;
  password: string;
}
// const objs={
//   type:"admin/login",
//   email:"muzaffar571181@gmail.com",
//   password:"ifromurgut2005"
// }

// Define an async thunk for fetching admin data
export const fetchAdminData = createAsyncThunk<VIP[], PROPS>(
  'admin/fetchAdmin',
  async ({ phone_number,email, password }: PROPS) => {
    try {
      alert(email)
      alert(password)
      const response = await axios.post<VIP[]>(`http://localhost:9000/auth`, {type:"vip/login",email,password});
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

// Define the type for the action returned by fetchAdminData
type FetchAdminAction = ReturnType<typeof fetchAdminData.fulfilled>;
