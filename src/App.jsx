import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Team from './components/Team';
import Research from './components/Research';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Publications from './components/Publications';
import './index.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Neural Engineering Lab | IIT Guwahati</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/team">The Team</Link>
        {/* <div className="dropdown">
          <button className="dropbtn">People ▾</button>
          <div className="dropdown-content">
            <Link to="/about">About PI</Link>
            <Link to="/team">The Team</Link>
          </div>
        </div> */}
        <Link to="/publications">Publications</Link>
        <Link to="/research">Research</Link>
        {/* <div className="dropdown">
          <button className="dropbtn">Research ▾</button>
          <div className="dropdown-content">
            <Link to="/research/eeg">EEG-based applications</Link>
            <Link to="/research/mri">sMRI-based applications</Link>
            <Link to="/research/media">Research in Media</Link>
          </div>
        </div> */}
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Neural Engineering Lab. All rights reserved.</p>
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
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
