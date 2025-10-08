import './css/Team.css';

const collabData = {
    "collab": [
        {
            name: "Dr.Souptick Chanda",
            position: "Dept of BSBE, IITG",
            image: "/images/collaborations/souptik.jpg",
            profile: "https://www.iitg.ac.in/biotech/faculty_profile.php?fname=Souptick&lname=Chanda&iitg=1106&mail=csouptick@iitg.ac.in"
        },
        {
            name: "Prof.Jitender Saini",
            position: "NIMHANS Bangalore",
            image: "/images/collaborations/dr-saini-2.jpg",
            profile: "https://www.musiccognitionlab.org/in-house-collaborators.html"
        },
        {
            name: "Dr.Ramdas Ransing",
            position: "AIIMS Guwahati",
            image: "/images/collaborations/ransing.jpg",
            profile: "https://www.researchgate.net/profile/Ramdas-Ransing"
        },
        {
            name: "Dr.Budhaditya Hazra",
            position: "Dept of Civil Engineering, IITG",
            image: "/images/collaborations/b_hazra.jpg",
            profile: "https://www.iitg.ac.in/budhaditya.hazra/homepage/index.html"
        },
        {
            name: "Prof. Shyamanta Hazrika",
            position: "Dept of Mechanical Engineering, IITG",
            image: "/images/collaborations/shyamanta.jpg",
            profile: "https://iitg.ac.in/mech/faculty/smhazarika/"
        },
        {
            name: "Dr.Bidisha Som",
            position: "Dept of HSS, IITG",
            image: "/images/collaborations/bidisha.jpg",
            profile: "https://www.iitg.ac.in/hss/faculty_page_profile.php?name=MHREcWxiVnh5MEZJUVMrcENmcCsvdz09"
        },
    ]
};

function Collaborations() {
    return (
        <div className="page">
            <h1>Our Collaborators</h1>
            {Object.keys(collabData).map(category => (
                <div key={category}>
                    <div className="team-grid">
                        {collabData[category].map((member, index) => (
                            <div className="team-card" key={index}>
                                <img src={member.image} alt={member.name} />
                                <h2>{member.name}</h2>
                                <h4>{member.position}</h4>
                                <h5 style={{color:'#0066cc'}}><a href={member.profile}>Profile</a></h5>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Collaborations;