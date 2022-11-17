import "./courses.styles.css";
import "./output.styles.css";
import Quiz from "../quiz/quiz.component";

const Output = ({ id, type, category, video }) => {
	if (type === "Youtube") {
		return (
			<div id='courseDisplayContainer'>
				<iframe
					title='Example'
					width='700'
					height='700'
					src={video}
					frameborder='0'
					allowfullscreen
				></iframe>
			</div>
		);
	} else if (type === "Quiz") {
		return (
			<div id='courseDisplayContainer'>
				<Quiz category={category} />
			</div>
		);
	} else
		return (
			<div id='courseDisplayContainer'>
				<span className='welcome'>
					Welcome to your {category} Learning Journey, please select a course or
					take a quiz
                </span>
                <div className = "courseImage">
				<img
					alt=''
					width='750'
					height='422'
					class='single-course-unit--course-image--XinHF'
					src='https://img-c.udemycdn.com/course/480x270/4015622_2fee_4.jpg'
					srcset='https://img-c.udemycdn.com/course/480x270/4015622_2fee_4.jpg 1x, https://img-c.udemycdn.com/course/750x422/4015622_2fee_4.jpg 2x'
                ></img>
                </div>
			</div>
		);
};
export default Output;
