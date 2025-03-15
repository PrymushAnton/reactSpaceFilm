import { useEffect, useState } from "react"

interface IText{
    type: "text",
    data: string
}

interface INumber{
    type: "number",
    data: number
}

interface ITextArea{
    type: "textarea",
    data: string
}

interface IManyToMany{
    type: "manytomany",
    data: number[]
}

interface IOneToMany{
    type: "onetomany",
    data: number[]
}

interface IOneToOne{
    type: "onetoone",
    data: number
}


export interface IRecord{
    [key: string]: IText | INumber | ITextArea | IManyToMany | IOneToMany | IOneToOne;
}

export function useOneRecord(name: string, id: string){

    const [record, setRecord] = useState<IRecord>()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>("")


    useEffect(() => {

        async function getOneRecord(){
            try{
                setIsLoading(true)
                const response = await fetch(`http://localhost:3001/api/${name.toLowerCase()}/full/${id}`)
                const record = await response.json()
                setRecord(record)
            } catch (error) {
                if (error instanceof Error){
                    setError(error.message)
                }
            } finally {
                setIsLoading(false)
            }
            
        }
        getOneRecord()

    }, [])

    return {
        record: record,
        isLoading: isLoading,
        error: error
    }
}