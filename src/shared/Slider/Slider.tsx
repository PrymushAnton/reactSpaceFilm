import "./Slider.css"
import { ReactNode, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useRecentlyViewedFilmsContext } from '../../context/recentlyViewedFilmsContext';





export function Slider(){
    const {recentlyViewedFilms, addFilm, removeFilm, isInContext} = useRecentlyViewedFilmsContext()

    // const firstPart = []
    // recentlyViewedFilms.forEach((film, index) => {
    //     index % 6
    //     return 
    // })

    return (
        <Carousel className={recentlyViewedFilms.length > 0 ? 'carouselRecentlyViewedFilms' : "carouselRecentlyViewedFilmsHidden"}>
            <Carousel.Item>
                {recentlyViewedFilms.map((film, index) => 
                    (index > 6)
                    ? undefined
                    :  <div>
                        <img src={film.src} alt="" id="imgFilm"/>
                        <h5 id="filmTitle">{film.name}</h5>
                        <h6 id="ratingNowInTheaters">Rating: {film.rating}</h6>
                        <p id="descriptionFilm">{film.description.slice(0, 50)}</p>
                    </div>
                )}
            </Carousel.Item>

            {
                recentlyViewedFilms.length > 6
                && <Carousel.Item>
                {recentlyViewedFilms.map((film, index) => 
                    (index > 6)
                    ? <div>
                        <img src={film.src} alt="" />
                        <h5>{film.name}</h5>
                        <h6>{film.rating}</h6>
                        <p>{film.description.slice(0, 50)}</p>
                    </div>
                    : undefined
                )}
            </Carousel.Item>
            }
            
        </Carousel>
    )
}