import { Link } from "react-router-dom";
import './css/Courses.css';

const coursesData = [
    {
        id: "bt640",
        name: "BT640 - Neural Imaging and Signal Systems",
        image: "/images/courses/neural_engineering.png",
        description: "This course is designed to introduce the theory and instrumentation for neural systems having clinical relevance"
    },
    {
        id: "bt301",
        name: "BT301 - Biophysics",
        image: "/images/courses/biophysics.png",
        description: "This course gives an introduction to the physical principles governing biomolecular structure, dynamics, and interactions"
    }
];

function Courses() {

    return (
        <div className="page">
            <h1>Courses Offered</h1>

            <div className="courses-grid">
                {coursesData.map(course => (
                    <Link
                        to={`/courses/${course.id}`}
                        key={course.id}
                        className="course-link"
                    >
                        <div className="course-card">
                            <img src={course.image} alt={course.name} className="course-image" />
                            <h2>{course.name}</h2>
                            <p>{course.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Courses;