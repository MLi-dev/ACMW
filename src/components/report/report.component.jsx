import { useState } from "react";
import "./report.styles.css";
import { projectFirestore } from "../../firebase/config";
import React, { useEffect } from "react";
import { categories } from "../../home/categories.js";

const Report = ({ id }) => {
	const [data, setData] = useState([]);
	const [scoreArray, setScoreArray] = useState([]);
	const [pending, setPending] = useState(false);
	const [error, setError] = useState(false);
	const [category, setCategory] = useState(""); 
	let index = 1;
	let average = 0;
	let max = 0;
	let min = 0;
	const roundToHundredth = (value) => {
		return Number(value.toFixed(3));
	};
	function getAvg(data) {
		let total = 0;
		for (let i = 0; i < data.length; i++) {
			total += data[i].Score;
		}
		return roundToHundredth(total / data.length);
	}
	function getMax(data) {
		for (let i = 0; i < data.length; i++) {
			if (data[i].Score > max) {
				max = data[i].Score;
			}
		}
		return max;
	}
	function getMin(data) {
		for (let i = 0; i < data.length; i++) {
			if (data[i].Score < min) {
				min = data[i].Score;
			}
		}
		return min;
	}
	const onSubmitHandler = (category) => {
		setData([]);
		setScoreArray([]);
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
					<table>
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
							let quizDate = `${
								dateFormat.getMonth() + 1
							}/${dateFormat.getDate()}/${dateFormat.getFullYear()}`;
							scoreArray.push(item.Score);
							return (
								(average = getAvg(data)),
								(max = getMax(data)),
								(min = getMin(data)),
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
						<div class='table-header-group ...'>
							<div class='table-row'>
								<div class='table-cell ...'>Highest Score: {max} </div>
								<div class='table-cell ...'>Lowest Score: {min} </div>
								<div class='table-cell ...'>Average: {average} </div>
							</div>
						</div>
						</table>
				</article>
			</section>
		</div>
	);
};

export default Report;
