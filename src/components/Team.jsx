import React from 'react';
import './css/Team.css';

const teamData = {
  "Faculty": [
    {
      name: "Dr. Cota Navin Gupta",
      role: "Principal Investigator",
      info: "Assistant Professor, BSBE Department",
      image: "/images/profile_pic/cng.jpg",
      scholar: "https://scholar.google.com/",
      linkedin: "https://linkedin.com/"
    }
  ],
  "Students": [
    {
      name: "Doli Hazarika",
      role: "PhD Student",
      co_supervision: "(Co-supervised with Dr.Souptik Chanda)",
      info: "Electroencephalogram, Machine Learning, App Development",
      image: "/images/profile_pic/doli.jpg",
      scholar: "https://scholar.google.com/",
      linkedin: "https://linkedin.com/"
    },
    {
      name: "Vishnu KN",
      role: "PhD Student",
      info: "Electroencephalogram, Neurocinematics, Deep Learning",
      image: "/images/profile_pic/Vishnu.jpg",
      scholar: "https://scholar.google.com/",
      linkedin: "https://linkedin.com/"
    },
    {
      name: "Suraj Kumar",
      role: "PhD Student",
      info: "Image Processing, Structural MRI, Deep Learning",
      image: "/images/profile_pic/suraj.jpg",
      scholar: "https://scholar.google.com/",
      linkedin: "https://linkedin.com/"
    },
    {
      name: "Dasari Shivakumar",
      role: "PhD Student",
      co_supervision: "(Co-supervised with Dr.Budhaditya Hazra)",
      info: "Electroencephalogram, Music, Neuroscience",
      image: "/images/profile_pic/Shiva.jpg",
      scholar: "https://scholar.google.com/",
      linkedin: "https://linkedin.com/"
    },
    {
      name: "Hari Prasath B",
      role: "MTech Student",
      info: "Electrooculography, Deep Learning",
      image: "/images/profile_pic/hari.jpg",
      scholar: "https://scholar.google.com/",
      linkedin: "https://linkedin.com/"
    }
  ],
  "Students Under Co-supervision": [
    {
      name: "Rahul Bhagawati",
      role: "PhD Student",
      supervisor: "(Supervisor- Dr.Souptik Chanda)",
      info: "Biomedical Imaging, Machine Learning",
      image: "/images/profile_pic/RB.jpg",
      scholar: "https://scholar.google.com/",
      linkedin: "https://linkedin.com/"
    },
    {
      name: "Pratik Nanda",
      role: "PhD Student",
      supervisor: "(Supervisor- Dr. Bidisha Som)",
      info: "Spatial Language, Spatial Semantics, Multimodal Analysis",
      image: "/images/profile_pic/Pratik.jpg",
      scholar: "https://scholar.google.com/",
      linkedin: "https://linkedin.com/"
    },
    {
      name: "Supriya Borodoloi",
      role: "PhD Student",
      supervisor: "(Supervisor- Dr.Shyamanta Hazarika)",
      info: "Motor Imagery, Signal Processing, Lingustics, Neuroscience",
      image: "/images/profile_pic/SP.png",
      scholar: "https://scholar.google.com/",
      linkedin: "https://linkedin.com/"
    },
  ],
  "Alumni": [
    {
      name: "Shivani Mittal",
      year: "MTP in 2025",
      currentRole: "joined Deloitte India"
    },
    {
      name: "Afshan Perween",
      year: "BTP in 2025",
      currentRole: "joined Deloitte India"
    },
    {
      name: "Sumit Nayan",
      year: "BTP in 2025",
      currentRole: "preparing for Civil Services Exam"
    },
    {
      name: "Tanmayee",
      year: "PhD in 2024",
      currentRole: "PostDoc position at Karolinska Institutet, Sweden"
    },
    {
      name: "Nanaki Singh",
      year: "MTP in 2023",
      currentRole: "PhD at CNS, IISc"
    },
    {
      name: "Aditya S",
      year: "MTP in 2023",
      currentRole: "PhD at Dept of Biotechnology, IIT Madras"
    },
    {
      name: "Aadarsh",
      year: "BTP in 2023",
      currentRole: "joined Arizona State University, USA"
    },
    {
      name: "Utsav Gupta",
      year: "BTP in 2023",
      currentRole: "joined Vayuz Technologies"
    },
    {
      name: "Navarun Yadav",
      year: "BTP in 2022",
      currentRole: "MTech at CeNSE, IISc"
    },
    {
      name: "Kalpajyothi Hazarika",
      year: "MTP in 2021",
      currentRole: "PhD at CNS, IISc"
    },
    {
      name: "Rekshand Gehlot",
      year: "MTP in 2021",
      currentRole: "joined TCS Innovation Labs"
    },
    {
      name: "Siva Sai Himakar Sreerangam",
      year: "BTP in 2021",
      currentRole: "joined EXL"
    },
    {
      name: "Prathyoom M S",
      year: "BTP in 2021",
      currentRole: "joined Sprinklr"
    },
    {
      name: "Srihari Madhavan",
      year: "MTP in 2020",
      currentRole: "joined University of Connecticut"
    },
    {
      name: "Shwetank Panwar",
      year: "BTP in 2020",
      currentRole: "joined Endovision AI"
    },
    {
      name: "Manav Agarwal",
      year: "BTP in 2020",
      currentRole: "joined Toppr"
    },
    {
      name: "Arup Kumar Pal",
      year: "MTP in 2019",
      currentRole: "joined Mastercard"
    },
    {
      name: "Abhishek Siroha",
      year: "MTP in 2018",
      currentRole: "joined Spectral Insights"
    },
    {
      name: "Nikhil Yadhala",
      year: "BTP in 2018",
      currentRole: "joined Microsoft India"
    },
    {
      name: "Apoorv Bajpai",
      year: "BTP in 2018",
      currentRole: "joined Global Analytics"
    },
    
  ]
};

function Team() {
  return (
    <div className="page">
      <h1>Our Team</h1>
      {Object.keys(teamData).map(category => (
        <div key={category}>
          <h2 className="category-title">{category}</h2>

          {category === "Alumni" ? (
            <ul className="alumni-list">
              {teamData.Alumni.map((member, index) => (
                <li key={index}>
                  <strong>{member.name}</strong> : (Completed {member.year}) — {member.currentRole}
                  <span className="alumni-links">
                    {member.scholar && (
                      <a href={member.scholar} target="_blank" rel="noopener noreferrer">
                        <img src="/images/logo/icons8-google-scholar.svg" alt="Google Scholar" />
                      </a>
                    )}
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <img src="/images/logo/icons8-linkedin-logo.svg" alt="LinkedIn" />
                      </a>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="team-grid">
              {teamData[category].map((member, index) => (
                <div className="team-card" key={index}>
                  <img src={member.image} alt={member.name} />
                  <h2>{member.name}</h2>
                  <h4>{member.role}</h4>
                  <h4>{member?.co_supervision}</h4>
                  <h4>{member?.supervisor}</h4>
                  <h5>{member.info}</h5>
                  <div className="social-links">
                    <a href={member.scholar} target="_blank" rel="noopener noreferrer">
                      <img src="/images/logo/icons8-google-scholar.svg" alt="Google Scholar" />
                    </a>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <img src="/images/logo/icons8-linkedin-logo.svg" alt="LinkedIn" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Team;
