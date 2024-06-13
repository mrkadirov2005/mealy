"use client"
import React, { useState } from 'react'
import "./admin_styles.css"
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { getAdmin, getAdminError, getAdminProductsSelector } from '@/settings/selectors'
import { getAdminProducts } from '@/reducers/admin/adminThunk/getAdminProducts'
import { Button, Card } from '@mui/material'
import { addNewProductByAdmin } from '@/reducers/admin/adminThunk/addNewProductThunk'

  // interface for props
  interface Props{
    set_auth_type:React.Dispatch<React.SetStateAction<string | number | undefined>>
  }
const AdminPanelInfo = ({set_auth_type}:Props) => {

  const [open,setOpen]=useState<boolean>(false)
const AdminError=useSelector(getAdminError)
const AdminData=useSelector(getAdmin)
const adminProducts=useSelector(getAdminProductsSelector)
const [isProductOpen,setIsProductOpen]=useState<boolean>(false)



  const handleOptionsOpen=()=>{
    document.getElementById("admin_page_option_menu")?.classList.toggle("enabled")
    setOpen(!open)
  set_auth_type("admin")
  
}
const dispatch=useDispatch()


  const getAdminProductsHandler=()=>{
    
    dispatch(getAdminProducts({"firstname":"muzaffar"}))
  }

  return (
    AdminError?<div>{AdminError} <button onClick={()=>set_auth_type(1)}>back to login page</button></div>:
    <div className='admin_page_container'>
        <div className="admin_page_options_menu h-screen" id="admin_page_option_menu">
        <Image className='admin_image' src="/user.png" alt="#"  width={100} height={100} />
        <h2 className="username" id="username">Abduqodirov Muzaffar</h2>
        <h2 className="options_menu_heading">Actions:</h2>
        <ul className="admin_panel_options_list" id="admin_panel_options_list">
          <button onClick={()=>{
            getAdminProductsHandler()
            setIsProductOpen(!isProductOpen)
            }} className="admin_panel_option_items" id="admin_panel_option_items">get my products</button>
          <button   onClick={()=>{
            dispatch(addNewProductByAdmin({"name":"new_item"}))
            
            }} className="admin_panel_option_items" id="admin_panel_option_items">add new product</button>
          <button className="admin_panel_option_items" id="admin_panel_option_items">statistics</button>
          <button className="admin_panel_option_items" id="admin_panel_option_items">comments</button>
        </ul>



        </div>
        <div className="admin_panel_data flex flex-col bg-gray-500 w-full h-screen" id="admin_panel_data">
          <h1 className="admin_panel_heading text-2xl bg-orange-800 hover:p-3">

            admin panel

          </h1>
          <ul className="userdata_container flex items-center justify-around  bg-gray-300  hover: font-sans text-xl" >
            <li className="userInfo hover:bg-gray-600 p-2" id="user_first_name">{AdminData.firstname}</li>
            <li className="userInfo hover:bg-gray-600 p-2" id="user_last_name">{AdminData.lastname}</li>
            <li className="userInfo hover:bg-gray-600 p-2" id="username">{AdminData.username}</li>
          </ul>

{isProductOpen?
<div className='admin_products_container flex flex-row  flex-wrap'>
          {adminProducts.map(item=>
      <Card id={item.id}
      //  onClick={(e)=>handleSetSingleItem(e)}
        className='meal_items w-48'>
        <h1>
      {item.name}

        </h1>
      <img src={item.image} alt={`image of ${item.name}`} />
      <h1>{item.price}</h1>
      <h4>{item.producer}</h4>
      <Button variant="contained">view</Button>
      </Card>
      )}
      </div>:""}

          <div className="data_wrapper flex items-center justify-start ">
            <h3 className="address text-lg  bottom-2 ">{AdminData.email}</h3>
            <h3 className="address text-lg  bottom-2  ml-8 ">{AdminData.phone_number}</h3>
          </div>
          <span className='address text-lg mr-auto '>{AdminData.address}</span>
          <span className="admin_unique_id text-sm bg-transparent hover:text-2xl">id:{AdminData._id}</span>
          
        </div>
        <button  className="toggle_admin_options_panel" id="toggle_admin_options_panel" onClick={()=>handleOptionsOpen()}>{open?"X":"➡️"}</button>
        </div>
  )
}

export default AdminPanelInfo