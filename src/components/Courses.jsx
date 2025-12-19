import React, { useState, useEffect } from 'react';
import './css/Courses.css';

const coursesData = [
    {
        id: "bt640",
        name: "BT640 - Neural Imaging and Signal Systems",
        image: "/images/courses/bt640.jpg",
        short: "This course is designed to introduce the theory and instrumentation for neural systems having clinical relevance",
        credits: 6,
        syllabus: [
            "Significance and common types of neural signals",
            "Processing and feature extraction of EEG signals",
            "Introduction to Magnetic Resonance Imaging",
            "Neural decoding and BCI applications",
            "Clinical applications and instrumentation"
        ],
        link: "https://www.iitg.ac.in/biotech/pdf/electives/BT640.pdf"
    },
    {
        id: "bt301",
        name: "BT301 - Biophysics",
        image: "/images/courses/biophysics.png",
        short: "This course gives an introduction to the physical principles governing biomolecular structure, dynamics, and interactions",
        credits: 6,
        syllabus: [
            "Molecular potentials",
            "Structures of bio-macromolecules",
            "Protein folding, unfolding, misfolding, and aggregation",
            "Methods in molecular biophysics",
            "Membrane biophysics"
        ],
        link: "https://www.iitg.ac.in/acad/CourseStructure/Btech2018/BT/BT301.html"
    }
];

function Courses() {
    const [selectedCourse, setSelectedCourse] = useState(null);

    // close modal on ESC
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === 'Escape') setSelectedCourse(null);
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    return (
        <div className="page">
            <h1>Courses Offered</h1>

            <div className="courses-grid">
                {coursesData.map((course) => (
                    <div
                        className="course-card"
                        key={course.id}
                        onClick={() => setSelectedCourse(course)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedCourse(course); }}
                    >
                        <img src={course.image} alt={course.name} className="course-image" />
                        <h2>{course.name}</h2>
                        <p>{course.short}</p>
                    </div>
                ))}
            </div>

            {/* Modal for course details display */}
            {selectedCourse && (
                <div
                    className="modal-overlay"
                    onClick={(e) => {
                        if (e.target.classList.contains('modal-overlay')) setSelectedCourse(null);
                    }}
                >
                    <div className="modal-content" role="dialog" aria-modal="true">
                        <button className="modal-close" onClick={() => setSelectedCourse(null)}>×</button>

                        <div className="modal-header">
                            <img
                                src={selectedCourse.image}
                                alt={selectedCourse.name}
                                className="modal-course-image"
                            />
                            <h2>{selectedCourse.name}</h2>
                        </div>

                        <div className="modal-body">
                            <p className="course-meta">
                                <strong>Credits:</strong> {selectedCourse.credits}
                            </p>

                            <p className="course-short">{selectedCourse.short}</p>

                            <h3>Syllabus</h3>
                            <ol className="syllabus-list">
                                {selectedCourse.syllabus.map((topic, i) => (
                                    <li key={i}>{topic}</li>
                                ))}
                            </ol>

                            {selectedCourse.notes && (
                                <>
                                    <h4>Notes</h4>
                                    <p>{selectedCourse.notes}</p>
                                </>
                            )}

                            {selectedCourse.link && (
                                <p className="course-link">
                                    <a href={selectedCourse.link} target="_blank" rel="noopener noreferrer">
                                        Course page / Resources →
                                    </a>
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

export default Courses;