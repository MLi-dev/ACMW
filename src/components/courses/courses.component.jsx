import { useState } from "react";
import "./courses.styles.css";
import Output from "./output.component";
import { projectFirestore } from "../../firebase/config";
import course from "./output";
import React, {useEffect} from "react"; 

const Courses = ({ id }) => {
	const [data, setData] = useState([]);
	const [pending, setPending] = useState(false);
	const [error, setError] = useState(false);

	const [courseId, setCourseId] = useState(1);
	const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [video, setVideo] = useState("");
	const onSubmitHandler = (id, type, category, video) => {
    console.log(video); 
		setCourseId(id);
		setType(type);
    setCategory(category);
    setVideo(video);
	};
	useEffect(() => {
		setPending(true);
		projectFirestore
			.collection("courses")
			.get()
			.then((snapshot) => {
				if (snapshot.empty) {
					setError("No courses to load");
					setPending(false);
				} else {
					let results = [];
					snapshot.docs.forEach((doc) =>
						results.push({ id: doc.id, ...doc.data() })
					);
					setData(results);
					setPending(false);
				}
			})
			.catch((err) => {
				setError(err.message);
				setPending(false);
			});
	}, [courseId]);

	return (
		<div>
			<header>
				<h2>Java Learning Resources</h2>
			</header>
			<section>
				<nav>
          <ul>
          <h1>Video</h1>
          {data.map((item) => (
            <div key = {item.id} className='actionButton'>
            <button onClick={() => onSubmitHandler(`${item.id}`, "Youtube", `${item.category}`, `https://www.youtube.com/embed/${item.video}`)}>
              <li>{item.category}</li>
            </button>
          </div>
          ))}
          <h1>Quiz</h1>
						<div className='actionButton'>
							<button onClick={() => onSubmitHandler(1, "Quiz", "Linux")}>
								<li>Linux</li>
							</button>
						</div>
						<div className='actionButton'>
							<button onClick={() => onSubmitHandler(2, "Quiz", "Bash")}>
								<li>Bash</li>
							</button>
						</div>
						<div className='actionButton'>
							<button onClick={() => onSubmitHandler(3, "Quiz", "Docker")}>
								<li>Docker</li>
							</button>
						</div>
						<div className='actionButton'>
							<button onClick={() => onSubmitHandler(4, "Quiz", "SQL")}>
								<li>SQL</li>
							</button>
						</div>
						<div className='actionButton'>
							<button onClick={() => onSubmitHandler(4, "Quiz", "CMS")}>
								<li>CMS</li>
							</button>
						</div>
						<div className='actionButton'>
							<button onClick={() => onSubmitHandler(4, "Quiz", "Code")}>
								<li>Code</li>
							</button>
						</div>
						<div className='actionButton'>
							<button onClick={() => onSubmitHandler(4, "Quiz", "DevOps")}>
								<li>DevOps</li>
							</button>
						</div>
					</ul>
				</nav>
				<article>
					<Output id={courseId} type={type} category={category} video = {video}/>
				</article>
			</section>
			<footer></footer>
		</div>
	);
};

export default Courses;
