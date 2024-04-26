"use client";
import { Provider } from "react-redux";
import LayOut from "../components/layout/page";
import store from "../reducers/store";
import React from "react";
const Home = () => {
  return (
    <Provider store={store}>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <LayOut />
        </main>
    </Provider>
  );
};

export default Home;
