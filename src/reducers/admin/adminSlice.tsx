import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {ADMIN,fetchAdminData} from "./adminThunk/adminThunk"


interface MealsState {
  admin: ADMIN[];
  isLoading: boolean;
  error: string | null | undefined;
}

const initialState: MealsState = {
  admin: [],
  isLoading: false,
  error: null,
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

  }});

export const { setAdmin, setLoading, setAdminError } = adminSLice.actions;

export default adminSLice.reducer;
