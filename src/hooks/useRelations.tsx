import { useEffect, useState } from "react"


export interface IRelationName{
    id: string
    name: string
}

export interface IRelations{
    [key: string]: IRelationName[]
}

export function useRelations(names: string[]){

    const [records, setRecords] = useState<IRelations>({})
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>("")


    useEffect(() => {
        async function getAllRecords(name: string){
            try{
                setIsLoading(true)
                const response = await fetch(`http://localhost:3001/api/${name.toLowerCase()}/all/names`)
                const recordsRes = await response.json()
                setRecords({...records, name: recordsRes})
            } catch (error) {
                if (error instanceof Error){
                    setError(error.message)
                }
            } finally {
                setIsLoading(false)
            }
            
        }

        names.forEach((name) => {
            getAllRecords(name)
        })
        
    }, [])

    return {
        records: records,
        isLoading: isLoading,
        error: error
    }
}