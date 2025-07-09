import React from 'react';
import './css/About.css';

function About() {
  return (
    <div className="page lab-pi-page">
      <h1>Principal Investigator</h1>

      {/* Top: Image and Intro */}
      <div className="pi-header">
        <img src="/images/profile_pic/cng.jpg" alt="Lab PI" className="pi-image-rounded" />
        <div className="pi-bio">
          <h2>Dr. Cota Navin Gupta</h2>
          <p>
            Dr.Navin Gupta is currently an Assistant Professor with the Department of Biosciences and Bioengineering, IIT Guwahati working in the areas of  brain computer interfaces,imaging genetics for psychiatric disorders, multimodal/multivariate algorithm development and designing wearable medical solutions for patient mobility.
            He completed his Postdoctoral learning in the area of schizophrenia imaging genetics on a joint National Institute of Health (NIH) grant between Mind Research Network, USA and Georgia State University, USA publishing in numerous high impact journals.
            Previously he obtained his PhD from Brain Computer Interfaces and Neural Engineering (BCI-NE) Group, University of Essex fully funded by the competitive Overseas Research Student (ORS) award for international students and University of Essex scholarships.
            His PhD work involved designing an offline P300 BCI system.
            During his doctoral work he also explored integrating electroencephalogram and near infrared spectroscopy modalities for cognitive applications.
          </p>
        </div>
      </div>

      {/* Bottom: Section-wise Details */}
      <div className="pi-section">
        <h3>Education</h3>
        <h4>University of Essex, United Kingdom (Ph.D)</h4>
        <p>Brain Computer Interfaces-Neural Engineering Group</p>
        <p>Thesis: Advancing the P300 based Brain Computer Interface Design.</p>
        <p>http://essexbcis.uk/main/other/former-members/</p>
        <h4>Nanyang Technological University, Singapore (M.S)</h4>
        <p>Telemedicine and Informatics Group, Biomedical Engineering Research Centre</p>
        <p>Thesis: Algorithm development for Heart Sound Analysis</p>
        <p>http://www3.ntu.edu.sg/bmerc/contents/index.htm</p>
        <h4>University of Madras, India (B.Eng)</h4>
        <p>Electronics and Communication Engineering</p>
        <p>Thesis:Median Filters for Image processing using Matlab</p>
      </div>

      <div className="pi-section">
        <h3>Research/Work Experience</h3>
        <p>Fellow of IEEE (2022)</p>
        <p>Best Paper Award – NeurIPS 2021</p>
        <p>Young Scientist Award – Govt. of India</p>
      </div>

      <div className="pi-section">
        <h3>Selected Publications</h3>
        <p>“Deep Learning in Neural Interfaces” – IEEE TNSRE, 2023</p>
        <p>“Adaptive BCI Systems” – Nature Neuroscience, 2022</p>
      </div>

      <div className="pi-section">
        <h3>Courses Taught</h3>
        <p>Brain-Computer Interfaces</p>
        <p>Machine Learning in BioSystems</p>
        <p>Neural Signal Processing</p>
      </div>
    </div>
    // <div className="page lab-pi-page">
    //   <h1>Principal Investigator</h1>
    //   <div className="pi-top">
    //     <img src="/images/profile_pic/cng.jpg" alt="Lab PI" className="pi-image-rounded" />
    //     <div className="pi-summary">
    //       <h2>Dr. Cota Navin Gupta</h2>
    //       <p>
    //         Dr.Navin Gupta is currently an Assistant Professor with the Department of Biosciences and Bioengineering, IIT Guwahati working in the areas of  brain computer interfaces,imaging genetics for psychiatric disorders, multimodal/multivariate algorithm development and designing wearable medical solutions for patient mobility.
    //         He completed his Postdoctoral learning in the area of schizophrenia imaging genetics on a joint National Institute of Health (NIH) grant between Mind Research Network, USA and Georgia State University, USA publishing in numerous high impact journals.
    //         Previously he obtained his PhD from Brain Computer Interfaces and Neural Engineering (BCI-NE) Group, University of Essex fully funded by the competitive Overseas Research Student (ORS) award for international students and University of Essex scholarships.
    //         His PhD work involved designing an offline P300 BCI system.
    //         During his doctoral work he also explored integrating electroencephalogram and near infrared spectroscopy modalities for cognitive applications.
    //       </p>
    //     </div>
    //   </div>

    //   <div className="pi-details">
    //     <h3>Education</h3>
    //       <p>Ph.D. in Biomedical Engineering – Stanford University</p>
    //       <li>M.Tech in Electrical Engineering – IIT Delhi</li>
    //       <li>B.E. in Electronics – BITS Pilani</li>

    //     <h3>Experience</h3>
    //     <ul>
    //       <li>Professor, XYZ University (2015–Present)</li>
    //       <li>Senior Researcher, National Institute of Biomedical Innovation (2010–2015)</li>
    //     </ul>

    //     <h3>Selected Publications</h3>
    //     <ul>
    //       <li>“Neural Decoding Using Adaptive Deep Learning” – IEEE Transactions, 2023</li>
    //       <li>“Closed-Loop BCI in Clinical Trials” – Nature Neuroscience, 2022</li>
    //     </ul>

    //     <h3>Conferences</h3>
    //     <ul>
    //       <li>Keynote Speaker – NeuroTech Asia 2024</li>
    //       <li>Organizer – National Symposium on AI for Healthcare 2023</li>
    //     </ul>
    //   </div>
    // </div >
    // <div className="page">
    //   <h1>About PI- Dr. Cota Navin Gupta</h1>
    //   <p>Our lab focuses on interdisciplinary research, combining technology and science to solve real-world problems.</p>
    // </div>
  );
}

export default About