import "./courses.styles.css";
import Quiz from "../quiz/quiz.component";

const Output = ({id, type, category, video}) => {
    if(type === 'Youtube') {
    return (
        <div className = "outputContainer">
        <iframe title = "Example" width="700" height="700" src={video} frameborder="0" allowfullscreen></iframe>
        </div>
    
    );
    }
    else {
        console.log(category); 
        return (
            <div className = "outputContainer">
            <Quiz category = {category}/>
            </div>
        
        );
    }
};
export default Output;