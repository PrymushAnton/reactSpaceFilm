import { useEffect, useState } from "react"

import { IFilm } from "../pages/CatalogList/CatalogList"




export function useFilms(){

    const [films, setFilms] = useState<IFilm[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>()


    useEffect(() => {

        async function getAllFilms(){
            try{
                setIsLoading(true)
                const response = await fetch('http://localhost:3001/film/all')
                const filmsApi = await response.json()
                setFilms(filmsApi)
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