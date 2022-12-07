import { useState } from "react";
import SusiHeader from "../susi-header/susi-header.component";
import { useLogin } from "../../hooks/useLogin";
import { Link } from "react-router-dom";
// styles
import styles from "./Login.module.css";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { login, error, isPending } = useLogin();

	const handleSubmit = (e) => {
		e.preventDefault();
		login(email, password);
	};

	return (
		<div>
			<form onSubmit={handleSubmit} className={styles["login-form"]}>
				<h2>Please Log in</h2>
				<label>
					<span>Email:</span>
					<input
						type='email'
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					/>
				</label>
				<label>
					<span>Password:</span>
					<input
						type='password'
						onChange={(e) => setPassword(e.target.value)}
						value={password}
					/>
				</label>
				<div className='footer-container'>
					<Link to={`/SignUp`}>
						<h2>Sign up</h2>
					</Link>
					{!isPending && <button className='btn'>Login</button>}
					{isPending && (
						<button className='btn' disabled>
							loading
						</button>
					)}
				</div>
				{error && <p>{error}</p>}
			</form>
		</div>
	);
}
