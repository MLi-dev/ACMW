import "./question.styles.css";
import { useState } from "react";

const Question = ({questionNumber, item, onNext, size, score}) => {
  const { question, answers, correct_answer} = item;
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionChange = (event) => {
    console.log(event.target.value);
    setSelectedOption(event.target.value);
  };
  const handleNextQuestion = (event) => {
    console.log(correct_answer);
    onNext({num: questionNumber+1, correct: correct_answer === selectedOption});
  };
  return (
    <main>
        {questionNumber === 10 && <div class="modal-container" id="score-modal">
            <div class="modal-content-container">
                <h1>Congratulations, Quiz Completed.</h1>
                <div class="grade-details">
                    <p>Attempts : 10</p>
                    <p>Wrong Answers : <span id="wrong-answers">{10-score}</span></p>
                    <p>Right Answers : <span id="right-answers">{score}</span></p>
                    <p>Grade : <span id="grade-percentage">{score*10}</span>%</p>
                    <p ><span id="remarks"></span></p>
                </div>
                <div class="modal-button-container">
                    <button onClick="closeScoreModal()">Continue</button>
                </div>
            </div>
        </div>}

        {questionNumber < 10 &&<div class="game-quiz-container">
            <div class="game-details-container">
                <h1> Question : <span id="question-number"></span> {questionNumber}/ 10</h1>
            </div>

            <div class="game-question-container">
                <h1 id="display-question">{question}</h1>
            </div>
            <div class="game-options-container">
               {/* <div class="modal-container" id="option-modal">
                    <div class="modal-content-container">
                         <h1>Please Pick An Option</h1>
                         <div class="modal-button-container">
                            <button onClick="closeOptionModal()">Continue</button>
                        </div>

                    </div>
               </div> */}
                <span>
                    <input type="radio" id="option-one" name="option" className="radio" value="answer_a" checked={selectedOption === 'answer_a'} onChange={handleOptionChange}/>
                    <label for="option-one" 
                    className="option"
                    id="option-one-label"> {answers.answer_a}</label>
                </span>
                <span>
                    <input type="radio" id="option-two" name="option" className="radio" value="answer_b" checked={selectedOption === 'answer_b'} onChange={handleOptionChange}/>
                    <label for="option-two" class="option" id="option-two-label"> {answers.answer_b}</label>
                </span>
                <span>
                    <input type="radio" id="option-three" name="option" className="radio" value="answer_c" checked={selectedOption === 'answer_c'} onChange={handleOptionChange}/>
                    <label for="option-three" class="option" id="option-three-label">{answers.answer_c}</label>
                </span>
                <span>
                    <input type="radio" id="option-four" name="option" className="radio" value="answer_d" checked={selectedOption === 'answer_d'} onChange={handleOptionChange}/>
                    <label for="option-four" class="option" id="option-four-label">{answers.answer_d}</label>
                </span>
            </div>
            <div class="next-button-container">
                <button onClick={handleNextQuestion}>Next Question</button>
            </div>
        </div>}
    </main>
  );
};

export default Question;
