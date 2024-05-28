"use client"
import React from 'react'
import { Button, Card } from '@mui/material';
import { handleCloseModal } from './register_modals/actions';
import './register_styles.css'
import Link from 'next/link';



const RegisterLayout = () => {

  return (
    <div className='roles_wrapper' id='roles_wrapper'>
      <Card className="inner_container">
        <h1 className="modal_heading">Choose role: <button className='close_roles_modal' id='close_roles_modal' onClick={()=>handleCloseModal()}>X</button></h1>
        <Card className="role_item_container">
          <Link href={"/register/admin"}>admin</Link>
          <Link href={"/register/user"}>user</Link>
          <Link href={"register/vip"}>vip</Link>
          
        </Card>
      </Card>
    </div>
  )
}

export default RegisterLayout