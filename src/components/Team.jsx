import React from 'react';
import './css/Team.css';

const teamData = {
  "Faculty": [
    {
      name: "Dr. Cota Navin Gupta",
      role: "Principal Investigator",
      info: "Assistant Professor, BSBE Department",
      image: "/images/profile_pic/cng.jpg",
      scholar: "https://scholar.google.com/citations?hl=en&user=31K9iDoAAAAJ&view_op=list_works&sortby=pubdate",
      linkedin: "https://www.linkedin.com/in/cota-navin-gupta-b412142b/",
      profile: "/about"
    }
  ],
  "Students": [
    {
      name: "Doli Hazarika",
      role: "PhD Student",
      co_supervision: "(Co-supervised with Dr. Souptik Chanda)",
      info: "Electroencephalogram, Machine Learning, App Development",
      image: "/images/profile_pic/doli.jpg",
      scholar: "https://scholar.google.com/citations?user=2ILZI4AAAAAJ&hl=en",
      linkedin: "https://www.linkedin.com/in/doli-hazarika-551053108/"
    },
    {
      name: "Vishnu KN",
      role: "PhD Student",
      info: "Electroencephalogram, Neurocinematics, Deep Learning",
      image: "/images/profile_pic/Vishnu.jpg",
      scholar: "https://scholar.google.com/citations?user=BF6JlMcAAAAJ&hl=en",
      linkedin: "https://in.linkedin.com/in/vishnu-kn-2016b128a"
    },
    {
      name: "Suraj Kumar",
      role: "PhD Student",
      info: "Image Processing, Structural MRI, Deep Learning",
      image: "/images/profile_pic/suraj.jpg",
      scholar: "https://scholar.google.com/citations?user=VM6iWw8AAAAJ&hl=en",
      linkedin: "https://www.linkedin.com/in/surajiitbhu-2284?trk=contact-info"
    },
    {
      name: "Dasari Shivakumar",
      role: "PhD Student",
      co_supervision: "(Co-supervised with Dr. Budhaditya Hazra)",
      info: "Electroencephalogram, Music, Neuroscience",
      image: "/images/profile_pic/shivakumar.jpg",
      scholar: "https://scholar.google.com/citations?user=KQ_AA44AAAAJ&hl=en",
      linkedin: "https://www.linkedin.com/in/dasari-shivakumar-4005a7195"
    },
    {
      name: "Hari Prasath B",
      role: "MTech Student",
      info: "Electrooculography, Android Development, Deep Learning",
      image: "/images/profile_pic/hari.jpg",
      scholar: "",
      linkedin: "https://www.linkedin.com/in/hari-prasath-b-b83188158/"
    },
    {
      name: "Sura Sura Anjali",
      role: "BTech Student",
      info: "",
      image: "/images/profile_pic/anjali.jpg",
      scholar: "",
      linkedin: ""
    },
    {
      name: "Gujju Sai Harshitha",
      role: "BTech Student",
      info: "",
      image: "/images/profile_pic/harshitha.png",
      scholar: "",
      linkedin: ""
    },
    {
      name: "Deepak Sutradhar",
      role: "BTech Student",
      info: "",
      image: "/images/profile_pic/deepak.jpg",
      scholar: "",
      linkedin: ""
    }
  ],
  "Students Under Co-supervision": [
    {
      name: "Rahul Bhagawati",
      role: "PhD Student",
      supervisor: "(Supervisor- Dr. Souptik Chanda)",
      info: "Biomedical Imaging, Machine Learning",
      image: "/images/profile_pic/RB.jpg",
      scholar: "",
      linkedin: "https://in.linkedin.com/in/rahul-bhagawati-40550255"
    },
    {
      name: "Pratik Nanda",
      role: "PhD Student",
      supervisor: "(Supervisor- Dr. Bidisha Som)",
      info: "Spatial Language, Spatial Semantics, Multimodal Analysis",
      image: "/images/profile_pic/Pratik.jpg",
      scholar: "",
      linkedin: "https://www.linkedin.com/in/pratik-nanda-2794782b5/?originalSubdomain=in"
    },
    {
      name: "Supriya Borodoloi",
      role: "PhD Student",
      supervisor: "(Supervisor- Dr. Shyamanta Hazarika)",
      info: "Motor Imagery, Signal Processing, Lingustics, Neuroscience",
      image: "/images/profile_pic/SP.png",
      scholar: "",
      linkedin: "https://in.linkedin.com/in/supriya-bordoloi-a478361a0"
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
      currentRole: "PostDoc position at Karolinska Institutet, Sweden",
      link: "https://ki.se/personer/tanmayee-samantaray"
    },
    {
     name: "Sanjay Chhaba",
      year: "BTP in 2024",
      currentRole: "joined Intellemo.AI",
      link: "" 
    },
    {
      name: "Nanaki Singh",
      year: "MTP in 2023",
      currentRole: "PhD at CNS, IISc",
      link: "https://dhawale-lab.github.io/team/"
    },
    {
      name: "Aditya S",
      year: "MTP in 2023",
      currentRole: "PhD at Dept of Biotechnology, IIT Madras",
      link: "https://sites.google.com/view/bgx/team"
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
      currentRole: "MTech at CeNSE, IISc",
      link: "http://www.cense.iisc.ac.in/navarun"
    },
    {
      name: "Kalpajyothi Hazarika",
      year: "MTP in 2021",
      currentRole: "PhD at CNS, IISc",
      link: "https://cns.iisc.ac.in/aditya/people-all/"
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
      currentRole: "joined University of Connecticut",
      link: "https://health.uconn.edu/genetics/person/srihari-madhavan/"
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
            <div>
              <table className="alumni-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Graduation Year</th>
                    <th>Current Position</th>
                  </tr>
                </thead>
                <tbody>
                  {teamData.Alumni.map((member, index) => (
                    <tr>
                      <td>
                        {member.link ? (
                          <a href={member.link} target="_blank" rel="noopener noreferrer">
                            {member.name}
                          </a>
                        ) : (
                          member.name
                        )}
                      </td>
                      <td>{member.year}</td>
                      <td>{member.currentRole}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p style={{ fontSize: '14px', marginTop: '5px', textAlign: 'left' }}><b>BTP</b> - BTech Project, <b>MTP</b> - MTech Project</p>
            </div>
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
                  </div>
                  {member.profile && (
                    <a style={{ fontSize: '0.9rem', color: '#0066cc' }} href={member?.profile}>About PI</a>
                  )}
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
