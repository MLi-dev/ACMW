import { Routes, Route } from "react-router-dom";
import Home from "./home/home.component.jsx";
import Courses from "./components/courses/courses.component.jsx";
import Report from "./components/report/report.component.jsx";
import Signup from "./components/signup/Signup";
import JobHelp from "./components/jobhelp/jobhelp.component.jsx";
import Login from "./components/login/Login"
import "./App.css";

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/Courses/:category' element={<Courses />} />
			<Route path='/MyReport' element={<Report />} />
			<Route path='/JobHelp/:category' element={<JobHelp />} />
			<Route path='/Signup' element={<Signup />} />
			<Route path='/Login' element={<Login />} />
		</Routes>
	);
};

export default App;
