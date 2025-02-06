import "./FilmsInCatalog.css"
import { OneFilmInCatalog } from "../OneFilmInCatalog/OneFilmInCatalog"


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

interface IFilmsInCatalogProps{
    films: IFilm[]
}



export function FilmsInCatalog(props: IFilmsInCatalogProps){
    return (
        <div id="filmsInCatalog">
            {props.films.map((film, index) => {
                return <OneFilmInCatalog 
                key={index}
                id={film.id}
                name={film.name}
                src={film.src}
                rating={film.rating}
                year={film.year}
                baseLanguage={film.baseLanguage}
                homeCountry={film.homeCountry}
                ageRestriction={film.ageRestriction}
                description={film.description}
                genres={film.genres}
                photo1={film.photo1}
                photo2={film.photo2}
                photo3={film.photo3}
                photo4={film.photo4}
                actors={film.actors}
                reviews={film.reviews}
                ></OneFilmInCatalog>
            })}
        </div>
    )
}