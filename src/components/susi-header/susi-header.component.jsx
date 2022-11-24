import "./susi-header.styles.css";
import { React } from "react";
import { useLogout } from "../../hooks/useLogout";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
const SusiHeader = () => {
	const { logout } = useLogout();
	const { user } = useAuthContext();
	return (
		<div className='susi-container'>
			{user && (
				<>
					<div>  {user.displayName} </div>
					<button className='btn' onClick={logout}>
						Logout
					</button>
				</>
			)}
		</div>
	);
};

export default SusiHeader;
