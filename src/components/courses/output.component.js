import "./courses.styles.css";
import story from "./output.js"; 

const Output = ({id}) => {
    return (
        <div className = "outputContainer">
        <div dangerouslySetInnerHTML={{ __html: story(id) }}/>
        <iframe title = "Course sample" width = "420" height = "315" src = "https://www.youtube.com/watch?v=zg2zb6h-oN0"></iframe>
        </div>
    );
};
export default Output;