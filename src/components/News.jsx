import "./css/News.css";

function News() {
  const newsList = [
    {
      date: "2025",
      content: "Lab welcomes new members Mr. Hari Prasath, Mr. Deepak, Ms. Harshitha and Ms. Anjali",
    },
    {
      date:"2025",
      content:"Congratulations to Suraj for getting his algorithm SAGEFusionNet to predict BRAINAGE published in Brain Sciences journal",
      link:"https://doi.org/10.3390/brainsci15070752"
    },
    {
      date: "2025",
      content: "Shivani and Perween bag placement offers from reputed Deloitte as Data Analyst"
    },
    {
      date: "Feb 2025",
      content: "Doli, Vishnu and Shivani's research works recognized at BRICS entrepreneur summit 2025 held at IIT Guwahati"
    },
    {
      date: "",
      content: "Dr. Navin joins Editorial Board of PlosONe and BMC Neuroscience journals",
      link: "https://journals.plos.org/plosone/static/editorial-board?ae_name=Cota+Navin+Gupta",
      link2: "https://bmcneurosci.biomedcentral.com/about/editorial-board"
    },
    {
      date:"2024",
      content:"Congratulations to Doli on the publication of her research paper titled -Dynamical Embedding of Single-Channel Electroencephalogram for Artifact Subspace Reconstruction",
      link: "https://doi.org/10.3390/s24206734"
    },
    {
      date: "2024",
      content: "Doli and Shiva selected for Computational Neuroscience Summer School at IISER Pune",
      link: "https://campiiser.com/"
    },
    {
      date: "",
      content: "Tanmayee defends her PhD thesis and bags a Postdoc position at Karolinska Institutet, Sweden",
      link: "https://ki.se/personer/tanmayee-samantaray"
    },
    {
      date: "",
      content: "Shivani bags internship at TCS Innovation labs, Pune while Afshan Perween completed internship at Onelogica, Greater Noida"
    },
    {
      date: "",
      content: "Dr. Navin Gupta delivered a talk at iBrain Initiative, Dept. of HSS, IITG",
      link: "https://www.youtube.com/watch?v=H2dbPJDMqPg"
    },
    {
      date: "Feb 2023",
      content: "Vishnu, Nanaki Singh, Doli from our lab participated in Epilepsy Challenge (Placed second in world among 12 Teams) at ICASSP 2023",
      link: "https://biomedepi.github.io/seizure_detection_challenge/"
    },
    {
      date: "",
      content: "Congratulations to Ms. Tanmayee for getting the crux of her PhD thesis work published in Brain Science Journal",
      link: "https://www.mdpi.com/2076-3425/13/9/1297"
    },
    {
      date: "",
      content: "Congratulations to Mr. Dasari Shivakumar and Mr. Suraj for winning Best Life Saving Model award in Biodesign Hackthon for Innovation in Medical Device and Systems, ICASSP 2023"
    },
    {
      date: "2023",
      content: "Congratulations to Mr. Aditya and Ms. Nanaki on completing their MTech and storming into IISc Bangalore and IIT Madras respectively"
    },
    {
      date: "Feb 2023",
      content: "Two students from Neural Engineering lab (Indian Institute of Technology Guwahati) teamed with two members from BIT-MESRA University to participate in Alzheimer’s Challenge at ICASSP 2023",
      link: "https://luzs.gitlab.io/madress-2023/ranking.html"
    },
    {
      date: "Feb 2023",
      content: "A team of students from Neural Engineering lab (Team name: IITGneural) participated in the AuditoryEEG Challenge at ICASSP 2023",
      link: "https://exporl.github.io/auditory-eeg-challenge-2023/task1/leaderboard/"
    },
    {
      date: "Dec 2022",
      content: "Team of two students (Team ID: CIS-SH-015) from Neural Engineering lab participated in CIS Hackathon Challenge and presented the ongoing Subgrouping Parkinson work from the lab at IEEE SSCI Conference 2022",
      link: "https://sites.google.com/view/cishackathon-2022/final-contest"
    },
    {
      date: "2021",
      content: "Team of two students from Neural Engineering lab participated in EEG Mental workload Challenge at Neuroergonomics Conference 2021 (Ranking 6th)",
      link: "https://www.neuroergonomicsconference.um.ifi.lmu.de/pbci/"
    },
    {
      date: "2021",
      content: "Rekshand Gehlot (Completed M. Tech and now Systems Engineer at Tata Consultancy Services, India)"
    },
    {
      date: "2021",
      content: "Abhishek Siroha (Completed M. Tech and now Associate Product Manager @ nference, India)"
    },
    {
      date: "2021",
      content: "Arup Kumar Pal (Completed M. Tech and now Data Analytics Engineer at Citibank India)"
    }
  ];

  return (
    <div className="news-page">
      <h1>Lab Updates</h1>
      <ul className="news-list">
        {newsList.map((news, index) => (
          <li key={index} className="news-item">
            <span className="news-date">{news.date}</span>
            <p className="news-content">
              {news.content}{" "}
              {news.link && (
                <a
                  href={news.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="news-link"
                >
                  [Link]
                </a>
              )}
              {news.link2 && (
                <a
                  href={news.link2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="news-link"
                >
                  [Link2]
                </a>
              )}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default News;
