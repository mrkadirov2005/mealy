import React from 'react'
import './modal_styles.css'
import {handleCloseModal} from "../actions"

interface PROPS{
  
  setOption: React.Dispatch<React.SetStateAction<number>>;
  option:number 
}

const Roles = ({setOption,option}:PROPS) => {

  return (
    <div className='roles_wrapper' id='roles_wrapper'>
      <div className="inner_container">
        <h1 className="modal_heading">Choose role: <button className='close_roles_modal' id='close_roles_modal' onClick={()=>handleCloseModal()}>X</button></h1>
        <div className="role_item_container">
          <button onClick={()=>{setOption(1), console.log(option)}} id="roles_item_button" className="roles_item_button">admin</button>
          <button onClick={()=>{setOption(2), console.log(option)}} id="roles_item_button" className="roles_item_button">user</button>
          <button onClick={()=>{setOption(3), console.log(option)}} id="roles_item_button" className="roles_item_button">super admin</button>
        </div>
      </div>
    </div>
  )
}

export default Roles