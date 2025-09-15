import React, { useState, useEffect } from 'react';
import './css/Home.css';

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

  const bulletinItems = [
    "Dr. Navin joins Editorial Board of PlosONe and BMC Neuroscience journals",
    "Tanmayee defends her PhD thesis and bags a Postdoc position at Karolinska Institutet, Sweden",
    "Shivani and Perween bag placement offers from reputed Deloitte as Data Analyst",
    "Dr. Navin Gupta delivered a talk at iBrain Initiative, Dept. of HSS, IITG",
    "Doli and Shiva selected for Computational Neuroscience Summer School at IISER Pune",
    "Vacancy : Students passionate about programming and Neuroscience can contact us"
  ];
  const [bulletinIndex, setBulletinIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  useEffect(() => {
    const bTimer = setInterval(() => {
      setBulletinIndex(prev => (prev + 1) % bulletinItems.length);
    }, 4000);
    return () => clearInterval(bTimer);
  }, [bulletinItems.length]);

  return (
    <div className="page">
      <div className='background_image'>
        <h1>Welcome to Neural Engineering Lab</h1>
        <div className="slideshow">
          <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        </div>
      </div>

      {/* New Research Focus + Bulletin Board */}
      <div className="focus-bulletin-modern">
        <div className="research-focus-modern">
          <h2>🔬 Research Focus</h2>
          <p>
            Broadly the research lab's current focus is two-fold namely <b>EEG-based applications</b> and <b>sMRI-based applications</b>.
          </p>
          <p>
            If this activates your neurons and you see common interest, please drop me an email for B.Tech/M.Tech projects with grade sheets (Opens every summer in my lab). For PhD, please send a One page Research Statement and your college grade sheets. Also apply formally to IITG-BSBE PhD program.
          </p>
          <p>
            We work on interdisciplinary problems so it is imperative for you to understand that both of us will be learning and will be students of Science. We don't believe in BOSS culture but we gently remind each other that the work has to be done. :-) Thanks!
          </p>
          <a href="/contact" className="view-all-link">Contact</a>
        </div>

        <div className="bulletin-modern">
          <h2>📌 Lab News</h2>
          <div className="bulletin-ticker">
            <p key={bulletinIndex}>{bulletinItems[bulletinIndex]}</p>
          </div>
          <a href="/news" className="view-all-link">View All News →</a>
        </div>
      </div>
    </div>
  );
}

export default Home;