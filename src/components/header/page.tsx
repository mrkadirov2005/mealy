"use client"
import React from 'react'
import Link from 'next/link'
import Styled from './header.module.css'
import { useState } from 'react'
import Image from 'next/image'

interface PROPS{
  props:{
    setReg: React.Dispatch<React.SetStateAction<boolean>>,
    reg:boolean

  }
}

export default function Header({props:{setReg,reg}}:PROPS) {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    document.body.classList.toggle("dark")
  };
  
const handleLogin=()=>{
setReg(!reg)

}
  return (
    <div className={`${Styled.header} ${isChecked ? Styled.checked : ''}`}>

      <h1 className={isChecked ? Styled.checkedTitle : Styled.headerTitle}>MEALY</h1>
      <div className={isChecked ? Styled.checkedDropdown : Styled.pasteButton}>
        <button className={isChecked ? Styled.checkedButton : Styled.button}>Categories</button>
        <div className={isChecked ? Styled.checkedDropdownContent : Styled.dropdownContent}>
          <Link href="/" className={isChecked ? Styled.checkedItem : Styled.dropdownItem}>Home</Link>
          <Link href="/clothes" className={isChecked ? Styled.checkedItem : Styled.dropdownItem}>Clothes</Link>
          <Link href="/meals" className={isChecked ? Styled.checkedItem : Styled.dropdownItem}>Meals</Link>
          <Link href="/filters" className={isChecked ? Styled.checkedItem : Styled.dropdownItem}>Products</Link>
        </div>
      </div>

      <input type="search" className={Styled.search} placeholder='Search' />

      <Image
       src="/user.png"
       width={35}
       height={35}
       alt="nature"
        />

      <button onClick={()=>handleLogin()} className={isChecked ? Styled.checkedLogin : Styled.login}>Login</button>

      <label className={Styled.switch}>
        <input type='checkbox' checked={isChecked} onChange={()=>handleCheckboxChange()} />
        <span className={Styled.slider}></span>
      </label>
    </div>
  );
}
