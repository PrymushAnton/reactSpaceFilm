import { useEffect, useState } from "react"


interface IActorName{
    id: number
    name: string
}

export function useRecords(name: string){

    const [records, setRecords] = useState<IActorName[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>("")


    useEffect(() => {

        async function getAllRecords(){
            try{
                setIsLoading(true)
                const response = await fetch(`http://localhost:3001/api/${name.toLowerCase()}/all/names`)
                const records = await response.json()
                setRecords(records)
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