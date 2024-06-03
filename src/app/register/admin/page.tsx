"use client";

import React, { useState } from "react";
import "./admin_panel.css";
import Link from "next/link";
import { Button, Card, Input } from "@mui/material";
import { Provider, useDispatch, useSelector } from "react-redux";
import { fetchAdminData } from "@/reducers/admin/adminThunk/adminThunk";
import { getAdminError } from "@/settings/selectors";
import { setAdminError } from "@/reducers/admin/adminSlice";
interface PROPS {
	setOption: React.Dispatch<React.SetStateAction<number>>;
}

const AdminPanel = () => {
	const dispatch = useDispatch();
	const error = useSelector(getAdminError);

	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string | number>();
	const handleGetAdmin = () => {
		if (!email || !password) {
			dispatch(setAdminError("email and password are required"));
      setTimeout(() => {
        dispatch(setAdminError(""));
      }, 3000);
		} else {
      
			dispatch(fetchAdminData({email, password }));
		}
	};
	return (
		<div className="admin_panel_container w-screen h-screen bg-gray-800 " id="admin_panel_container">
			<Card className="flex w-2/6 bg-gray-400 h-3/7 p-8">
				<form
					className="flex flex-col items-center justify-between ml-auto mr-auto h-72  w-4/5 gap-2"
					id="admin_panel_inner_container"
				>
					<h1 className="admin_panel_heading font-bold text-2xl">
						Admin{" "}
						<Link
							href="/"
							className="admin_panel_exit text-xl hover:bg-blue-800 text-white text-center w-fit"
							id="admin_panel_exit"
						>
							X
						</Link>
					</h1>
					<label className="admin_label" htmlFor="admin_first_name">
						First Name:
						<Input
							className=" w-full ml-auto mr-auto hover:bg-gray-200 text-black"
							required={true}
							id="admin_first_name"
							type="text"
							placeholder="admin first name"
						/>
					</label>

					<label className="admin_label" htmlFor="admin_last_name">
						email:
						<Input
							onChange={(e) => setEmail(e.target.value)}
							className=" w-full ml-auto mr-auto hover:bg-gray-200 text-black"
							required={true}
							id="admin_last_name"
							type="email"
							placeholder="admin email"
						/>
					</label>

					<label className="admin_label" htmlFor="admin_password">
						Password:
						<Input
							onChange={(e) => setPassword(e.target.value)}
							className=" w-full ml-auto mr-auto hover:bg-gray-200 text-black"
							required={true}
							id="admin_password"
							type="password"
							placeholder="admin Password"
						/>
					</label>

					<Button
						color="secondary"
						className="admin_submit_form "
						onClick={() => handleGetAdmin()}
						id="admin_submit_form"
					>
						SUBMIT
					</Button>
					<h4 className="text-red-500">{error==="Request failed with status code 409"?"already signed in":error ? error : ""}</h4>
				</form>
			</Card>
		</div>
	);
};

export default AdminPanel;
