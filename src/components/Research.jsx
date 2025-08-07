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
            <h3>sMRI-Based Applications</h3>
            <p>
              Structural MRI data is used to study anatomical changes in the brain related to neurological disorders.
              We employ voxel-based morphometry (VBM), machine learning, and image processing to uncover biomarkers
              and structural correlates of behavior and cognition.
            </p>
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