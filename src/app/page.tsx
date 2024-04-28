"use client";
import { Provider } from "react-redux";
// import LayOut from "../components/layout/page";
import store from "../reducers/store";
import React from "react";
import Routing from "@/components/layout/routing";
const Home = () => {

  return (
    <Provider store={store}>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          
          <div className="left_switches">
           <div className="innerContainer"> 
           <button>change btn</button>

            toggler
            </div>
          </div>
          <div className="right_products">
            products
          </div>
        </main>
    </Provider>
  );
};

export default Home;
