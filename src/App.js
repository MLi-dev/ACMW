import { Routes, Route } from "react-router-dom";
import Home from "./home/home.component.jsx";
import Courses from "./components/courses/courses.component.jsx";
import Report from "./components/report/report.component.jsx";
import "./App.css";

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/Courses/:category' element={<Courses />} />
			<Route path='/MyReport' element={<Report />} />
		</Routes>
	);
};

export default App;
