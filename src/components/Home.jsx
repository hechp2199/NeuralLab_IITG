import React, { useState, useEffect } from 'react';
import './css/Home.css'

function Home() {

  const images = [
    "/images/home_page/IIT_view.png",
    "/images/home_page/EntranceImage.png",
    "/images/home_page/Lab2025.jpg",
    "/images/home_page/collective-pic.jpg",
    "/images/home_page/IMG_20230518_180547.jpg",
    "/images/home_page/IMG_20230518_180836.jpg"
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); // change every 3 seconds

    return () => clearInterval(timer); // cleanup on unmount
  }, [images.length]);

  return (
    <div className="page">
      <div className='background_image'>
        <h1>Welcome to Neural Engineering Lab</h1>
        <div className="slideshow">
          <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        </div>
      </div>
      <p>Broadly the research lab's current focus is two-fold namely <b>EEG-based applications</b> and <b>sMRI-based applications</b> </p>
    </div>
  );
}

export default Home