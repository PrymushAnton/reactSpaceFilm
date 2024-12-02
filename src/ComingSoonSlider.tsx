import React, { useState } from "react";
import "./static/css/ComingSoonSlider.css";

export function ComingSoonSlider() {
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

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    return (
        <div className="comingSoonSlider">
            <div className="comingSoonText">
                <div id="frame21">
                    <h2 id="comingSoon">Coming soon</h2>
                    <div id="line"></div>
                </div>
            </div>
            <div className="slider-container">
                
                <div
                    className="slides"
                    style={{
                        transform: `translateX(-${currentSlide * 100}%)`,
                    }}>
                {slides.map((slide, index) => (
                    <div
                        className="slide1"
                        key={index}
                        style={{
                        backgroundImage: `url(${slide.background})`,
                    }}>
                        <div className="text-overlay">
                            <h3>{slide.title}</h3>
                            <p>{slide.description}</p>
                        </div>
                        <div className="cover-container">
                            <img src={slide.cover} alt={slide.title} className="cover-img" />
                        </div>
                    </div>
                ))}
                </div>
                <div className="navigation">
                    <button onClick={prevSlide} className="nav-btn">❮</button>
                    <button onClick={nextSlide} className="nav-btn">❯</button>
                </div>
            </div>
        </div>
        
    );
}   
