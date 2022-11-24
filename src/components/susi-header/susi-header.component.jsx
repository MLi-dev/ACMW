import "./susi-header.styles.css";
import { React } from "react";
import { useLogout } from "../../hooks/useLogout";
import { Link } from "react-router-dom";
const SusiHeader = () => {
    const {logout} = useLogout(); 
	return (
		<div className='susi-container'>
			<Link to={`/Login`}>
				<h2>Log in</h2>
			</Link>
			<Link to={`/SignUp`}>
				<h2>Sign up</h2>
			</Link>
			<button className='btn' onClick={logout}>
				Logout
			</button>
		</div>
	);
};

export default SusiHeader;
