import "./card.styles.css";
import { Link } from "react-router-dom";

const Card = ({ monster }) => {
	const { name, description, img } = monster;

	return (
		<div className='card-container'>
			{name !== "MyReport" && (
				<Link to={`/Courses/${name}`}>
					<img alt={`monster ${name}`} src={img} />
					<h2>{name}</h2>
				</Link>
			)}
			{name === "MyReport" && (
				<Link to={`/MyReport`}>
					<img alt={`monster ${name}`} src={img} />
					<h2>{name}</h2>
				</Link>
			)}
			<p>{description}</p>
		</div>
	);
};

export default Card;
