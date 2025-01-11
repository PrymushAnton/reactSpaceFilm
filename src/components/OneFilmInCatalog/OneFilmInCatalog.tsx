import "./OneFilmInCatalog.css"




export interface IFilm{
    id: number,
    genres: string[],
    src: string,
    name: string,
    description: string,
    rating: number,
}



export function OneFilmInCatalog(props: IFilm){


    return (
        <div id="oneFilmInCatalog">
            <img id="imageOfFilm" src={props.src} alt="" />
            <h5 id="nameOfFilm">{props.name.length > 16 ? props.name.slice(0, 16) + "..." : props.name}</h5>
            <h6 id="ratingOfFilm">Rating:{props.rating}</h6>
            <p>{props.description.length > 55 ? props.description.slice(0, 55) + "..." : props.description}</p>
        </div>
    )
}