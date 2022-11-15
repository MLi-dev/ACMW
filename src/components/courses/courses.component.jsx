import {useState} from "react";
import './courses.styles.css';
import Output from './output.component';
const Courses = ({id}) => {
    const [courseId, setCourseId] = useState(1);
    const [type, setType] = useState('');
    const [category, setCategory] = useState(''); 
    const onSubmitHandler = (id, type, category) => {
        setCourseId(id);
        setType(type); 
        setCategory(category); 
    }
    return (
    <div>
    <header>
  <h2>Java Learning Resources</h2>
    </header>
    <section>
  <nav>
    <ul>
    <div className = "actionButton">
    <button  onClick = {() => onSubmitHandler(1, 'Quiz', 'Linux')}><li>Linux</li></button>   
    </div>
    <div className = "actionButton">
    <button onClick = {()=>onSubmitHandler(2, 'Youtube', 'DevOps')}><li>DevOps</li></button>
    </div>
    <div className = "actionButton">
    <button onClick = {()=>onSubmitHandler(3, 'Youtube', 'Networking')}><li>Networking</li></button>
    </div>
    <div className = "actionButton">
    <button onClick = {()=>onSubmitHandler(4, 'Quiz', 'Programming')}><li>Programming</li></button>
    </div> 
    </ul>   
  </nav>
  <article>
   <Output id = {courseId} type = {type} category = {category}/>
  </article>
</section>
<footer>
</footer>
      </div>
    );
  };
  
  export default Courses;