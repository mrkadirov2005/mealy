"use client"
import React, { useState } from 'react'
import { Button, Card } from '@mui/material';
import { handleCloseModal } from './register_modals/actions';
import './register_styles.css'
import Link from 'next/link';
import { Provider } from 'react-redux';
import AdminPanel from './admin/page';
import UserPanel from './user/page';
import SuperUser from '../vip/page';
import SuperUserPanel from './vip/page';


const RegisterLayout = () => {

  const [auth_type,set_auth_type]=useState<number>(0)
  return (<>
    {auth_type===0?  <div className='roles_wrapper' id='roles_wrapper'>
    <Card className="inner_container">
      <h1 className="modal_heading">Choose role: <button className='close_roles_modal' id='close_roles_modal' onClick={()=>handleCloseModal()}>X</button></h1>
      <Card className="role_item_container">
        <Button onClick={()=>set_auth_type(1)} >admin</Button>
        <Button onClick={()=>set_auth_type(1)} >user</Button>
        <Button onClick={()=>set_auth_type(3)}>vip</Button>
        
      </Card>
    </Card>
  </div>:auth_type===1?<AdminPanel/>:auth_type===2?<UserPanel/>:auth_type===3?<SuperUserPanel/>:""}
  </>
  
  )
}

export default RegisterLayout