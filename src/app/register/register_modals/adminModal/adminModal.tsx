import React from "react";
import "./admin_panel.css";
import { handleCloseModal } from "../actions";
interface PROPS{
    setOption:React.Dispatch<React.SetStateAction<number>>
}
const AdminPanel = ({setOption}:PROPS) => {
	return (
		<div className="admin_panel_container" id="admin_panel_container">
			<form className="admin_panel_inner_container" id="admin_panel_inner_container">
				<h1 className="admin_panel_heading">
					<button className="admin_panel_back_to_roles" id="admin_panel_back_to_roles" onClick={() => setOption(0)}>
						⬅️
					</button>
					Admin Panel{" "}
					<button className="admin_panel_exit" id="admin_panel_exit" onClick={() => handleCloseModal()}>
						X
					</button>
				</h1>
				<label className="admin_label" htmlFor="admin_password">
					username:
					<input className="admin_panel_inputs" required id="admin_password" type="text" placeholder="admin username" />
				</label>
				<label className="admin_label" htmlFor="admin_firstname">
					firstname:
					<input className="admin_panel_inputs" required id="admin_firstname" type="text" placeholder="admin firstname" />
				</label>
				<label className="admin_label" htmlFor="admin_password">
					password:
					<input className="admin_panel_inputs" required id="admin_password" type="text" placeholder="admin password" />
				</label>
				<button className="admin_submit_form" id="admin_submit_form">
					submit
				</button>
			</form>
		</div>
	);
};

export default AdminPanel;
