import {Routes, Route} from 'react-router-dom';
import Home from './home/home.component.jsx'; 
import Courses from './components/courses/courses.component.jsx';
import './App.css';

const App = () => {
  return(
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Courses' element={<Courses/>} />
      

    </Routes>
  )
};

export default App;
