import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Meal } from '../mealsSlice/mealsthunk/mealsThunk';

interface MealsState {
  meal: Meal[];
  isLoading: boolean;
  error: string | null;
}

const initialState: MealsState = {
  meal: [],
  isLoading: false,
  error: null,
};

const mealSlice = createSlice({
  name: 'meal',
  initialState,
  reducers: {
    setMeal(state, action: PayloadAction<Meal[]>) {
      state.meal = action.payload;
    },
    
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },

  }});

export const { setMeal, setLoading, setError } = mealSlice.actions;

export default mealSlice.reducer;
