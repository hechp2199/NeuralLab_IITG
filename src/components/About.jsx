import React from 'react';
import './css/About.css';

function About() {
  return (
    <div className="page lab-pi-page">
      <h1>Principal Investigator</h1>

      <div className="pi-header">
        <img src="/images/profile_pic/cng.jpg" alt="Lab PI" className="pi-image-rounded" />
        <div className="pi-bio">
          <h2>Dr. Cota Navin Gupta</h2>
          <p>
            Dr. Navin Gupta is currently an Assistant Professor with the Department of Biosciences and Bioengineering, IIT Guwahati working in the areas of brain computer interfaces, imaging genetics for psychiatric disorders, multimodal/multivariate algorithm development and designing wearable medical solutions for patient mobility.
            He completed his Postdoctoral learning in the area of schizophrenia imaging genetics on a joint National Institute of Health (NIH) grant between Mind Research Network, USA and Georgia State University, USA publishing in numerous high impact journals.
            Previously he obtained his PhD from Brain Computer Interfaces and Neural Engineering (BCI-NE) Group, University of Essex fully funded by the competitive Overseas Research Student (ORS) award for international students and University of Essex scholarships.
            His PhD work involved designing an offline P300 BCI system.
            During his doctoral work he also explored integrating electroencephalogram and near infrared spectroscopy modalities for cognitive applications.
          </p>
        </div>
      </div>

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
        <p>Thesis: Median Filters for Image processing using Matlab</p>
      </div>

      <div className="pi-section">
        <h3>Research/Work Experience</h3>

        <h4>Assisstant Professor (Jan 2017 onwards)</h4>
        <h4>Department of Biosciences and Bioengineering (BSBE), Indian Institute of Technology Guwahati, India</h4>
        <h4>Courses at IIT Guwahati:</h4>
        <ul>
          <li>Developed and Lectured: Neural Imaging and Signal Systems (2018-2022) ; Bioinstrumentation and control (BT524)</li>
          <li>Lectured for departmental courses: Biophysics (2018-23), Biotechniques (2020-21)</li>
        </ul>
        <h4>Institute level/ Departmental courses at IIT Guwahati:</h4>
        <ul>
          <li>Established Neural Engineering Lab at Dept. of BSBE, IIT Guwahati to work in the areas of Brain Computer Interface, Clinical Big Data, Pyschiatric Disorders, Multivariate and Multimodal Algorithms, Deep learning and Wearable Devices</li>
          <li>BSBE Department Time Table Co-ordinator (2018-2020)</li>
          <li>BSBE Department Placement Co-ordinator (2020-2022)</li>
          <li>BSBE Department Public Relations Committee Member (2023-Current)</li>
          <li>Institute level member for High Performance Computing Cluster (HPCC) Committee (2018-2021)</li>
          <li>Associated faculty with Center for Linguistic Science and Technology, IIT Guwahati from 2018</li>
          <li>Associate Warden for Lohit Hostel, IIT Guwahati (2019- 2023)</li>
        </ul>

        <h4>Postdoctoral Research Fellow (Jan 2012-2016)</h4>
        <h4>Mind Research Network (MRN), Albuquerque, USA
          (Joint NIH Grant between MRN and Georgia State University)</h4>
        <ul>
          <li>Learnt imaging genetics for psychiatry. Implemented multivariate and multimodal frameworks for imaging/imaging genetic datasets using GIFT, FIT and SPM toolboxes.Worked extensively on VBM, SBM (i.e. ICA) and parallel ICA</li>
          <li>Development of techniques for complex data analytics (Biclustered ICA)</li>
          <li>Continued my Phd research track of using electroencephagram/brain computer interfaces (EEG-BCI) to study visuospatial attention and neural responses to natural stimuli</li>
        </ul>

        <h4>Research Assistant</h4>
        <h4>Dept of Electrical and Electronics Engineering,
          Imperial College London, United Kingdom</h4>
        <ul>
          <li>Help evaluate and buy electroencephalogram(EEG) equipment; prepared ethics approval forms</li>
          <li>Sleep EEG analysis (Autoregressive and Coherence Analysis) from a low power perspective</li>
        </ul>
      </div>

      <div className="pi-section">
        <h3>Academic Editor/ Reviewer for Journals and Conferences</h3>
        <ul>
          <li><b>Academic Editor: </b>Brain Sciences Journal, PLOS ONE Journal, BMC Neuroscience</li>
          <li><b>Reviewer: </b>Frontiers in Computational Neuroscience, Frontiers in Psychiatry, Frontiers in Brain Imaging and Simulation,  Nature Neuroscience,  Journal of Neural Engineering,  Brain Sciences (MDPI),  IEEE Engineering in Medicine and Biology Society Conference,  IEEE Biomedical & Health Informatics (IEEE-BHI), MICCAI Conference, NeurIPS Conference,  IEEE-INDICON Conferences</li>
        </ul>
      </div>

      <div className="pi-section">
        <h3>Selected Publications</h3>
        <ul>
          <li>Gupta, C. N., Turner, J. A., & Calhoun, V. D. (2018). Source-Based Morphometry: Data-Driven Multivariate Analysis of Structural Brain Imaging Data. In Brain Morphometry (pp. 105-120). Humana Press, New York, NY</li>
          <li>C. N. Gupta and R. Palaniappan, “Using high-frequency electroencephalogram in visual and auditory-based brain-computer interface designs,” EContact! 14.3 " Biotechnological Performance Practice, Canadian Electroacoustic Society, June 2012</li>
          <li>C.N.Gupta and R.Palaniappan “Concerns on global security: moving towards fool-proof authentication system using brain signals” IEEE Gold, July issue, 2009</li>
        </ul>
      </div>

      <div className="pi-section">
        <h3>Special Journal Issues</h3>
        <ul>
          <li>Improving Decoding of Neuroinformation: Towards the Diversity of Neural Engineering Applications</li> <a href='https://www.frontiersin.org/research-topics/42846/improving-decoding-of-neuroinformation-towards-the-diversity-of-neural-engineering-applications'>[Link]</a>
          <li>Biomarkers Identification for Neurological Diseases and Neurorehabilitation</li> <a href='https://www.mdpi.com/journal/brainsci/special_issues/YNZNTK0EJ5'>[Link]</a>
        </ul>
      </div>

      <div className="pi-section">
        <h3>Talks</h3>
        <ul>
          <li>Delivered talk on Introduction to Cognitive Neuroengineering and its Applications at iBrain lecture series, IITG, August 2023</li> <a href='https://www.youtube.com/watch?v=H2dbPJDMqPg'>[Link]</a>
          <li>Delivered talk on Brain Computer Interfaces, IIIT Guwahati, India, March 2023</li>
          <li>Delivered talk on Neuroimaging for Mental Health, BIT-MESRA University, Ranchi, India, September 2022</li>
          <li>Online talk on Neurohealth @ Neuro 2.0 – Futuristic Trends in Neurotechnology, October 2021 (Last Accessed Mar 2023)</li> <a href='https://www.youtube.com/watch?v=LK-eR3MBt4w'>[Link]</a>
          <li>Talk on Artificial Intelligence Augmented Robotic Neurorehabilitation at IEEE-INDICON, Kolkata, December 2021</li> <a href='https://www.ewh.ieee.org/r10/calcutta/indicon2021/tutorial_detail.html#section1'>[Link]</a>
          <li>TEQIP Talks about ongoing work at the Neural Engineering Lab was presented at Workshop on Medical Devices and Rehabilitation Engineering 2019 & TEQIP-III Sponsored Short Term Course on Fundamentals of Robotics and Artificial Intelligence 2019, both held at IIT Guwahati</li>
          <li>Invited Talk and Hands on Summer School Instructor in Neuroimaging, IIIT Hyderabad, India, July 2017</li>
          <li>Invited Session Talk, Annual Meet of Indian Academy of Neuroscience, Ravenshaw University, Cuttack Oct 2017</li>
          <li>Invited Talk and Hands on Summer School in Neuroimaging, IIIT Hyderabad, July 2017 (Accessed finally on April 2019)</li> <a href='http://csl.iiit.ac.in/ssni2017/'>[Link]</a>
          <li>(Invited Talk) Dept of EEE, IIT Guwahati, India-"Multivariate Methods for fusion of Multimodal Imaging and Genetic Datasets in Schizophrenia", 2017</li>
          <li>Dept of Biotechnology, IIT Madras, India : "Need for Imaging Genetics in Psychiatry", 2016</li>
          <li>Center for Behavioural and Cognitive Sciences, Allahabad, India : "Multivariate Methods for fusion of Multimodal Imaging and Genetic Data in Schizophrenia", 2016</li> <a href='http://cbcs.ac.in/events/lectures/'>[Link]</a>
          <li>Talk for PostDoc position at The University of Texas Health Science Center, USA- "Advancing the P300 based BCI Design", Oct 2011. (However accepted joint NIH Postdoc position @ MRN-GSU, USA)</li>
          <li>PhD work selected for presentation at "The Third Annual British Computer Society (BCS) East Anglian PhD Competition, United Kingdom", Feb 2009 (Accessed finally on April 2017)</li> <a href='http://www.essex.ac.uk/csee/news_and_seminars/newsEvent.aspx?e_id=5684'>[Link]</a>
          <li>Master's thesis work presented at "Young Person's Lecture Competition", Nanyang Technological University, Singapore, 2005</li>
        </ul>
      </div>

    </div>
  );
}

export default About