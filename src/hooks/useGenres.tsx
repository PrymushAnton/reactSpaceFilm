import { useEffect, useState } from "react"


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
        console.log(genres)
    }, [genres])

    useEffect(() => {

        async function getAllFilms(){
            try{
                setIsLoading(true)
                const response = await fetch('http://localhost:3001/api/genre/all')
                const genres = await response.json()
                setGenres(genres)
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