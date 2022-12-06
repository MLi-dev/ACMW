import "./card.styles.css";
import { Link } from "react-router-dom";
import { projectFirestore } from "../../firebase/config";
import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

const Card = ({ monster }) => {
	const { name, description, img } = monster;
	const { user } = useAuthContext();
	const [category, setCategory] = useState("");

	useEffect(() => {
		if (user) {
			projectFirestore
				.collection("QuizResults")
				.where("UserID", "==", user.email)
				.orderBy("Score")
				//.limitToLast(1)
				.get()
				.then((snapshot) => {
					if (!snapshot.empty) {
						let results = [];
						snapshot.docs.forEach((doc) =>
							results.push({ id: doc.id, ...doc.data() })
						);
						setCategory(results[results.length - 1].Name);
					} else {
						console.log("No results");
					}
				})
				.catch((err) => {
					setCategory("Code");
				});
		}
	}, [user]);

	return (
		<div className='card-container'>
			{name !== "MyReport" && name !== "JobHelp" && (
				<Link to={`/Courses/${name}`}>
					<img alt={`monster ${name}`} src={img} />
					<h2>{name}</h2>
				</Link>
			)}
			{name === "MyReport" && (
				<Link to={`/MyReport`}>
					<img alt={`monster ${name}`} src={img} />
					<h2>{name}</h2>
				</Link>
			)}
			{name === "JobHelp" && (
				<Link to={`/JobHelp/${category}`}>
					<img alt={`monster ${name}`} src={img} />
					<h2>{name}</h2>
				</Link>
			)}
			<p>{description}</p>
		</div>
	);
};

export default Card;
