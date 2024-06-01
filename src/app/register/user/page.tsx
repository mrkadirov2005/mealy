"use client"
import React from "react";
import "./user_panel.css";
import { handleCloseModal } from "../register_modals/actions";
import { Button, Card, Input } from "@mui/material";
import Link from "next/link";

const UserPanel = () => {
  return (
    <div className="user_panel_container w-screen h-screen bg-gray-800 "  id="user_panel_container">
      <Card className="flex w-2/5 bg-gray-400 h-3/5 pt-8 p-2">
        <form className="flex flex-col items-center justify-between ml-auto mr-auto h-72  w-3/5 gap-2" id="user_panel_inner_container">
          <h1 className="user_panel_heading font-bold text-2xl">

            User{" "}
            <Link href="/" className="user_panel_exit text-xl hover:bg-blue-800 text-white text-center w-fit" id="user_panel_exit" >
              X
            </Link>
          </h1>
          <label className="user_label" htmlFor="user_first_name">
            First Name:
            <Input className=" w-full ml-auto mr-auto hover:bg-gray-200 text-black" required={true} id="user_first_name" type="text" placeholder="User first name" />
          </label>

          <label className="user_label" htmlFor="user_last_name">
            Last name:
            <Input className=" w-full ml-auto mr-auto hover:bg-gray-200 text-black" required={true} id="user_last_name" type="text" placeholder="User last name" />
          </label>

          <label className="user_label" htmlFor="user_username">
            Username:
            <Input className=" w-full ml-auto mr-auto hover:bg-gray-200 text-black" required={true} id="user_username" type="text" placeholder="User username" />
          </label>

          <label className="user_label" htmlFor="user_email">
            Email:
            <Input className=" w-full ml-auto mr-auto hover:bg-gray-200 text-black" required={true} id="user_email" type="email" placeholder="User email" />
          </label>

          <label className="user_label" htmlFor="user_password">
            Password:
            <Input className=" w-full ml-auto mr-auto hover:bg-gray-200 text-black" required={true} id="user_password" type="password" placeholder="User Password" />
          </label>

          <Button color="secondary" className="user_submit_form" id="user_submit_form">
            SUBMIT
            {/* TODO add button padding*/}
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default UserPanel;