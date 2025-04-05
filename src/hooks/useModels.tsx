import { useEffect, useState } from "react"




// getting all models for admin panel
export function useModels(){

    const [models, setModels] = useState<string[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>("")


    useEffect(() => {

        async function getAllModels(){
            try{
                setIsLoading(true)
                const response = await fetch('http://localhost:3001/api/admin/all')
                const models = await response.json()
                setModels(models)
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