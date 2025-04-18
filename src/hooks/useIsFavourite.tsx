import { useEffect, useState } from "react"
import { IFilm } from "../shared/OneFilmInCatalog/OneFilmInCatalog"
import { Response } from "../shared/types/response"
import { useUserContext } from "../context/userContext"


export function useIsFavourite(id: number){

    const {getToken} = useUserContext()

    const [result, setResult] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>()

    useEffect(() => {

        async function getIsFavourite(){
            try{

                setIsLoading(true)
                
                const token = getToken()
                if (token === "error") return
                
                const response = await fetch(`http://localhost:3001/api/user/is-favourite/${id}`, {
                    headers: { Authorization: `Bearer ${token}` },
                })
                
                const result: Response<boolean> = await response.json()
                if (result.status === "error"){
                    setError(result.message)
                    setIsLoading(false)
                    return
                }
            
                setResult(result.data)
            } catch (error) {
                if (error instanceof Error){
                    setError(error.message)
                }
            } finally {
                setIsLoading(false)
            }
            
        }
        getIsFavourite()

    }, [])

    return {result: result, isLoading: isLoading, error: error}
    
}