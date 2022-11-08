import './card.styles.css';
import {Link} from "react-router-dom"; 

const Card = ({ monster }) => {
    const { id, name, description } = monster;
  
    if(name === 'Java') {
    return (
      <div className="card-container">
        <Link to={`/Java`}>
          <img
            alt={`monster ${name}`}
            src={`https://robohash.org/${id}?set=set2&size=180x180`}
          />
          <h2>{name}</h2>
        </Link>
        <p>{description}</p>
      </div>
    );
    } 
    else if(name === 'Cpp')  {
      return (
        <div className="card-container">
          <Link to={`/Cpp`}>
            <img
              alt={`monster ${name}`}
              src={`https://robohash.org/${id}?set=set2&size=180x180`}
            />
            <h2>{name}</h2>
          </Link>
          <p>{description}</p>
        </div>
      );
      }
      else if(name === 'Python')  {
        return (
          <div className="card-container">
            <Link to={`/Python`}>
              <img
                alt={`monster ${name}`}
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
              />
              <h2>{name}</h2>
            </Link>
            <p>{description}</p>
          </div>
        );
        }
      else if(name === 'Javascript')  {
        return (
          <div className="card-container">
            <Link to={`/Javascript`}>
              <img
                alt={`monster ${name}`}
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
              />
              <h2>{name}</h2>
            </Link>
            <p>{description}</p>
          </div>
        );
        }
  };
  
  export default Card;