import Courses from "./courses.component";
import "./courses.styles.css";
import course from "./output.js";

const Output = ({id}) => {
    return (
        <div className = "outputContainer">
        <iframe title = "Example" width="420" height="315" src={course(id)} frameborder="0" allowfullscreen></iframe>
        </div>
    );
};
export default Output;