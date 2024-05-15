import { combineReducers, configureStore } from '@reduxjs/toolkit';
import mealsReducer from "./mealsSlice/mealsSlice";
import mealReducer from "./mealSlice/mealSlice";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import persistStore from 'redux-persist/es/persistStore';

// Define the Redux Persist configuration
const persistConfig = {
  key: 'root',
  storage,
  // Optionally, you can blacklist or whitelist certain reducers
  // blacklist: ['reducerToExclude'],
  // whitelist: ['reducerToInclude'],
};

// Combine your reducers
const rootReducer = combineReducers({
  meals: mealsReducer,
  meal: mealReducer
});

// Wrap the combined reducer with Redux Persist
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store
const store = configureStore({
  reducer: persistedReducer
});

export const persistedStore = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
