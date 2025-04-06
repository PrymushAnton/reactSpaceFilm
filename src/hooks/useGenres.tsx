import { useEffect, useState } from "react"
import {Response} from "../shared/types/response"

interface IFilm{
    id: number,
    categories: {
        genres: string[]
    },
    src: string,
    name: string,
    description: string,
    rating: number
}

// getting all genres for genresFilter
export function useGenres(){

    const [genres, setGenres] = useState<IFilm[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>()

    useEffect(() => {

        async function getAllFilms(){
            try{
                setIsLoading(true)
                const response = await fetch('http://localhost:3001/api/genre/all')
                const result: Response<IFilm[]> = await response.json()
                if (result.status === "error") {
                    setError(result.message)
                    setIsLoading(false)
                    return
                }
                setGenres(result.data)
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

    return {
        genres: genres,
        isLoading: isLoading,
        error: error
    }
}