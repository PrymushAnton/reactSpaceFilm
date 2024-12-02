import { ReactNode, useState } from "react"
import "./static/css/ComingSoonCarousel.css"


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


export function ComingSoonCarousel(){
    const [currentSlide, setCurrentSlide] = useState(0)

    function prevSlide(){
        if (currentSlide == 0){
            setCurrentSlide(3)
        } else {
            setCurrentSlide(currentSlide - 1)
        }
    }

    function nextSlide(){
        if (currentSlide == 3){
            setCurrentSlide(0)
        } else {
            setCurrentSlide(currentSlide + 1)
        }
    }

    return (
        <div className="carouselDiv">
            <div className="slides" style={{transform: `translateX(-${currentSlide*100}%)`}}>
                {slides.map((slide, index) => (
                    <div key={index} className="slide">
                        <img className={currentSlide == index ? "bgImageComingSoon" : "bgImageComingSoon bgImageComingSoon-hidden"} src={slide.background} alt="" />
                        <img className={currentSlide == index ? "coverImageComingSoon" : "coverImageComingSoon coverImageComingSoon-hidden"} src={slide.cover}  alt="" />
                        <h3 className={currentSlide == index ? "titleComingSoon" : "titleComingSoon titleComingSoon-hidden"}>{slide.title}</h3>
                        <h4 className={currentSlide == index ? "descriptionComingSoon" : "descriptionComingSoon descriptionComingSoon-hidden"}>{slide.description}</h4>
                    </div>
                ))}
            </div>
            <button onClick={prevSlide} id="buttonPrevComingSoon">❮</button>
            <button onClick={nextSlide} id="buttonNextComingSoon">❯</button>
            <div className="pagesComingSoon">
                {slides.map((slide, index)=>(
                    <button onClick={() => {setCurrentSlide(index)}} key={index} className={currentSlide == index ? "pageComingSoon" : "pageComingSoon pageComingSoon-inactive"}></button>
                ))}
            </div>
        </div>

    )
}
