import {useState} from "react";
import './courses.styles.css';
import Output from './output.component';
const Courses = ({id}) => {
    const [courseId, setCourseId] = useState(1);
    const onSubmitHandler = (id) => {
        setCourseId(id);
    }
    return (
    <div>
    <header>
  <h2>Cities</h2>
    </header>
    <section>
  <nav>
    <ul>
    <div className = "actionButton">
    <button onClick = {() => onSubmitHandler(1)}><li><a href="#">London</a></li></button>
    </div>
    <div className = "actionButton">
    <button onClick = {()=>onSubmitHandler(2)}><li><a href="#">Paris</a></li></button>
    </div>
    <div className = "actionButton">
    <button onClick = {()=>onSubmitHandler(3)}><li><a href="#">Tokyo</a></li></button>
    </div>

    </ul>
  </nav>
  <article>
   <Output id = {courseId}/>
  </article>
</section>
<footer>
  <p>Footer</p>
</footer>
      </div>
    );
  };
  
  export default Courses;