"use client"
import React, { useState } from 'react'
import Roles from './register_modals/setRoles/roles'
import "./register_styles.css"
import styled from 'styled-components'
import AdminPanel from './register_modals/adminModal/adminModal'
import UserPanel from './register_modals/userModal/adminModal'
import SuperUserPanel from './register_modals/superAdminPanel/adminModal'
const RegisterPanelComponent=styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100vw;
height:100vh;
background-color:grey;
`
const RegisterPage = () => {
    const [option,setOption]=useState<number>(0)
    
    return <RegisterPanelComponent className="register_modal_component" id="register_modal_component">
         {option==0
        ?<Roles setOption={setOption} option={option}/>:option==1?<AdminPanel setOption={setOption}/>:option==2?<UserPanel setOption={setOption}/>:option==3?<SuperUserPanel setOption={setOption}/>:""
    } 
    
    {/* <Roles setOption={setOption} option={option}/> */}
    </RegisterPanelComponent> 
        
}

export default RegisterPage