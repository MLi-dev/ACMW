import {Routes, Route} from 'react-router-dom';
import Home from './home/home.component.jsx'; 
import './App.css';

const App = () => {
  return(
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Java' element={<Home/>} />
      <Route path='/Cpp' element={<Home/>} />
      <Route path='/Javascript' element={<Home/>} />
      <Route path='/Python' element={<Home/>} />
      <Route path='/Analytics' element={<Home/>} />
      

    </Routes>
  )
};

export default App;
