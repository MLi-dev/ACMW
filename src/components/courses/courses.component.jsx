import { useState } from "react";
import "./courses.styles.css";
import Output from "./output.component";
import { projectFirestore } from "../../firebase/config";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Courses = ({ id }) => {
	const [data, setData] = useState([]);
	const [pending, setPending] = useState(false);
	const [error, setError] = useState(false);
	const { category } = useParams();
	const [courseId, setCourseId] = useState(1);
	const [type, setType] = useState("");
	const [video, setVideo] = useState("");
	const onSubmitHandler = (id, type, category, video) => {
		setCourseId(id);
		setType(type);
		setVideo(video);
	};
	useEffect(() => {
		setPending(true);
		projectFirestore
			.collection("courses")
			.where("category", "==", category)
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
	}, [courseId, category]);

	return (
		<div>
			<header>
				<h2>{category} Learning Resources</h2>
			</header>
			<section>
				<nav>
					<ul id="courseMenu">
						{error && <div>No Courses/Video available!</div>}
						{pending && <div>Loading!</div>}
						{!pending &&
							data.map((item) => (
								<li>
									<a
										href
										key={item.id}
										onClick={() =>
											onSubmitHandler(
												`${item.id}`,
												"Youtube",
												`${item.category}`,
												`https://www.youtube.com/embed/${item.video}`
											)
										}
									>
										<div>{item.title}</div>
									</a>
								</li>
							))}
						<li>
							<a href onClick={() => onSubmitHandler(1, "Quiz", "Linux")}>
								<div>Quiz</div>
							</a>
						</li>
					</ul>
				</nav>
				<article>
					<Output id={courseId} type={type} category={category} video={video} />
				</article>
			</section>
		</div>
	);
};

export default Courses;
