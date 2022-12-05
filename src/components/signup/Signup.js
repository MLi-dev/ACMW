import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";
import SusiHeader from "../susi-header/susi-header.component";
// styles
import styles from "./Signup.module.css";
import {Navigate} from 'react-router-dom';

export default function Signup() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [displayName, setDisplayName] = useState("");
	const [signedUp, setSignedUp] = useState(false);
	const { signup, isPending, error } = useSignup();

	const handleSubmit = (e) => {
		e.preventDefault();
		signup(email, password, displayName);
		setSignedUp(true);
	};

	return (
    <>
    {signedUp && <Navigate to='/' />}
    {!signedUp &&
		<div>
			<SusiHeader />
			<form onSubmit={handleSubmit} className={styles["signup-form"]}>
				<h2>Sign up</h2>
				<label>
					<span>email:</span>
					<input
						type='email'
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					/>
				</label>
				<label>
					<span>password:</span>
					<input
						type='password'
						onChange={(e) => setPassword(e.target.value)}
						value={password}
					/>
				</label>
				<label>
					<span>display name:</span>
					<input
						type='text'
						onChange={(e) => setDisplayName(e.target.value)}
						value={displayName}
					/>
				</label>
				{!isPending && <button className='btn'>Sign up</button>}
				{isPending && <button className='btn'>loading</button>}
				{error && <p>{error}</p>}
			</form>
    </div>}
    </>
  );
}