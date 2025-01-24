import { OneItem } from "../OneItem/OneItem"
import { IFilm } from "../../pages/CatalogList/CatalogList"

import "./Genres.css"



interface IGenresProps{
    films: IFilm[],
    keyOfObject: string,
    setCategories: Function,
    genres: string[]
    setFilteredFilms: Function,
    filteredFilms: IFilm[]
}



export function Genres(props: IGenresProps){

    let setOfCategories = new Set<string>()

    props.films.forEach((film) => {
        

        film.genres.forEach((genre) => {
            setOfCategories.add(genre)
        })
    })

    const categoriesArray = Array.from(setOfCategories)

    return (
        <></>
        // <div className="genresContainer">
        //     <h2 id="genresTitle">Genres</h2>
        //     {categoriesArray.map((item, index) => { 
        //         return <OneItem key={index} name={item} keyOfObject={props.keyOfObject} categories={props.categories} setCategories={props.setCategories} setFilteredFilms={props.setFilteredFilms} filteredFilms={props.filteredFilms} films={props.films}></OneItem>
        //     })}
        // </div>
    )
}