import { useEffect, useState } from "react"
import { IFilm } from "../pages/CatalogList/CatalogList"
import { Response } from "../shared/types/response"

// for getting all films for catalogList
export function useFilms(){

    const [films, setFilms] = useState<IFilm[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>()


    useEffect(() => {

        async function getAllFilms(){
            try{
                setIsLoading(true)
                const response = await fetch('http://localhost:3001/api/film/all')
                const result: Response<any> = await response.json()
                if (result.status === "error") {
                    setError(result.message)
                    setIsLoading(false)
                    return
                }
                setFilms(result.data)
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

    return {films: films, isLoading: isLoading, error: error}
}