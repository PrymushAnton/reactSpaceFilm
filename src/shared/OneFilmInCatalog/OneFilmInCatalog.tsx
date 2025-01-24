import { Link } from "react-router-dom"
import "./OneFilmInCatalog.css"

export interface IUser{
    src: string,
    name: string
}

export interface IReview{
    text: string,
    mark: number,
    user: IUser
}


export interface IFilm{
    id: number,
    name: string,
    src: string,
    rating: number,
    year: number,
    baseLanguage: string,
    homeCountry: string,
    ageRestriction: string,
    description: string,
    genres: string[],
    photo1: string,
    photo2: string,
    photo3: string,
    photo4: string,
    actors: string[],
    reviews: IReview[]
}



export function OneFilmInCatalog(props: IFilm){


    return (
        <div id="oneFilmInCatalog">
            <Link className="textFilm" to={`/film/${props.id}`}>
                <img id="imageOfFilm" src={props.src} alt="" />
                <h5 id="nameOfFilm">{props.name.length > 16 ? props.name.slice(0, 16) + "..." : props.name}</h5>
                <h6 id="ratingOfFilm">Rating: {props.rating}</h6>
                <p>{props.description.length > 55 ? props.description.slice(0, 55) + "..." : props.description}</p>
            </Link>
       </div>
    )
}