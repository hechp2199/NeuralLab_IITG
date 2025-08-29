import React, { useState } from 'react';
import './css/Research.css';
import './css/Publications.css';

function Research() {
  const [activeTab, setActiveTab] = useState('eeg');

  const renderContent = () => {
    switch (activeTab) {
      case 'eeg':
        return (
          <div className="research-content">
            <h3>P300 Speller</h3>
            <p>
              We have realised a working online P300 Brain Computer system which can expeditiously spell letters from electroencephalogram signals. P300, a visually evoked potential obtained as outcome of an oddball experiment, which is usually elicited around parietocentral region of brain, after 300 ms of successful detection of target object, has been exploited to spell letters.
            </p>
            <div className="video-container">
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/E4qWL1hNmUY"
                title="EEG Research Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <br></br>
            <h3>Smartphone-based Natural Environment Applications</h3>
            <p>
              Using a smartphone for Electroencephalogram (EEG) based research in the natural environment is a growing field of study. Our lab is currently exploring about experimental paradigms, electrode/hardware compatibility, preprocessing frameworks, classifiers, and software apps for smartphone based natural environment experiments.These portable smartphone-based EEG systems will be useful in monitoring individuals with psychiatric diseases, in addition to human brain applications in a natural setting.
            </p>
            <div className="video-container">
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/NWJN9obgwXk"
                title="EEG Research Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <br></br>
            <h3>Related Publications</h3>
            <ul className="pub-list">
              <li className="pub-item">
                <a href="https://doi.org/10.3390/s24206734" target="_blank" rel="noopener noreferrer">
                  Dynamical Embedding of Single-Channel Electroencephalogram for Artifact Subspace Reconstruction
                </a>
                <div className="pub-meta">
                  D Hazarika, KN Vishnu, R Ransing, CN Gupta — <i>Sensors 2024, 24, 6734</i>
                </div>
              </li>
              <li className="pub-item">
                <a href="https://doi.org/10.3390/engproc2023055046" target="_blank" rel="noopener noreferrer">
                  CameraEEG: Synchronous Recording of Electroencephalogram and Video Data for Neuroergonomics Applications
                </a>
                <div className="pub-meta">
                  D Hazarika, S Madhavan, CN Gupta — <i> Eng. Proc. 2023, 55, 46</i>
                </div>
              </li>
              <li className="pub-item">
                <a href="https://ieeexplore.ieee.org/abstract/document/10079412" target="_blank" rel="noopener noreferrer">
                  Smartphone-Based Natural Environment Electroencephalogram Experimentation-Opportunities and Challenges
                </a>
                <div className="pub-meta">
                  D Hazarika, S Chanda, CN Gupta — <i>2022 IEEE-EMBS Conference on Biomedical Engineering and Sciences (IECBES)</i>
                </div>
              </li>
            </ul>
            <br></br>
            <h3>Further EEG Research</h3>
            <p>
              Other than this, research into novel cognitive paradigms using brain computer interfaces and dynamic audio visual stimuli for educational neuroscience applications, are being conducted. These include diverse fields such as Neurocinematics and Dynamic EEG based reponse to music.
            </p>
          </div>
        );
      case 'smri':
        return (
          <div className="research-content">
            <h3>sMRI Applications</h3>
            <p>
              Parkinson’s disease (PD) is the second-most common neurodegenerative disorder in the world and is often characterized by brain tissue atrophy. Its heterogeneity in clinical symptoms is clearly visible by its phenotypic representation such as overlapping motor and non-motor dysfunctions. Structural MRI (sMRI) is a medical imaging technique used to visualize the internal structures of the human body, primarily the brain. It is a non-invasive method that does not use ionizing radiation. sMRI is widely employed in research and clinical settings, offering detailed anatomical information and high contrast between grey and white matter of brain. Few problems related to PD studied by us using sMRI are below:
            </p>
            <br></br>
            <h3>Subtyping</h3>
            <p>Subtyping of Parkinson's disease (PD) is the process of dividing PD into subgroups based on shared characteristics to help with clinical care and research. Although several attempts have been made in the past to address PD heterogeneity, a stable subtyping approach to categorize the patients, is the need of the hour. Recently, attempts are being made to find subtypes within Parkinson’s disease using structural magnetic resonance imaging (sMRI) and data driven algorithms. We analysed brain grey matter information to find distinct subtypes and correlated them with the clinical features. Our study showed the deciphered subtypes had differences in connectivity pattern. Graph-theory based network analysis was used to obtain connectivity metrics. Three subtypes were found with differences in frontal and temporal gyrus regions of brain. Inter-subtype differences in network metrics were also observed. Thus, successful subtyping will not only help in clinical analysis, but also be useful in precision treatment.</p>
            <ul className="pub-list">
              <li className="pub-item">
                <a href="https://doi.org/10.1088/2057-1976/ad1e77" target="_blank" rel="noopener noreferrer">
                  Brain connectivity for subtypes of parkinson’s disease using structural MRI
                </a>
                <div className="pub-meta">
                  T Samantaray, J Saini, CN Gupta — <i> Biomed. Phys. Eng. Express 10 025012; 2024</i>
                </div>
              </li>
            </ul>
            <br></br>
            <h3>UBNIN and Modified UBNIN Algorithms</h3>
            <p>Individuals, whether healthy or disease, have a specific pattern of brain network due to interindividual differences. So, now the question is- Can a brain network be encoded? To address this, novel algorithms called Unique Brain Network Identification Number (UBNIN) and Modified UBNIN were proposed for encoding brain networks of an individual subject. Each subject’s brain volume was parcellated from structural MRI scans and individual adjacency matrix was constructed. UBNIN was highly weighted on the last node while another variant, called Modified-UBNIN (UBNIN-MT,MN) algorithm was highly weighted on the node with the highest network degree (i.e., connections). From initial results we observed that the numerical representation of these algorithms seems to be distinct for each individuals brain network. These algorithms may be implemented as neural signature of an individual’s unique brain connectivity, thereby useful for brainprinting applications.</p>
            <ul className="pub-list">
              <li className="pub-item">
                <a href="https://doi.org/10.3390/brainsci14050424" target="_blank" rel="noopener noreferrer">
                  Introspection of UBNIN and Modified-UBNIN Algorithms for Structural MRI. Reply to Kelly et al. A Comparison of Brain-State Representations of Binary Neuroimaging Connectivity Data. Comment on “Samantaray et al. Unique Brain Network Identification Number for Parkinson’s and Healthy Individuals Using Structural MRI. Brain Sci. 2023, 13, 1297
                </a>
                <div className="pub-meta">
                  T Samantaray, M Anand, J Saini, CN Gupta — <i> Brain Sciences. 2024; 14(5):424</i>
                </div>
              </li>
              <li className="pub-item">
                <a href="https://www.mdpi.com/2076-3425/13/9/1297" target="_blank" rel="noopener noreferrer">
                  Unique Brain Network Identification Number for Parkinson’s and Healthy Individuals Using Structural MRI
                </a>
                <div className="pub-meta">
                  T Samantaray, U Gupta, J Saini, CN Gupta — <i> Brain Sciences. 2023</i>
                </div>
              </li>
            </ul>
            <br></br>
            <h3>Brain Age prediction</h3>
            <p>Unlike chronological age, which measures a person’s age in years since birth, the biological age of the brain is estimated using its morphological, functional, or molecular properties of brain. Brain age is a widely employed metric to assess and quantify an individual’s brain health. Brain ageing is linked to cognitive decline and an increased risk of neurodegenerative diseases. The difference between the estimated brain age and the chronological age is called the brain age gap. We are using deep learning methods to decipher brain age of an individual from grey and white matter regions of sMRI.</p>
          </div>
        );
      case 'media':
        return (
          <div className="research-content">
            <h3>Research in Media</h3>
            <p>
              Our lab's findings have been featured in various news articles, academic blogs, and science communication platforms.
              This section highlights our public engagement and outreach efforts to communicate science effectively.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="page research-page">
      <h1>Research Areas</h1>

      <div className="tab-container">
        <button
          className={`tab-button ${activeTab === 'eeg' ? 'active' : ''}`}
          onClick={() => setActiveTab('eeg')}
        >
          EEG-Based Applications
        </button>
        <button
          className={`tab-button ${activeTab === 'smri' ? 'active' : ''}`}
          onClick={() => setActiveTab('smri')}
        >
          sMRI-Based Applications
        </button>
        <button
          className={`tab-button ${activeTab === 'media' ? 'active' : ''}`}
          onClick={() => setActiveTab('media')}
        >
          Research in Media
        </button>
      </div>

      <div className="tab-content">
        {renderContent()}
      </div>
    </div>
  );
}

export default Research;