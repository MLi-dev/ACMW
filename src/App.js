import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor() {
  super();

  this.state = {
  monsters: [
   {
    name: 'Matthew',
    id: '1234',
  }, 
   {
    name: 'Frank',
    id: '4567',
  }, 
   {
    name: 'Jacky',
    id: '89101',
  }, 
  {
    name: 'Andrei',
    id: '4325',
  }, 
]
  };
}

  render() {
  return (
    <div className="App">
     {
      this.state.monsters.map((monster) =>{
        return <div key={monster.id}><h1>{monster.name}</h1></div>
      })
     }
    </div>
  );
}
}
export default App;
