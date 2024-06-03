"use client"
import React, { useState } from "react";
import "./super_user_panel.css";
import { handleCloseModal } from "../register_modals/actions";
import { Button, Card, Input } from "@mui/material";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setVIPError } from "@/reducers/vip/vipSlice";
import { fetchVIPData } from "@/reducers/vip/vipThunk/vipThunk";
import { getVIPError } from "@/settings/selectors";

const SuperUserPanel = () => {
	// phone number usestate
	// email use state
	// password use state
	const dispatch=useDispatch()
	const vipError=useSelector(getVIPError)
	const [number, setPhoneNumber] = useState<string | number>();
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string | number>();


	const handleGetVIP = () => {
		if (!email || !password) {
			dispatch(setVIPError("email and password are required"));
      setTimeout(() => {
        dispatch(setVIPError(""));
      }, 3000);
		} else {
      
			dispatch(fetchVIPData({number,email, password }));
		}
	};
  return (
    <div className="super_user_panel_container w-screen h-screen bg-gray-800 " id="super_user_panel_container">
      <Card className="flex w-2/5 bg-gray-400 h-fit p-6">
        <form className="flex flex-col items-center justify-between ml-auto mr-auto h-72  w-3/5" id="super_user_panel_inner_container">
          <h1 className="super_user_panel_heading font-bold text-2xl">

            super User{" "}
            <Link href="/" className="super_user_panel_exit text-xl hover:bg-red-900 text-white text-center pl-2 pr-2 w-fit" id="super_user_panel_exit" >
              X
            </Link>
          </h1>
          <label className="super_user_label" htmlFor="super_user_phone_number">
            phone_number:
            <Input onChange={(e) => setPhoneNumber(e.target.value)} color="secondary" required={true} className=" w-full ml-auto mr-auto hover:bg-gray-200 text-black" id="super_user_phone_number" type="text" placeholder="super_user phone number" />
          </label>
          <label className="super_user_label" htmlFor="super_user_password">
            email:
            <Input onChange={(e) => setEmail(e.target.value)} color="secondary" required={true} className=" w-full ml-auto mr-auto hover:bg-gray-200 text-black" id="super_user_email" type="text" placeholder="super_user super_email" />
          </label>
          <label className="super_user_label" htmlFor="super_user_password">
            password:
            <Input onChange={(e) => setPassword(e.target.value)} className=" w-full ml-auto mr-auto hover:bg-gray-200 text-black" required={true} id="super_user_password" type="text" placeholder="super_user super_username" />
          </label>
          <Button color="secondary" onClick={()=>handleGetVIP()} className="super_user_submit_form " id="super_user_submit_form">
            submit
          </Button>
		  <span className="text-red-500">{vipError}</span>
        </form>
      </Card>
    </div>
  );
};

export default SuperUserPanel;
