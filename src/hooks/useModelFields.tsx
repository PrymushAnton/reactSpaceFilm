import { useEffect, useState } from "react"

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
    [key: string]: IText | INumber | ITextArea | IManyToMany | IOneToMany | IManyToOne | IOneToOne;
}

export function useModelFields(name: string){

    const [fields, setFields] = useState<IRecord>()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>("")


    useEffect(() => {
        async function getAllFields(){
            try{
                setIsLoading(true)
                const response = await fetch(`http://localhost:3001/api/${name.toLowerCase()}/fields`)
                const fields = await response.json()
                setFields(fields)
            } catch (error){
                if (error instanceof Error) setError(error.message)
            } finally {
                setIsLoading(false)
            }
            
        }
        getAllFields()

    }, [])

    return {
        fields: fields,
        isLoading: isLoading,
        error: error
    }
}