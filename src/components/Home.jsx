import React, { useState, useEffect } from 'react';
import './css/Home.css';
import './css/Team.css';

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="page">
      <div className='background_image'>
        <h1>Welcome to Neural Engineering Lab</h1>
        <div className="slideshow">
          <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        </div>
      </div>

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
          <div className='links-list-home'>
            <p><a href='https://scholar.google.com/citations?hl=en&user=31K9iDoAAAAJ&view_op=list_works&sortby=pubdate' target='_blank' rel='noreferrer'>Google Scholar</a></p>
            <p><a href='https://www.researchgate.net/profile/Cota-Gupta' target='_blank' rel='noreferrer'>ResearchGate</a></p>
            <p><a href='https://github.com/NeuralLabIITGuwahati' target='_blank' rel='noreferrer'>GitHub Repository</a></p>
          </div>
        </div>

        <div className="bulletin-modern">
          <h2>📌 Lab News</h2>
          <div className="bulletin-scroll-container">
            <div className="bulletin-scroll-content">
              <ul>
                {bulletinItems.concat(bulletinItems).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <a href="/news" className="view-all-link">View All News →</a>
        </div>

        <div className="team-grid">
          <div className="team-card" key="courses">
            <img src="/images/home_page/wheel-150.jpg" alt="courses" />
            <h2>Courses Offered by Dr. Navin Gupta</h2>
            <h5>Last Updated on Oct, 2025</h5>
          </div>
          <div className="team-card" key="collaborations">
            <img src="/images/home_page/31.png" alt="collaborations" />
            <h2><a href="/collab">Our Collaborations</a></h2>
            <h5>Last Updated on Sep, 2024</h5>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Home;