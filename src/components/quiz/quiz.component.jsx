import "./quiz.styles.css";
import React, { useEffect, useState } from "react";
import Question from "../question/question.component";
import axios from "axios";
import { projectFirestore } from "../../firebase/config";
import { addDoc } from "firebase/firestore";

const Quiz = ({ category }) => {
	let questionNumber = 0;
	const [questionList, setQuestionList] = useState([]);
	const [current, setCurrent] = useState(1);
	const [score, setScore] = useState(0);
	const [isOptionOpen, setIsOptionOpen] = useState(true);
	const [level, setLevel] = useState("");
	const handleNext = ({ num, correct }) => {
		setCurrent(num);
		if (correct) setScore(score + 1);
	};

	const handleComplete = () => {
		const result = {
			Name: category,
			Score: score,
			Time: Date.now(),
			UserID: "myli2003",
			Level: level,
		};
		const ref = projectFirestore.collection("QuizResults");

		ref
			.add(result)
			.then((doc) => {
				console.log("Document written with ID: ", doc.id);
			})
			.catch((error) => {
				console.error("Error adding document: ", error);
			});

		setIsOptionOpen(true);
		setLevel("");
		questionNumber = 0;
		setCurrent(1);
	};

	const handleLevelChange = (event) => {
		setLevel(event.target.value);
	};
	const closeOptionModal = () => {
		setIsOptionOpen(false);
	};
	useEffect(() => {
		const course = category;
	
		//const url = `https://cors-anywhere.herokuapp.com/https://quizapi.io/api/v1/questions?apiKey=GqUHpV0I96SwSw9eEHOll244Azgj8dLWdE2Oti4r&category=${course}&limit=10`;
		const url = `http://localhost:5000`;
		const fetchData = async () => {
			try {
				const response = await axios.get(url, {
					method: "get",
				});
				const json = await response.data;
				console.log(json);
				setQuestionList(json);
			} catch (error) {
				console.log("error", error);
			}
		};

		fetchData();
	}, [category, level]);

	return (
		<div>
			<div>
				{isOptionOpen && (
					<div className='modal-container' id='option-modal'>
						<div className='level-content-container'>
							<h1>Please pick An Option</h1>
							<span>
								<input
									type='radio'
									id='option-easy'
									name='levelOption'
									className='radio'
									value='easy'
									checked={level === "easy"}
									onChange={handleLevelChange}
								/>
								<label
									for='option-easy'
									className='levelOption'
									id='easy-option'
								>
									Easy
								</label>
							</span>
							<span>
								<input
									type='radio'
									id='option-medium'
									name='levelOption'
									className='radio'
									value='medium'
									checked={level === "medium"}
									onChange={handleLevelChange}
								/>
								<label
									for='option-medium'
									className='levelOption'
									id='medium-option'
								>
									Medium
								</label>
							</span>
							<span>
								<input
									type='radio'
									id='option-hard'
									name='levelOption'
									className='radio'
									value='hard'
									checked={level === "hard"}
									onChange={handleLevelChange}
								/>
								<label
									for='option-hard'
									className='levelOption'
									id='hard-option'
								>
									Hard
								</label>
							</span>
							<div className='level-button-container'>
								<button onClick={closeOptionModal}>Continue</button>
							</div>
						</div>
					</div>
				)}
				{questionList.map((item) => {
					questionNumber++;
					if (current === questionNumber)
						return (
							<Question
								questionNumber={questionNumber}
								key={item.id}
								item={item}
								onNext={handleNext}
								onComplete={handleComplete}
								score={score}
							/>
						);
					else return <></>;
				})}
			</div>
		</div>
	);
};

export default Quiz;
