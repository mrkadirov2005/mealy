"use client"
import React, { useState } from "react";
import "./user_panel.css";
import { handleCloseModal } from "../register_modals/actions";
interface PROPS{
    setOption:React.Dispatch<React.SetStateAction<number>>
}
const UserPanel = ({setOption}:PROPS) => {
	const [regType,setRegtype]=useState<boolean>(false)
	return (
		<div className="user_panel_container" id="user_panel_container">
			{regType?<form className="user_panel_inner_container" id="user_panel_inner_container">
				<h1 className="user_panel_heading">
					<button className="user_panel_back_to_roles" id="user_panel_back_to_roles" onClick={() => setOption(0)}>
						⬅️
					</button>
					user Panel{" "}
					<button className="user_panel_exit" id="user_panel_exit" onClick={() => handleCloseModal()}>
						X
					</button>
				</h1>
				<label className="user_label" htmlFor="user_password">
					username:
					<input className="user_panel_inputs" required id="user_password" type="text" placeholder="user username" />
				</label>
				<label className="user_label" htmlFor="user_password">
					password:
					<input className="user_panel_inputs" required id="user_password" type="text" placeholder="user username" />
				</label>
				<button className="user_submit_form" id="user_submit_form">
					submit
				</button>
				<button className="change_register_type" id="change_register_type" onClick={()=>setRegtype(!regType)}>register</button>

			</form>
			:
			<form className="user_panel_inner_container user_panel_register_part" id="user_panel_inner_container">
				<h1 className="user_panel_heading">
					<button className="user_panel_back_to_roles" id="user_panel_back_to_roles" onClick={() => setOption(0)}>
						⬅️
					</button>
					user Panel{" "}
					<button className="user_panel_exit" id="user_panel_exit" onClick={() => handleCloseModal()}>
						X
					</button>
				</h1>
				<label className="user_label" htmlFor="user_first_name">
					firstname:
					<input className="user_panel_inputs" required id="user_first_name" type="text" placeholder="first name" />
				</label>
				<label className="user_label" htmlFor="user_last_name">
					lastname:
					<input className="user_panel_inputs" required id="user_last_name" type="text" placeholder="user lastname" />
				</label>
				<label className="user_label" htmlFor="user_username">
					username:
					<input className="user_panel_inputs" required id="user_username" type="text" placeholder="username" />
				</label>
				<label className="user_label" htmlFor="user_email">
					email:
					<input className="user_panel_inputs" required id="user_email" type="email" placeholder="email" />
				</label>
				<label className="user_label" htmlFor="user_password">
					password:
					<input className="user_panel_inputs" required id="user_password" type="password" placeholder="password" />
				</label>
				<button className="user_submit_form" id="user_submit_form">
					submit
				</button>
				<button className="change_register_type" id="change_register_type" onClick={()=>setRegtype(!regType)}>login</button>
			</form>
			}

		</div>
	);
};

export default UserPanel;
