import { useState } from "react";
import "./report.styles.css";
import { projectFirestore } from "../../firebase/config";
import React, { useEffect } from "react";
import { categories } from "../../home/categories.js";

const Report = ({ id }) => {
	const [data, setData] = useState([]);
	const [pending, setPending] = useState(false);
	const [error, setError] = useState(false);
	const [category, setCategory] = useState("");
	let index = 1;

	const onSubmitHandler = (category) => {
		setData([]);
		setCategory(category);
	};
	useEffect(() => {
		setPending(true);
		projectFirestore
			.collection("QuizResults")
			.where("Name", "==", category)
			.get()
			.then((snapshot) => {
				if (snapshot.empty) {
					setError("No report to load");
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
	}, [category]);

	return (
		<div>
			<header>
				<h2>Your Learning Report</h2>
			</header>
			<section>
				<nav>
					<ul id='reportMenu'>
						{categories.map((item) => (
							<li>
								<a href key='1' onClick={() => onSubmitHandler(`${item.name}`)}>
									<div>{item.name}</div>
								</a>
							</li>
						))}
					</ul>
				</nav>
				<article>
					{data.length === 0 && <div>No Grade available!</div>}
					{pending && <div>Loading!</div>}
					<div class='table w-full ...'>
					<div class='table-header-group ...'>
						<div class='table-row'>
							<div class='table-cell ...'>Level</div>
							<div class='table-cell ...'>Category</div>
							<div class='table-cell ...'>Score</div>
							<div class='table-cell ...'>Date Taken</div>
						</div>
					</div>
					{data.map((item) => {
						let dateFormat = new Date(item.Time);
						let quizDate = `${dateFormat.getMonth()+1}/${dateFormat.getDate()}/${dateFormat.getFullYear()}`;
						return (
						
								<div class='table-row-group'>
									<div class='table-row'>
										<div class='table-cell ...'>{item.Level} </div>
										<div class='table-cell ...'>{item.Name}</div>
										<div class='table-cell ...'>{item.Score}</div>
										<div class='table-cell ...'>{quizDate}</div>
									</div>
								</div>
						);
					})}
					</div>
				</article>
			</section>
		</div>
	);
};

export default Report;
