import { useParams } from "react-router-dom"
import "./FilmPage.css"
import { NowInTheatersCarousel } from "../../shared/NowInTheatersComponent/NowInTheatersCarousel"
import { useFilmById } from "../../hooks/useFilmById"
import { IFilm } from "../../shared/OneFilmInCatalog/OneFilmInCatalog"

import { useRecentlyViewedFilmsContext } from "../../context/recentlyViewedFilmsContext"
import { useEffect } from "react"

interface IFilmInfo{
    ageRestriction: string | undefined,
    year: number | undefined,
    rating: number | undefined,
    baseLanguage: string | undefined,
    homeCountry: string | undefined,
    genres: string[] | undefined,
    actors: string[] | undefined,
    description: string | undefined,
}

interface IFilmInfoNames{
    ageRestriction: string | undefined,
    year: string | undefined,
    rating: string | undefined,
    baseLanguage: string | undefined,
    homeCountry: string | undefined,
    genres: string | undefined,
    actors: string | undefined,
    description: string | undefined,
}

interface IPhotos{
    photo1: string,
    photo2: string,
    photo3: string,
    photo4: string,
}

export function FilmPage() {
    const params = useParams()
    const {film, isLoading, error} = useFilmById(Number(params.id))

    const {recentlyViewedFilms, addFilm, removeFilm, isInContext} = useRecentlyViewedFilmsContext()

    useEffect(() => {
        if (film !== undefined) {
            addFilm(film)
        }

    }, [film])

    const filmInfo: IFilmInfo = {
        ageRestriction: film?.ageRestriction,
        year: film?.year,
        rating: film?.rating,
        baseLanguage: film?.baseLanguage,
        homeCountry: film?.homeCountry,
        genres: film?.genres,
        actors: film?.actors,
        description: film?.description
    }

    const namesOfInfo: IFilmInfoNames = {
        ageRestriction: "Вікове обмеження",
        year: "Рік виходу",
        rating: "Рейтинг",
        baseLanguage: "Мова оригіналу",
        homeCountry: "Країна",
        genres: "Жанри",
        actors: "Актори",
        description: "Опис"
    }

    // const photosOfFilm: IPhotos = {
    //     photo1: 
    // }

    return (
        <div id="FilmList">
            <div id="filmInfoContainer">
                <img id="filmImage" src={film && film.src} alt="" />

                <div id="filmInfoDiv">
                    <div id="nameOfFilmDiv">
                        <h2>{film && film.name}</h2>
                    </div>
                    <table id="filmInfoDivColumns">
                        <tbody>
                            {Object.keys(filmInfo).map((key, index) => {
                                const typedKey = key as keyof IFilmInfo
                                const typedKeyNames = key as keyof IFilmInfoNames
                                const value = filmInfo[typedKey]
                                let tempString = ""
                                Array.isArray(value) && value.forEach((data) => {
                                    tempString = tempString + data + ", "
                                })
                                tempString = tempString.slice(0, -2)
                                
                                return <tr key={key} className={index % 2 !== 0 ? "withBg" : undefined}>
                                    <th className="infoName">
                                        {namesOfInfo[typedKeyNames]}:
                                    </th>
                                    <td className="infoData">
                                        {
                                            Array.isArray(value)
                                            ? tempString
                                            : value
                                        }
                                    </td>
                                    
                                </tr>
                                
                            })}
                        </tbody>

                        
                    </table>
                </div>
            </div>
            

            <div id="photosOfFilmContainer">
                <h2 id="photosText">Photos</h2>
                <div id="photosOfFilm">
                    {Object.keys(film ? film : {}).map((key) => {
                        const typedKey = key as keyof IFilm
                        const value = film ? film[typedKey] : ""
                        
                        return key.includes("photo") && typeof value === "string"
                        ? <img id="photoFromFilm" key={value} src={value} alt=""/>
                        : undefined
                    })}
                </div>
            </div>

           
            <div id="reviewsDiv">
                <div id="reviewsTextDiv">
                    <h2 id="reviewsText">Reviews</h2>
                </div>
                <div id="reviews">
                    {film && film["reviews"].reverse().map((review, index) => {
                        return <div className="review" key={`${review.text}+${review.mark}+${review.user.src}`}>
                            <div className="profileInfo">
                                <img className="userImage" src={review.user.src} alt="" />
                                <h6>{review.user.name}</h6>
                            </div>
                            <div className="textOfReview">{review.text}</div>
                            <div className="markOfReview">{review.mark}/10</div>

                        </div>
                    })}
                </div>
                
            </div>
        </div>
    )
}