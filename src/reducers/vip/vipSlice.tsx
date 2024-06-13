import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchVIPData,VIP } from './vipThunk/vipThunk';


interface MealsState {
  vip: VIP[];
  isLoading: boolean;
  error: string | null | undefined;
}

const initialState: MealsState = {
  vip: [],
  isLoading: false,
  error: null,
};

const vipSlice = createSlice({
  name: 'vip',
  initialState,
  reducers: {
    setVIP(state, action: PayloadAction<VIP[]>) {
      state.vip = action.payload;
    },
    
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setVIPError(state, action) {
      state.error = action.payload;
    },

  },extraReducers(builder){
    builder.addCase(fetchVIPData.fulfilled,(state,action)=>{
      state.vip=action.payload
      state.isLoading=false
      state.error=null
    })
    builder.addCase(fetchVIPData.rejected,(state,action)=>{
      state.vip=[]
      state.isLoading=false
      state.error=action.error.message
    })
    builder.addCase(fetchVIPData.pending,(state,action)=>{
      state.vip=[]
      state.isLoading=true
      state.error=""
    })

  }});

export const { setVIP, setLoading, setVIPError } = vipSlice.actions;

export default vipSlice.reducer;
