import { Link, useParams } from "react-router-dom"
import "./FilmPage.css"
import { useFilmById } from "../../hooks/useFilmById"
import { IFilm } from "../../shared/OneFilmInCatalog/OneFilmInCatalog"

import { useRecentlyViewedFilmsContext } from "../../context/recentlyViewedFilmsContext"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useUserContext } from "../../context/userContext"

import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { useIsFavourite } from "../../hooks/useIsFavourite"

interface IActor{
    name: string
    id: number
}

interface IFilmInfo{
    ageRestriction: string | undefined,
    year: number | undefined,
    rating: number | undefined,
    baseLanguage: string | undefined,
    homeCountry: string | undefined,
    genres: string[] | undefined,
    actors: IActor[] | string[] | undefined,
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

interface IReviewData {
    name: string
    text: string
    mark: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
}

export function FilmPage() {
    const params = useParams()
    const {film, isLoading, error} = useFilmById(Number(params.id))
    const {getToken, isAuthenticated} = useUserContext()
    const {register, formState, handleSubmit} = useForm<IReviewData>({
        mode: "onSubmit"
    })

    const [isFavourite, setIsFavourite] = useState<boolean>(false)

    const {result, isLoading: isLoadingIsFavourite, error: errorIsFavourite} = useIsFavourite(Number(params.id))

    useEffect(() => {
        setIsFavourite(result)
    }, [result])


    async function sendIsFavourite() {
        try{
            const token = getToken()
            if (token === "error") return

            const response = await fetch(`http://localhost:3001/api/user/` + (isFavourite ? "remove-favourite-film" : "add-favourite-film") , { 
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({filmId: params.id})
            })
            await response.json()
        } catch (error) {
        }
    }


    const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
    const [filmState, setFilmState] = useState<IFilm>()

    const {recentlyViewedFilms, addFilm, removeFilm, isInContext} = useRecentlyViewedFilmsContext()

    useEffect(() => {
        if (isSubmitted) {
            setIsSubmitted(false)
        }
    }, [isSubmitted])

    useEffect(() => {
        if (film !== undefined) {
            addFilm(film)
        }
        setFilmState(film)
    }, [film])


    function onSubmit(data: IReviewData){
        console.log(data)
        async function sendRequest() {
            try{
                const token = getToken()
                if (token === "error") return
                const response = await fetch(`http://localhost:3001/api/review/create-role-user`, { 
                    method: 'POST',
                    headers: { 
                        'Content-Type': 'application/json',
                        "Authorization": `Bearer ${token}`
                    },
                    body: JSON.stringify({...data, filmId: params.id})
                })
                const result = await response.json()
                setIsSubmitted(true)
            } catch (error) {
    
            } 
        }
        sendRequest()
    }

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

    return (
        <div id="FilmList">
            <div id="filmInfoContainer">
                <img id="filmImage" src={film && film.src} alt="" />

                <div id="filmInfoDiv">
                    <div id="nameOfFilmDiv">
                        <h2>{film && film.name}</h2>

                        {film 
                            ? isFavourite
                                ?  <button className="favourite buttonAddToFavouriteFilmPage" onClick={() => {setIsFavourite(false); sendIsFavourite()}}><FaBookmark/>Remove from favourite</button>
                                : <button className="notFavourite buttonAddToFavouriteFilmPage" onClick={() => {setIsFavourite(true); sendIsFavourite()}}><FaRegBookmark/>Add to favourite</button>
                            : undefined
                        }

                    </div>
                    <table id="filmInfoDivColumns">
                        <tbody>
                            {Object.keys(filmInfo).map((key, index) => {
                                const typedKey = key as keyof IFilmInfo
                                const typedKeyNames = key as keyof IFilmInfoNames
                                const value = filmInfo[typedKey]
                                let tempString = ""
                                Array.isArray(value) && typedKey === "genres" && value.forEach((data) => {
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
                                            ? value.map((actor) => {
                                                return typeof(actor) === "string" ? tempString : <span><Link className="actorLink" to={`/actor/${actor.id}`}>{actor.name}</Link>, </span>
                                            })
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
                    {
                        isAuthenticated()
                        && <form method="POST" className="reviewForm" onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" placeholder="Enter title..." {...register("name", {
                                required: {value: true, message: "This field is required"},
                                minLength: {value: 5, message: "Minimum length is 5"},
                                maxLength: {value: 32, message: "Maximum length is 32"}
                            })}/>
                            <p className="reviewSubmitError">{formState.errors.name?.message}</p>

                            <textarea placeholder="Enter text of review..." className="textareaReview" {...register("text", {
                                required: {value: true, message: "This field is required"},
                                minLength: {value: 5, message: "Minimum length is 5"},
                                maxLength: {value: 256, message: "Maximum length is 256"}
                            })}/>
                            <p className="reviewSubmitError">{formState.errors.text?.message}</p>


                            <select {...register("mark", {
                                required: {value: true, message: "This field is required"},
                                validate: (value) => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].includes(Number(value)) || "You must select a mark between 1 and 10"
                            })}>
                                <option value="" selected={true} disabled={true}>- Select mark -</option>
                                {
                                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((mark) => {
                                        return <option key={mark} value={mark}>{mark}</option>
                                    })
                                }
                            </select>
                            <p className="reviewSubmitError">{formState.errors.mark?.message}</p>
                            <button type="submit" className="submitReview">Submit</button>
                        </form>
                    }
                    


                    {filmState && !isSubmitted && [...filmState["reviews"]].reverse().map((review, index) => {
                        return <div className="review" key={`${review.text}+${review.mark}+${review.user.src}`}>
                            <div className="profileInfo">
                                <img className="userImage" src={review.user.src} alt="" />
                                <h6>{review.user.name}</h6>
                            </div>
                            <div className="textOfReview">
                                <h6>{review.name}</h6>
                                <p>{review.text}</p>
                            </div>
                            <div className="markOfReview">{review.mark}/10</div>

                        </div>
                    })}
                </div>
                
            </div>
        </div>
    )
}   