import './card.styles.css';
import {Link} from "react-router-dom"; 

const Card = ({ monster }) => {
    const { name, description, img} = monster;
  
    return (
      <div className="card-container">
        <Link to={`/Courses`}>
          <img
            alt={`monster ${name}`}
            src={img} 
            width = "140"
            height = "140"
          />
          <h2>{name}</h2>
        </Link>
        <p>{description}</p>
      </div>
    );
  };
  
  export default Card;