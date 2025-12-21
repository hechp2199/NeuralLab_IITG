import { useParams } from "react-router-dom";
import "./css/Courses.css";

const coursesData = [
    {
        id: "bt640",
        name: "BT640 - Neural Imaging and Signal Systems",
        image: "/images/courses/bt640.jpg",
        description: "This course is designed to introduce the theory and instrumentation for neural systems having clinical relevance.",
        syllabus: [
            "Significance and common types of neural signals",
            "Processing and feature extraction of EEG signals",
            "Introduction to Magnetic Resonance Imaging",
            "Neural decoding and BCI applications",
            "Clinical applications and instrumentation"
        ],
        videoLink: "https://www.youtube.com/watch?v=z25kIyZQX9k",
        syllabusLink: "https://www.iitg.ac.in/biotech/pdf/electives/BT640.pdf",
        slides: [
            {
                title: "Lecture on introduction to course",
                link: "/files/slides/BT640course_Overview.pdf"
            },
            {
                title: "Lecture on ERP and BCI",
                link: "/files/slides/Lecture_ERP_BCI.pdf"
            }
        ]
    },
    {
        id: "bt301",
        name: "BT301 - Biophysics",
        image: "/images/courses/biophysics.png",
        description: "Introduction to physical principles governing biomolecular structure and dynamics.",
        syllabus: [
            "Molecular potentials",
            "Structures of bio-macromolecules",
            "Protein folding, unfolding, misfolding, and aggregation",
            "Methods in molecular biophysics",
            "Membrane biophysics"
        ],
        syllabusLink: "https://www.iitg.ac.in/acad/CourseStructure/Btech2018/BT/BT301.html"
    }
];

function CourseDetails() {
    const { courseId } = useParams();
    const course = coursesData.find(c => c.id === courseId);

    if (!course) {
        return <p>Course not found.</p>;
    }

    return (
        <div className="page course-details">
            <h1>{course.name}</h1>
            <p>{course.description}</p>

            <h2>Course Contents</h2>
            <ul>
                {course.syllabus.map((topic, index) => (
                    <li key={index}>{topic}</li>
                ))}
            </ul>
            {/* Sample Slides */}
            {course.slides && course.slides.length > 0 && (
                <>
                    <h2>Sample Lecture Slides</h2>
                    <ul className="slides-list">
                        {course.slides.map((slide, index) => (
                            <li key={index}>
                                <a href={slide.link} target="_blank" rel="noopener noreferrer">
                                    {slide.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </>
            )}

            {/* Course Activity Video */}
            {course.videoLink && (
                <>
                    <h2>Course Activity</h2>
                    <p className="external-link">
                        <a
                            href={course.videoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Watch Group Discussion Activity on YouTube →
                        </a>
                    </p>
                </>
            )}

            {/* Syllabus Link */}
            {course.syllabusLink && (
                <>
                    <h2>Course Syllabus</h2>
                    <p>
                        <a
                            href={course.syllabusLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="syllabus-link"
                        >
                            View/Download Course Syllabus
                        </a>
                    </p>
                </>
            )}

        </div>
    );
}

export default CourseDetails;
