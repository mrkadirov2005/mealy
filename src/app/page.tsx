"use client";
import { Provider } from "react-redux";
// import LayOut from "../components/layout/page";
import store from "../reducers/store";
import React, { useState } from "react";
import Routing from "@/components/layout/routing";
import Filters from "./filters/page";
import FiltersComp from "@/components/filters/checkbox/page";
import Header from "@/components/header/page";
const Home = () => {
  const [nav,setNav]=useState<boolean>(true)

  const handleLeftNavToggler=()=>{
document.getElementById("main_nav_toggler")?.classList.toggle("shrink_nav_bar")
document.getElementById("toggler_button")?.classList.toggle("shrinked_button")
document.getElementById("main_inner_container")?.classList.toggle("disabled")

setNav(!nav)
  }
  
  return (
    <Provider store={store}>
    

        <div className="main_global_container">
        <Routing />
						<Header />
          <div className="site_main_wrapper">
          
             <button id="toggler_button" onClick={()=>handleLeftNavToggler()}>{!nav?"➡️":"X"}</button>
            <div className="left_switches" id="main_nav_toggler" >
          
             <FiltersComp/>
            </div>
            <div className="right_products">
              hello
            </div>
          </div>
        </div>
    </Provider>
  );
};

export default Home;
