import { useEffect, useState } from "react"
import { Response } from "../shared/types/response"
import { useUserContext } from "../context/userContext"

export interface IText{
    type: "text",
    data: string
}

export interface INumber{
    type: "number",
    data: number
}

export interface ITextArea{
    type: "textarea",
    data: string
}

export interface IManyToMany{
    type: "manytomany",
    data: string[]
}

export interface IOneToMany{
    type: "onetomany",
    data: string[]
}


export interface IManyToOne{
    type: "manytoone",
    data: string
}

export interface IOneToOne{
    type: "onetoone",
    data: string
}


export interface IRecord{
    [key: string]: IText | INumber | ITextArea | IManyToMany | IManyToOne | IOneToOne | IOneToMany;
}

// getting all info about single record
export function useOneRecord(name: string, id: string){

    const {getToken} = useUserContext()
    

    const [record, setRecord] = useState<IRecord>()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>("")


    useEffect(() => {

        async function getOneRecord(){
            try{
                setIsLoading(true)

                const token = getToken()
                if (token === "error") return

                const response = await fetch(`http://localhost:3001/api/${name.toLowerCase()}/full/${id}`, {
                    headers: { Authorization: `Bearer ${token}` },
                })
                const result: Response<IRecord> = await response.json()
                if (result.status === "error"){
                    setError(result.message)
                    setIsLoading(false)
                    return
                }
                setRecord(result.data)

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