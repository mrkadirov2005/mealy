import { configureStore } from '@reduxjs/toolkit';
import MealsReducer from "./mealsSlice/mealsSlice";
import thunk from 'redux-thunk';
import mealsReducer from "./mealsSlice/mealsSlice"



const store = configureStore({
  reducer: mealsReducer,
  
});

export default store;
