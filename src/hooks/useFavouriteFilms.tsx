import { useEffect, useState } from "react"
import { Response } from "../shared/types/response"
import { useUserContext } from "../context/userContext"


export interface IFavouriteFilm{
    id: number
    name: string
    src: string
    description: string
    rating: number
}

export function useFavouriteFilms(){

    const {getToken} = useUserContext()

    const [films, setFields] = useState<IFavouriteFilm[]>()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>("")


    useEffect(() => {
        async function getFavouriteFilms(){
            try{
                setIsLoading(true)

                const token = getToken()
                if (token === "error") return
                
                const response = await fetch(`http://localhost:3001/api/user/get-favourite-films`, {
                    headers: { Authorization: `Bearer ${token}` },
                })
                
                const result: Response<IFavouriteFilm[]> = await response.json()
                if (result.status === "error"){
                    setError(result.message)
                    setIsLoading(false)
                    return
                }
                setFields(result.data)
            } catch (error){
                if (error instanceof Error) setError(error.message)
            } finally {
                setIsLoading(false)
            }
            
        }
        getFavouriteFilms()

    }, [])

    return {
        films: films,
        isLoading: isLoading,
        error: error
    }
}