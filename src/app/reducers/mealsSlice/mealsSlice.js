import { createSlice } from '@reduxjs/toolkit';
import { fetchMealsData } from './mealsthunk/mealsThunk';

const initialState = {
  meals: [],
  isLoading: false,
  status: 'idle', // or 'loading', 'fulfilled', 'rejected'
};

export const MealsSlice = createSlice({
  name: 'meal',
  initialState,
  reducers: {
    setError(state) {
      state.status = 'error';
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMealsData.pending, (state) => {
        state.isLoading = true;
        state.status = 'loading';
      })
      .addCase(fetchMealsData.fulfilled, (state, action) => {
        state.meals = action.payload;
        state.isLoading = false;
        state.status = 'fulfilled';
      })
      .addCase(fetchMealsData.rejected, (state) => {
        state.isLoading = false;
        state.status = 'rejected';
      });
  }
});

export const { setError } = MealsSlice.actions;
export default MealsSlice.reducer;
