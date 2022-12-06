import { useState } from "react";
import "./jobhelp.styles.css";
import { projectFirestore } from "../../firebase/config";
import React, { useEffect } from "react";
import SusiHeader from "../susi-header/susi-header.component";
import { Link, useParams } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import Login from "../login/Login.js";


const JobHelp = ({ id }) => {
	const [data, setData] = useState([]);
	const [pending, setPending] = useState(false);
    const [error, setError] = useState(false);
    const {category} = useParams(); 
	const [description, setDescription] = useState("");
	const { user } = useAuthContext();

	const onSubmitHandler = (description) => {
		setDescription(description);
	};

	useEffect(() => {
		setPending(true);
		projectFirestore
			.collection(`Careers/${category}/Jobs`)
			//  .where("id", "==", "Linux")
			.get()
			.then((snapshot) => {
				if (snapshot.empty) {
					setError("No jobs to load");
					setPending(false);
				} else {
					let results = [];
					snapshot.docs.forEach((doc) =>
						results.push({ id: doc.id, ...doc.data() })
					);
					setData(results);
					setPending(false);
				}
			})
			.catch((err) => {
				setError(err.message);
				setPending(false);
			});
	}, []);

	return (
		<div>
			<SusiHeader />
			{!user && (
				<div className='login-modal-container'>
					<div className='login-content-container'>
						<Login />
					</div>
				</div>
			)}
			<header>
                <h10>You scored the highest in the {category} course. Good job! Here are some recommended jobs:</h10>
			</header>
            <section>
				<nav>
					<ul id='reportMenu'>
						<li>
							<Link to='/'>
								<div>Go to dashboard</div>
							</Link>
						</li>
						{data.map((item) => {
							return (
								<li>
									<a
										href
										key='1'
										onClick={() => onSubmitHandler(`${item.name}`)}
									>
										<div>{item.name}</div>
									</a>
								</li>
							);
						})}
					</ul>
				</nav>
				<article>
					{data.length === 0 && category !== "Job Help" && (
						<div>No Grade available!</div>
					)}
					{pending && <div>Loading!</div>}
					{ <iframe title = "Example" width="800" height="700" src={`https://www.simplyhired.com/jobs?q=${description}`} frameborder="0" ></iframe>}
				</article>
			</section>
		</div>
	);
};

export default JobHelp;
