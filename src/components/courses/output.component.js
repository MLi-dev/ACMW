import Courses from "./courses.component";
import "./courses.styles.css";
import course from "./output.js";

const Output = ({id}) => {
    return (
        <div className = "outputContainer">
        <iframe title = "Example" width="700" height="700" src={course(id)} frameborder="0" allowfullscreen></iframe>
        </div>
    );
};
export default Output;