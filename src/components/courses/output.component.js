import "./courses.styles.css";
import course from "./output.js";
import Quiz from "../quiz/quiz.component";

const Output = ({id, type, category}) => {
    if(type === 'Youtube') {
    return (
        <div className = "outputContainer">
        <iframe title = "Example" width="700" height="700" src={course(id)} frameborder="0" allowfullscreen></iframe>
        </div>
    
    );
    }
    else {
        return (
            <div className = "outputContainer">
            <Quiz category = "Linux"/>
            </div>
        
        );
    }
};
export default Output;