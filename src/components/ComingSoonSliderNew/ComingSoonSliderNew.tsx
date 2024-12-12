import React, { useState } from "react";
import "./ComingSoonSliderNew.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

export function ComingSoonSliderNew() {
    const slides = [
        {
            background: "https://i.ytimg.com/vi/PvI5YXk6Mjs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDh8ojFgQuGDbnOEGCf9xQ4_BXBPg",
            title: "Mission: Impossible – The Final Reckoning",
            description: "Watch the First Teaser",
            cover: "https://upload.wikimedia.org/wikipedia/en/1/1f/Mission_Impossible_%E2%80%93_The_Final_Reckoning_Poster.jpg",
        },
        {
            background: "https://m.media-amazon.com/images/M/MV5BZGIxZWQ0YWUtMzg1ZS00YzAwLWE2ZTUtZmMyOWU5MjBhZGQ5XkEyXkFqcGdeQWpnYW1i._V1_QL75_UX500_CR0,0,500,281_.jpg",
            title: "What If…? Season 3",
            description: "Watch the Official Trailer",
            cover: "https://upload.wikimedia.org/wikipedia/en/b/ba/What_If...%3F_season_3_poster.jpeg",
        },
        {
            background: "https://i.ytimg.com/vi/s0eDzl-dvk4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCzrlDfODuZM6uRCWcFunS-atx1oA",
            title: "Captain America: Brave New World",
            description: "Watch the New Trailer from D23 Brazil",
            cover: "https://m.media-amazon.com/images/M/MV5BNjI4MDRiNmItZmI2OC00MWY0LTk4NjQtODIxNzQzOGU3NTE0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        },
        {
            background: "https://m.media-amazon.com/images/M/MV5BYjIyYjkwNTUtMzI3OS00MTcyLWE2OTItNzFhNmEyNmNhODhlXkEyXkFqcGdeQXZ3ZXNsZXk@._V1_.jpg",
            title: "Bridget Jones: Mad About the Boy",
            description: "Renée Zellweger Returns",
            cover: "https://m.media-amazon.com/images/M/MV5BOTY3NjI5YWMtZTEzMS00MDY3LWIzMDEtMTVhOGJkZWYyY2MxXkEyXkFqcGc@._V1_.jpg",
        },
    ];

const [currentIndex, setCurrentIndex] = useState(0);

    const handleSlide = (selectedIndex:number) => {
        setCurrentIndex(selectedIndex);
    };  

    return (
        <div className="comingSoonSlider">
            <div className="comingSoonText">
                <div id="frame21">
                    <h2 id="comingSoon">Coming soon</h2>
                    <div id="line"></div>
                </div>
            </div>
            <div className="comingSoonMain">
                <Carousel
                    id="carousel"
                    interval={null}
                    onSlide={(eventKey) => handleSlide(eventKey)}
                    nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}
                    prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}
                >
                    {slides.map((slide, index) => (
                        <Carousel.Item key={index} className="carousel-slide">
                            <div className="slide1">
                                <img src={slide.background} alt={`${slide.title} background`} className="background-img" />
                                <div className="text-overlay">
                                    <h3 className="title">{slide.title}</h3>
                                    <p className="desc">{slide.description}</p>
                                </div>
                                <div className="cover-container">
                                    <img src={slide.cover} alt={slide.title} className="cover-img" />
                                </div>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
                <div id="up-next">
                    <div className="up-next-container">
                        <h2 id="up-next-text">Up next</h2>
                        {slides.filter((_, index) => index != currentIndex).map((slide, index) => (
                            <div className="up-next-item" key={index}>
                                <img src={slide.cover} alt={slide.title} className="up-next-cover" />
                                <div className="up-next-info">
                                    <h4>{slide.title}</h4>
                                    <p>{slide.description}</p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
            </div>
        </div>
    );
}