import { useState, useEffect } from "react";

import CardList from "../components/card-list/card-list.component";
import SearchBox from "../components/search-box/search-box.component";
import { categories as monsters } from "./categories";
import { useLogout } from "../hooks/useLogout";
import SusiHeader from "../components/susi-header/susi-header.component"
import "./home.styles.css";
const Home = () => {
	const [searchField, setSearchField] = useState("");
	const [filteredMonsters, setFilterMonsters] = useState(monsters);
	const { logout } = useLogout();
	useEffect(() => {
		const newFilteredMonsters = monsters.filter((monster) => {
			return monster.name.toLocaleLowerCase().includes(searchField);
		});

		setFilterMonsters(newFilteredMonsters);
	}, [searchField]);

	const onSearchChange = (event) => {
		const searchFieldString = event.target.value.toLocaleLowerCase();
		setSearchField(searchFieldString);
	};

	return (
		<div className='App'>
			<SusiHeader/>
			<h1 className='app-title'>ACMW Learning Resources</h1>

			<SearchBox
				className='monsters-search-box'
				onChangeHandler={onSearchChange}
				placeholder='search monsters'
			/>
			<CardList monsters={filteredMonsters} />
		</div>
	);
};

export default Home;
