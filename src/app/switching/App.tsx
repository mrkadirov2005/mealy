"use client"
import FiltersComp from '@/components/filters/checkbox/page'
import Header from '@/components/header/page'
import React, { useState } from 'react'
import HomeProducts from '../products/page'
import ProductPage from '../product/page'
import { Button } from '@mui/material'
import RegisterPage from '../register/page'
import Link from 'next/link'
import RegisterLayout from '../register/page'

export default function Site_wrapper() {
	// "use client"
	
const [displayMode,setDisplayMode]=useState<boolean>(false)
const [nav,setNav]=useState<boolean>(true)
const [reg,setReg]=useState<boolean>(false)

const handleLeftNavToggler=()=>{
    document.getElementById("main_nav_toggler")?.classList.toggle("shrink_nav_bar")
    document.getElementById("toggler_button")?.classList.toggle("shrinked_button")
    document.getElementById("main_inner_container")?.classList.toggle("disabled")
    
    setNav(!nav)
      }

  return (
    reg?<RegisterLayout />
    :!displayMode? 
    <div className="main_global_container">
        
						<Header props={{setReg,reg}} />
          <div className="site_main_wrapper">
             <button id="toggler_button" className='absolute  items-center justify-center ml-auto text-xl opacity-60' style={{"top":"10.5vh"}}  onClick={()=>handleLeftNavToggler()}>{!nav?"➡️":"X"}</button>
            <div className="left_switches" id="main_nav_toggler" >
             <FiltersComp/>
            </div>
            <div className="right_products">
            <HomeProducts setToMain={setDisplayMode}/>
            </div>
          </div>
        </div>
        :!reg?<ProductPage setToMain={setDisplayMode}/>:""

  )
}
