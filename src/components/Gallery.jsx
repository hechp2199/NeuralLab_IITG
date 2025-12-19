import { useState } from 'react';
import './css/Gallery.css';

const galleryItems = [
    {
        image: "/images/gallery/raspberry.jpeg",
        event: "Vishnu and Sumit presenting their Raspberry pi demo to Bioinstrumentation and Control coursework students",
        date: "19 March 2025"
    },
    {
        image: "/images/gallery/BRICSFeb2025.jpeg",
        event: "Doli, Vishnu and Shivani research works recognized at BRICS entrepreneur summit 2025 held at IIT Guwahati",
        date: "7 February 2025"
    },
    {
        image: "/images/gallery/tanmayee-farewell.jpg",
        event: "Celebrating Tanmayee's Farewell Wishing her great success ahead!",
        date: "25 April 2024"
    },
    {
        image: "/images/gallery/tanmayee-farewell-2.jpg",
        event: "Celebrating Tanmayee's incredible journey from student to scholar",
        date: "25 April 2024"
    },
    {
        image: "/images/gallery/iiser-pune.JPG",
        event: "PhD Scholars having brain fun at IISER Pune",
        date: "July 2024"
    },
    {
        image: "/images/gallery/Teachers day23.jpg",
        event: "Teacher's day celebration",
        date: "5 September 2023"
    },
    {
        image: "/images/gallery/iBrain Talk 2023.JPG",
        event: "iBrain talk, Dept of HSS, IIT Guwahati",
        date: "2023"
    },
    {
        image: "/images/gallery/CCDs.jpg",
        event: "Treat at CCD, IITG",
        date: "September 2023"
    },
    {
        image: "/images/gallery/Biodesign Hackathon 2023.jpeg",
        event: "Mr. Shiva and Mr. Suraj won 'Best Life Saving Model' at Biodesign Hackathon for Innovation in Medical Device and Systems",
        date: "September 2023"
    },
    {
        image: "/images/gallery/Ihackathon2023.jpg",
        event: "Mr. Shiva and Mr. Suraj participating in Ihackathon",
        date: "September 2023"
    },
    {
        image: "/images/gallery/UDGAM.jpg",
        event: "At UDGAM Startup poster presentation",
        date: "January 2023"
    },
    {
        image: "/images/gallery/IEEE_SSCI 2022.jpg",
        event: "IEEE SSCI 2022 remote presentation",
        date: "5 December 2022"
    },
    {
        image: "/images/gallery/Teachers day 22.jpg",
        event: "Teacher's day celebration",
        date: "5 September 2022"
    },
    {
        image: "/images/gallery/BIT-MESRA.jpg",
        event: "Talk at BIT Mesra Ranchi",
        date: "23 August 2022"
    },
    {
        image: "/images/gallery/NERC_Stall.jpg",
        event: "Ms.Tanmayee and Ms.Doli explaining the research work conducted in our lab at NERC 2022",
        date: "20 May 2022"
    },
    {
        image: "/images/gallery/NERC_Poster.jpg",
        event: "Poster at NERC 2022",
        date: "May 2022"
    },
    {
        image: "/images/gallery/Srihari_sendoff.jpg",
        event: "On the occasion of Mr. Srihari Madhavan's sendoff",
        date: "May 2021"
    },
    {
        image: "/images/gallery/srihari.jpg",
        event: "Srihari at Research Conclave 2019",
        date: "15 March 2019"
    },
    {
        image: "/images/gallery/p300.jpg",
        event: "P300 goes live!",
        date: "15 March 2019"
    },
    {
        image: "/images/gallery/interaction.jpg",
        event: "Inspiring young minds- Lab team interacting with young motivated students",
        date: "15 March 2019"
    },
    {
        image: "/images/gallery/gpu.jpg",
        event: "Lab's first GPU- All hail this marvel of parallel computing!",
        date: "13 November 2018"
    }
];

function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);

    const openImage = (item) => {
        setSelectedImage(item);
    };

    const closeImage = () => {
        setSelectedImage(null);
    };

    return (
        <div className="page">
            <h1>Photo Gallery</h1>
            <div className="gallery-grid">
                {galleryItems.map((item, index) => (
                    <div className="gallery-card" key={index} onClick={() => openImage(item)}>
                        <img src={item.image} alt={item.event} />
                        <div className="gallery-info">
                            <h3>{item.event}</h3>
                            <p>{item.date}</p>
                        </div>
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="lightbox" onClick={closeImage}>
                    <span className="close">&times;</span>
                    <img className="lightbox-image" src={selectedImage.image} alt={selectedImage.event} />
                    <div className="lightbox-caption">
                        <h2>{selectedImage.event}</h2>
                        <p>{selectedImage.date}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Gallery;