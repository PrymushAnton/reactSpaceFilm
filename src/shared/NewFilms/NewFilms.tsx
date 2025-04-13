import { useState } from "react";
import "./NewFilms.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { useFilmsForComingSoon } from "../../hooks/useFilmsForComingSoon";
import { Link } from "react-router-dom";

export function NewFilms() {

    const {films, isLoading, error} = useFilmsForComingSoon()

    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="comingSoonSlider">
            <div className="comingSoonText">
                <div id="frame21">
                    <h2 id="comingSoon">New films</h2>
                    <div id="line"></div>
                </div>
            </div>
            <div className="comingSoonMain">
                <Carousel
                    id="carousel"
                    interval={null}
                    onSlide={(eventKey) => setCurrentIndex(eventKey)}
                    nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}
                    prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}
                >
                    {films?.map((film, index) => (
                        
                            <Carousel.Item key={index} className="carousel-slide">
                                <Link to={`/film/${film.id}`} key={index} className="slide1">
                                    <img src={film.photo1} alt={`${film.name} background`} className="background-img" />
                                    <div className="text-overlay">
                                        <img src={film.src} alt={film.name} className="cover-img" />
                                        <div className="text-container">
                                            <h3 className="title">{film.name}</h3>
                                            <p className="desc">{film.description}</p>
                                        </div>
                                        
                                    </div>
                                    
                                </Link>
                            </Carousel.Item>
                    ))}
                </Carousel>
                <div id="up-next">
                    <div className="up-next-container">
                        <h2 id="up-next-text">Up next</h2>

                        {films?.map((film, index) => {
                            return (
                                index > currentIndex
                                && <Link to={`/film/${film.id}`} className="up-next-item" key={index}>
                                        <img src={film.src} alt={film.name} className="up-next-cover" />
                                        <div className="up-next-info">
                                            <h4>{film.name}</h4>
                                            <p>{film.description.length > 100 ? film.description.slice(0, 100) + "..." : film.description.slice(0, 100)}</p>
                                    </div>
                                </Link>
                            )
                        })}

                        {films?.map((film, index) => {
                            return (
                                index < currentIndex
                                && <Link to={`/film/${film.id}`} className="up-next-item" key={index}>
                                        <img src={film.src} alt={film.name} className="up-next-cover" />
                                        <div className="up-next-info">
                                            <h4>{film.name}</h4>
                                            <p>{film.description.length > 100 ? film.description.slice(0, 100) + "..." : film.description.slice(0, 100)}</p>
                                    </div>
                                </Link>
                            )
                        })}
                </div>
            </div>
            </div>
        </div>
    );
}