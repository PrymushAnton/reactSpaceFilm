import { useEffect, useState } from "react"


export interface IRecord{
    id: string
    name: string
}

// getting all records for single model
export function useRecords(name: string){

    const [records, setRecords] = useState<IRecord[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>("")


    useEffect(() => {
        async function getAllRecords(){
            try{
                setIsLoading(true)
                const response = await fetch(`http://localhost:3001/api/${name.toLowerCase()}/all/names`)
                const recordsRes = await response.json()
                setRecords(recordsRes)
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