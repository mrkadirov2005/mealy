import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {fetchMealsData,Meal} from "./mealsthunk/mealsThunk"
interface MealsState {
  meals: Meal[];
  isLoading: boolean;
  error: string | null;
}

const initialState: MealsState = {
  meals: [],
  isLoading: false,
  error: null,
};

const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {
    setMeals(state, action: PayloadAction<Meal[]>) {
      state.meals = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMealsData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMealsData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.meals = action.payload;
      })
      .addCase(fetchMealsData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to fetch meals';
      });
  },
});

export const { setMeals, setLoading, setError } = mealsSlice.actions;

export default mealsSlice.reducer;
