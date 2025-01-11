import { useEffect, useState } from "react"
import "./GenresFilter.css"
import { OneCheckbox } from "../OneCheckbox/OneCheckbox"
import { IFilters } from "../CatalogList/CatalogList"



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


    const [genres, setGenres] = useState<IGenre[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>()

    useEffect(() => {
        async function getAllGenres(){
            try{
                setIsLoading(true)
                const response = await fetch("http://localhost:3001/genre/all")
                const jsonResponse = await response.json()
                setGenres(jsonResponse)
            } catch (error) {
                if (error instanceof Error){
                    setError(error.message)
                }
            } finally {
                setIsLoading(false)
            }
        }
        getAllGenres()
    }, [])




    return (
        <div className="genresContainer">
            <h2 id="genresTitle">Genres</h2>
            {genres.map((genre, index) => {
                return <OneCheckbox key={index} name={genre.name} setFilters={props.setFilters} filters={props.filters} type="genres"></OneCheckbox>
            })}
        </div>
    )
}