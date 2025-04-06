import { useEffect, useState } from "react"
import { Response } from "../shared/types/response"
import { useUserContext } from "../context/userContext"


// getting all models for admin panel
export function useModels(){

    const {getToken} = useUserContext()

    const [models, setModels] = useState<string[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>("")


    useEffect(() => {

        async function getAllModels(){
            try{
                setIsLoading(true)

                const token = getToken()
                if (token === "error") return

                const response = await fetch('http://localhost:3001/api/admin/all', {
                    headers: { Authorization: `Bearer ${token}` },
                })
                const result: Response<any> = await response.json()
                if (result.status === "error"){
                    setError(result.message)
                    setIsLoading(false)
                    return
                }
                setModels(result.data)
            } catch (error) {
                if (error instanceof Error){
                    setError(error.message)
                }
            } finally {
                setIsLoading(false)
            }
            
        }
        getAllModels()

    }, [])

    return {
        models: models,
        isLoading: isLoading,
        error: error
    }
}