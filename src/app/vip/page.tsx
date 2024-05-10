"use client"
import React, { useState } from 'react'
import "./super_user_styles.css"
import Image from 'next/image'
const SuperUser
 = () => {
  const [open,setOpen]=useState<boolean>(false)
  const handleOptionsOpen=()=>{
    document.getElementById("super_user_page_option_menu")?.classList.toggle("enabled")
    setOpen(!open)
  }
  return (
    <div className='super_user_page_container'>
        <div className="super_user_page_options_menu" id="super_user_page_option_menu">
        <Image className='super_user_image' src="/user.png" alt="#"  width={100} height={100} />
        <h2 className="super_username" id="super_username">Abduqodirov Muzaffar</h2>
        <h2 className="options_menu_heading">Actions:</h2>
        <ul className="super_user_panel_options_list" id="super_user_panel_options_list">
          <li className="super_user_panel_option_items" id="super_user_panel_option_items">admins</li>
          <li className="super_user_panel_option_items" id="super_user_panel_option_items">sale statistics</li>
          <li className="super_user_panel_option_items" id="super_user_panel_option_items">satisfactory level</li>
          <li className="super_user_panel_option_items" id="super_user_panel_option_items">complaints</li>
        </ul>



        </div>
        <div className="super_user_panel_data" id="super_user_panel_data">
          <h1 className="super_user_panel_heading">
            super_user panel
          </h1>
        </div>
        <button  className="toggle_super_user_options_panel" id="toggle_super_user_options_panel" onClick={()=>handleOptionsOpen()}>{open?"X":"➡️"}</button>
        </div>
  )
}

export default SuperUser
