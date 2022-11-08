import { useState, useEffect } from 'react';

import CardList from '../components/card-list/card-list.component';
import SearchBox from '../components/search-box/search-box.component'
import {categories as monsters} from './categories';
const Home = () => {
  const [searchField, setSearchField] = useState('');
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

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