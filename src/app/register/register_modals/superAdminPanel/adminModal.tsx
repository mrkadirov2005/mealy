import React from "react";
import "./super_user_panel.css";
import { handleCloseModal } from "../actions";
interface PROPS{
    setOption:React.Dispatch<React.SetStateAction<number>>
}
const SuperUserPanel = ({setOption}:PROPS) => {
	return (
		<div className="super_user_panel_container" id="super_user_panel_container">
			<form className="super_user_panel_inner_container" id="super_user_panel_inner_container">
				<h1 className="super_user_panel_heading">
					<button className="super_user_panel_back_to_roles" id="super_user_panel_back_to_roles" onClick={() => setOption(0)}>
						⬅️
					</button>
					super User{" "}
					<button className="super_user_panel_exit" id="super_user_panel_exit" onClick={() => handleCloseModal()}>
						X
					</button>
				</h1>
				<label className="super_user_label" htmlFor="super_user_password">
					username:
					<input className="super_user_panel_inputs" required id="super_user_password" type="text" placeholder="super_user super_username" />
				</label>
				<label className="super_user_label" htmlFor="super_user_password">
					password:
					<input className="super_user_panel_inputs" required  id="super_user_password" type="text" placeholder="super_user super_username" />
				</label>
				<button className="super_user_submit_form" id="super_user_submit_form">
					submit
				</button>
			</form>
		</div>
	);
};

export default SuperUserPanel;
