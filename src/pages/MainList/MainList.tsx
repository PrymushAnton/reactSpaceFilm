import { CarouselCelebrities } from "../../shared/CarouselCelebrities/CarouselCelebrities"
import { ComingSoonSliderNew } from "../../shared/ComingSoonSliderNew/ComingSoonSliderNew"
import { NowInTheatersCarousel } from "../../shared/NowInTheatersComponent/NowInTheatersCarousel"
import { RecentNewsSlider } from "../../shared/RecentNewsSlider/RecentNewsSlider"
import { Slider } from "../../shared/Slider/Slider"
import "./MainList.css"
// import { AuthModal } from "../../shared/AuthRegModal/AuthRegModal"
// import { RegModal } from "../../shared/AuthRegModal/AuthRegModal"


import { useRecentlyViewedFilmsContext } from "../../context/recentlyViewedFilmsContext"
import { useEffect } from "react"
import { Link } from "react-router-dom"
// import { AuthModal } from "../../shared/AuthRegModal/AuthRegModal"
// import { RegModal } from "../../shared/AuthRegModal/AuthRegModal"




export function MainList(){
    const {recentlyViewedFilms, recommendedFilms, formRecomendations} = useRecentlyViewedFilmsContext()

    useEffect(() => {
        formRecomendations()
    }, [])

    return (
        <div id="MainList">
            {/* <AuthModal></AuthModal> */}
            {/* <RegModal></RegModal> */}
            <ComingSoonSliderNew></ComingSoonSliderNew>
            {/* <Slider></Slider> */}
            {
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
            }
            
            <NowInTheatersCarousel span={5}></NowInTheatersCarousel>
            <CarouselCelebrities></CarouselCelebrities>
            <RecentNewsSlider></RecentNewsSlider>
        </div>
    )
}