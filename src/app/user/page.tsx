"use client"
import React, { useState } from 'react'
import "./user_styles.css"
import Image from 'next/image'
const UserPanel = () => {
  const [open,setOpen]=useState<boolean>(false)
  const handleOptionsOpen=()=>{
    document.getElementById("user_page_option_menu")?.classList.toggle("enabled")
    setOpen(!open)
  }
  return (
    <div className='user_page_container'>
        <div className="user_page_options_menu" id="user_page_option_menu">
        <Image className='user_image' src="/user.png" alt="#"  width={100} height={100} />
        <h2 className="username" id="username">Abduqodirov Muzaffar</h2>
        <h2 className="options_menu_heading">Actions:</h2>
        <ul className="user_panel_options_list" id="user_panel_options_list">
          <li className="user_panel_option_items" id="user_panel_option_items">get my orders</li>
          <li className="user_panel_option_items" id="user_panel_option_items"> order statistics</li>
          <li className="user_panel_option_items" id="user_panel_option_items">my comments</li>
        </ul>



        </div>
        <div className="user_panel_data" id="user_panel_data">
          <h1 className="user_panel_heading">
            user panel
          </h1>
        </div>
        <button  className="toggle_user_options_panel" id="toggle_user_options_panel" onClick={()=>handleOptionsOpen()}>{open?"X":"➡️"}</button>
        </div>
  )
}

export default UserPanel