import "./FilmsInCatalog.css"
import { OneFilmInCatalog } from "../OneFilmInCatalog/OneFilmInCatalog"



export interface IFilm{
    id: number,
    genres: string[],
    src: string,
    name: string,
    description: string,
    rating: number,
}

interface IFilmsInCatalogProps{
    films: IFilm[]
}



export function FilmsInCatalog(props: IFilmsInCatalogProps){

    


    return (
        <div id="filmsInCatalog">
            {props.films.map((film, index) => {
                return <OneFilmInCatalog key={index} id={film.id} genres={film.genres} src={film.src} name={film.name} description={film.description} rating={film.rating}></OneFilmInCatalog>
            })}
        </div>
    )
}