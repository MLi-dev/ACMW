import { useState } from "react";
import "./report.styles.css";
import { projectFirestore } from "../../firebase/config";
import React, { useEffect } from "react";
import { categories } from "../../home/categories.js";
import SusiHeader from "../susi-header/susi-header.component";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import Login from "../login/Login.js";

const Report = ({ id }) => {
	const [data, setData] = useState([]);
	const [scoreArray, setScoreArray] = useState([]);
	const [pending, setPending] = useState(false);
	const [error, setError] = useState(false);
	const [category, setCategory] = useState("");
	const { user } = useAuthContext();
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
			.where("UserID", "==", user.email)
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
			<SusiHeader />
			{!user && (
				<div className='login-modal-container'>
					<div className='login-content-container'>
						<Login />
					</div>
				</div>
			)}
			<header>
				<h2>Your Learning Report</h2>
			</header>
			<section>
				<nav>
					<ul id='reportMenu'>
						<li>
							<Link to='/'>
								<div>Go to dashboard</div>
							</Link>
						</li>
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
					<div className='table-container'>
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
									(
										<div class='table-row-group'>
											<div class='table-row'>
												<div class='table-cell ...'>{item.Level} </div>
												<div class='table-cell ...'>{item.Name}</div>
												<div class='table-cell ...'>{item.Score * 10}%</div>
												<div class='table-cell ...'>{quizDate}</div>
											</div>
										</div>
									)
								);
							})}
							<div class='table-header-group ...'>
								<div class='table-row'>
									<div class='table-cell ...'>Highest Score: {max * 10}% </div>
									<div class='table-cell ...'>Lowest Score: {min * 10}% </div>
									<div class='table-cell ...'>Average: {average * 10}%</div>
									<div class='table-cell ...'>Quiz Attempts: {data.length}</div>
								</div>
							</div>
						</table>
					</div>
				</article>
			</section>
		</div>
	);
};

export default Report;
