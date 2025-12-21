import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Team from './components/Team';
import Research from './components/Research';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Publications from './components/Publications';
import News from './components/News';
import Collaborations from './components/Collaborations';
import Courses from './components/Courses';
import CourseDetails from './components/CourseDetails';
import './index.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Neural Engineering Lab | IIT Guwahati</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/team">The Team</Link>
        <Link to="/publications">Publications</Link>
        <Link to="/research">Research</Link>
        <Link to="/courses">Teaching</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Neural Engineering Lab. All rights reserved.
        <span className="footer-credit">
          Designed &amp; Maintained by <a
            href="https://www.linkedin.com/in/hari-prasath-b-b83188158/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hari Prasath B
          </a>
        </span>
      </p>
    </footer>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/research" element={<Research />} />
        <Route path="/team" element={<Team />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/news" element={<News />} />
        <Route path="/collab" element={<Collaborations />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseId" element={<CourseDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
