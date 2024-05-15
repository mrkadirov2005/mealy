"use client";
import { Provider, useSelector } from "react-redux";
// import LayOut from "../components/layout/page";
import store, { persistedStore } from "../reducers/store";
import React, { useState } from "react";
import FiltersComp from "@/components/filters/checkbox/page";
import Header from "@/components/header/page";
import HomeProducts from "./products/page";
import { PersistGate } from "redux-persist/integration/react";
import { getScreen } from "@/settings/selectors";
import ProductPage from "./product/page";
const Home = () => {
  const [nav,setNav]=useState<boolean>(true)
  // const dispatch=useDispatch()
  // dispatch(fetchMealsData())

  const handleLeftNavToggler=()=>{
document.getElementById("main_nav_toggler")?.classList.toggle("shrink_nav_bar")
document.getElementById("toggler_button")?.classList.toggle("shrinked_button")
document.getElementById("main_inner_container")?.classList.toggle("disabled")

setNav(!nav)
  }
  
const [displayMode,setDisplayMode]=useState<boolean>(false)
  return (
    <Provider store={store}>
    <PersistGate persistor={persistedStore}>
      { !displayMode? <div className="main_global_container">
						<Header />
          <div className="site_main_wrapper">
             <button id="toggler_button" onClick={()=>handleLeftNavToggler()}>{!nav?"➡️":"X"}</button>
            <div className="left_switches" id="main_nav_toggler" >
             <FiltersComp/>
            </div>
            <div className="right_products">
            <HomeProducts setToMain={setDisplayMode}/>
            </div>
          </div>
        </div>
        :<ProductPage setToMain={setDisplayMode}/>}
        </PersistGate>
    </Provider>
  );
};

export default Home;
