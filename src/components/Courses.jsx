import React from 'react';
import './css/Courses.css';

const coursesData = [
    {
        name: "BT640- Neural Imaging and Signal Systems",
        image: "/images/courses/bt640.jpg",
        description: "Course is designed to introduce the theory and instrumentation for neural systems having clinical relevance",
    }
];

function Courses() {
    return (
        <div className="page">
            <h1>Courses Offered</h1>
            <div className="courses-grid">
                {coursesData.map((course, index) => (
                    <div className="course-card" key={index}>
                        <img src={course.image} alt={course.name} className="course-image" />
                        <h2>{course.name}</h2>
                        <p>{course.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Courses;