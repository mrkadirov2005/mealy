"use client"
import React, { useState } from 'react'
import "./admin_styles.css"
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { getAdmin, getAdminError } from '@/settings/selectors'


  // interface for props
  interface Props{
    set_auth_type:React.Dispatch<React.SetStateAction<string | number | undefined>>
  }
const AdminPanelInfo = ({set_auth_type}:Props) => {

  const [open,setOpen]=useState<boolean>(false)
const AdminError=useSelector(getAdminError)
const AdminData=useSelector(getAdmin)
  const handleOptionsOpen=()=>{
    document.getElementById("admin_page_option_menu")?.classList.toggle("enabled")
    setOpen(!open)
  set_auth_type("admin")
  
  }

  return (
    AdminError?<div>{AdminError}</div>:
    <div className='admin_page_container'>
        <div className="admin_page_options_menu" id="admin_page_option_menu">
        <Image className='admin_image' src="/user.png" alt="#"  width={100} height={100} />
        <h2 className="username" id="username">Abduqodirov Muzaffar</h2>
        <h2 className="options_menu_heading">Actions:</h2>
        <ul className="admin_panel_options_list" id="admin_panel_options_list">
          <li className="admin_panel_option_items" id="admin_panel_option_items">get my products</li>
          <li className="admin_panel_option_items" id="admin_panel_option_items">add new product</li>
          <li className="admin_panel_option_items" id="admin_panel_option_items">statistics</li>
          <li className="admin_panel_option_items" id="admin_panel_option_items">comments</li>
        </ul>



        </div>
        <div className="admin_panel_data" id="admin_panel_data">
          <h1 className="admin_panel_heading">

            admin panel
          </h1>
          <h1 className="admin_unique_id">{AdminData._id}</h1>
        </div>
        <button  className="toggle_admin_options_panel" id="toggle_admin_options_panel" onClick={()=>handleOptionsOpen()}>{open?"X":"➡️"}</button>
        </div>
  )
}

export default AdminPanelInfo