import "./MainList.css"
import { CarouselCelebrities } from "../../shared/CarouselCelebrities/CarouselCelebrities"
import { NewFilms } from "../../shared/NewFilms/NewFilms"
import { NowInTheatersCarousel } from "../../shared/NowInTheatersComponent/NowInTheatersCarousel"
import { RecentNewsSlider } from "../../shared/RecentNewsSlider/RecentNewsSlider"
import { useRecentlyViewedFilmsContext } from "../../context/recentlyViewedFilmsContext"
import { useEffect } from "react"
import { Link } from "react-router-dom"


export function MainList(){
    const {recentlyViewedFilms, recommendedFilms, formRecomendations} = useRecentlyViewedFilmsContext()

    useEffect(() => {
        formRecomendations()
    }, [])

    return (
        <div id="MainList">
            <NewFilms></NewFilms>
            {/* {
                recommendedFilms.length > 0 &&
                <div id="recommendedFilms">
                    <div id="titleRecommendations">
                        <h2 id="recommendedFilms">Recommended films</h2>
                    </div>
                    <div id="recommendedFilmsContent">
                        {recommendedFilms.map((film) => {
                            return <Link key={film.id} to={`film/${film.id}`} id="recommendedFilmCard">
                                <img src={film.src} alt="" id="imgFilm"/>
                                <h5 id="filmTitle">{film.name}</h5>
                                <h6 id="ratingNowInTheaters">Rating: {film.rating}</h6>
                                <p id="descriptionFilm">{film.description.length > 50 ? film.description.slice(0, 50) + "..." : film.description}</p>
                            </Link>
                        })}
                    </div>
                    
                </div>
            } */}
            
            {/* <NowInTheatersCarousel span={5}></NowInTheatersCarousel> */}
            <CarouselCelebrities></CarouselCelebrities>
            {/* <RecentNewsSlider></RecentNewsSlider> */}
        </div>
    )
}