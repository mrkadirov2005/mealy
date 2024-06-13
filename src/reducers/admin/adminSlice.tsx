import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {ADMIN,fetchAdminData} from "./adminThunk/adminThunk"
import { LogOutAdmin } from './adminThunk/adminLogOutThunk';
import { getAdminProducts } from './adminThunk/getAdminProducts';
import { addNewProductByAdmin } from './adminThunk/addNewProductThunk';

interface MealsState {
  admin: ADMIN[];
  isLoading: boolean;
  error: string | null | undefined;
  products:object
  message:string
}

const initialState: MealsState = {
  admin: [],
  isLoading: false,
  error: null,
  products:{},
  message:""
};

const adminSLice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setAdmin(state, action: PayloadAction<ADMIN[]>) {
      state.admin = action.payload;
    },
    
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setAdminError(state, action) {
      state.error = action.payload;
    },

  },extraReducers(builder){
    builder.addCase(fetchAdminData.fulfilled,(state,action)=>{
      state.admin=action.payload
      state.isLoading=false
      state.error=null
    })
    builder.addCase(fetchAdminData.rejected,(state,action)=>{
      state.admin=[]
      state.isLoading=false
      state.error=action.error.message
    })
    builder.addCase(fetchAdminData.pending,(state,action)=>{
      state.admin=[]
      state.isLoading=true
      state.error=""
    })
    builder.addCase(LogOutAdmin.fulfilled,(state,action)=>{
      state.error="succesfully logged Out"
      state.admin=[]
      state.isLoading=false
    })
    builder.addCase(LogOutAdmin.rejected,(state,action)=>{
      state.error=action.payload as string
      state.admin=[]
      state.isLoading=false

    })
    builder.addCase(LogOutAdmin.pending,(state)=>{
      state.isLoading=true
    })
    // cases for getAdminProducts
    builder.addCase(getAdminProducts.fulfilled,(state,action)=>{
      state.products=action.payload
      state.error=null
      state.isLoading=false
    })
    builder.addCase(getAdminProducts.rejected,(state,action)=>{
      state.products={}
      state.error=action.payload as string
      state.isLoading=false
      // TODO write case for pending as well
    })
    builder.addCase(addNewProductByAdmin.fulfilled,(state,action)=>{
      state.message="successfully added"
      state.error=""
    })
    builder.addCase(addNewProductByAdmin.rejected,(state,action)=>{
      state.error=action.error.message
    })
  }});

export const { setAdmin, setLoading, setAdminError } = adminSLice.actions;

export default adminSLice.reducer;
