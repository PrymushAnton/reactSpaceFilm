import { useEffect, useState } from "react"
import "./GenresFilter.css"
import { OneCheckbox } from "../OneCheckbox/OneCheckbox"
import { IFilters } from "../../pages/CatalogList/CatalogList"
import { useGenres } from "../../hooks/useGenres"



interface IGenre{
    id: number,
    name: string,
    description: string
}

interface IGenresFilters{
    setFilters: Function
    filters: IFilters
}



export function GenresFilter(props: IGenresFilters){


    const {genres, isLoading, error} = useGenres()



    return (
        <div className="genresContainer">
            <h2 id="genresTitle">Genres</h2>
            {genres.map((genre, index) => {
                return <OneCheckbox key={index} name={genre.name} setFilters={props.setFilters} filters={props.filters} type="genres"></OneCheckbox>
            })}
        </div>
    )
}