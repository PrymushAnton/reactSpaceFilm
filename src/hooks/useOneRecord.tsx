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
    [key: string]: IText | INumber | ITextArea | IManyToMany | IManyToOne | IOneToOne | IOneToMany;
}

// getting all info about single record
export function useOneRecord(name: string, id: string){

    const [record, setRecord] = useState<IRecord>()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>("")



    useEffect(() => {

        async function getOneRecord(){
            try{
                setIsLoading(true)
                const response = await fetch(`http://localhost:3001/api/${name.toLowerCase()}/full/${id}`)
                const recordRes = await response.json()
                
                setRecord(recordRes)

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

    useEffect(() => {
        console.log(record)
    }, [record])



    return {
        record: record,
        isLoading: isLoading,
        error: error
    }
}