import { useEffect, useState } from "react"
import { Response } from "../shared/types/response"
import { useUserContext } from "../context/userContext"


export interface IRecord{
    id: string
    name: string
}

// getting all records for single model
export function useRecords(name: string){
    const {getToken} = useUserContext()

    const [records, setRecords] = useState<IRecord[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>("")


    useEffect(() => {
        async function getAllRecords(){
            try{
                setIsLoading(true)

                const token = getToken()
                if (token === "error") return

                const response = await fetch(`http://localhost:3001/api/${name.toLowerCase()}/all/names`, {
                    headers: { Authorization: `Bearer ${token}` },
                })
                const result: Response<IRecord[]> = await response.json()

                if (result.status === "error"){
                    setError(result.message)
                    setIsLoading(false)
                    return
                }
                setRecords(result.data)
            } catch (error) {
                if (error instanceof Error){
                    setError(error.message)
                }
            } finally {
                setIsLoading(false)
            }
            
        }
        getAllRecords()
    }, [])

    return {
        records: records,
        isLoading: isLoading,
        error: error
    }
}