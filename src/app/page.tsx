"use client";
import { Provider } from "react-redux";
import store, { persistedStore } from "../reducers/store";
import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import Site_wrapper from "./switching/App";
import Header from "@/components/header/page";
const Home = () => {
  // const dispatch=useDispatch()
  // dispatch(fetchMealsData())

  
  return (
    <Provider store={store}>
    <PersistGate persistor={persistedStore}>
      
      <Site_wrapper ></Site_wrapper>
    </PersistGate>
    </Provider>
  );
};

export default Home;
