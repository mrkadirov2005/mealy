import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchVIPData,VIP } from './vipThunk/vipThunk';


interface MealsState {
  admin: VIP[];
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
    setVIP(state, action: PayloadAction<VIP[]>) {
      state.admin = action.payload;
    },
    
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setVIPError(state, action) {
      state.error = action.payload;
    },

  },extraReducers(builder){
    builder.addCase(fetchVIPData.fulfilled,(state,action)=>{
      state.admin=action.payload
      state.isLoading=false
      state.error=null
    })
    builder.addCase(fetchVIPData.rejected,(state,action)=>{
      state.admin=[]
      state.isLoading=false
      state.error=action.error.message
    })
    builder.addCase(fetchVIPData.pending,(state,action)=>{
      state.admin=[]
      state.isLoading=true
      state.error=""
    })

  }});

export const { setVIP, setLoading, setVIPError } = adminSLice.actions;

export default adminSLice.reducer;
