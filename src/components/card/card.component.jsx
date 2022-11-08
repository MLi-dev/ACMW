import './card.styles.css';
import {Link} from "react-router-dom"; 

const Card = ({ monster }) => {
    const { id, name, description } = monster;
    return (
      <div className="card-container">
        <Link to={`/Courses`}>
          <img
            alt={`monster ${name}`}
            src={`https://robohash.org/${id}?set=set2&size=180x180`}
          />
          <h2>{name}</h2>
        </Link>
        <p>{description}</p>
      </div>
    );
  };
  
  export default Card;