import { useEffect, useState } from "react"
import { IFilm } from "../shared/OneFilmInCatalog/OneFilmInCatalog"



export function useFilmById(id: number){

    const [film, setFilm] = useState<IFilm>()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>()


    useEffect(() => {

        async function getAllFilms(){
            try{
                setIsLoading(true)
                const response = await fetch(`http://localhost:3001/film/${id}`)
                const filmApi = await response.json()
                setFilm(filmApi)
            } catch (error) {
                if (error instanceof Error){
                    setError(error.message)
                }
            } finally {
                setIsLoading(false)
            }
            
        }
        getAllFilms()

    }, [])

    return {film: film, isLoading: isLoading, error: error}
    
}