import "./quiz.styles.css";
import React, { useEffect, useState } from "react";
import Question from "../question/question.component";

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
        setIsOptionOpen(true); 
        setLevel(""); 
    }

	const handleLevelChange = (event) => {
		setLevel(event.target.value);
    };
    const closeOptionModal = () => {
        setIsOptionOpen(false);
    }

	useEffect(() => {
		const course = category;
		const url = `https://cors-anywhere.herokuapp.com/https://quizapi.io/api/v1/questions?category=${course}&limit=10`;
		const fetchData = async () => {
			try {
				const response = await fetch(url, {
					method: "get",
					headers: {
						"Access-Control-Allow-Origin": "*",
						"Access-Control-Allow-Headers": "*",
						"Content-Type": "application/json",
						"X-Api-Key": "GqUHpV0I96SwSw9eEHOll244Azgj8dLWdE2Oti4r",
					},
				});
				const json = await response.json();
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
                    <div className="level-button-container">
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
