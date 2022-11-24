import Card from "../card/card.component";
import "./card-list.styles.css";
import Login from "../login/Login.js";
import { useAuthContext } from "../../hooks/useAuthContext";

const CardList = ({ monsters }) => {
	const { user } = useAuthContext();
	return (
		<>
			{!user && (
				<div className='login-modal-container'>
					<div className='login-content-container'>
						<Login />
					</div>
				</div>
			)}
			<div className='card-list'>
				{monsters.map((monster) => {
					return <Card key={monster.id} monster={monster} />;
				})}
			</div>
		</>
	);
};

export default CardList;
