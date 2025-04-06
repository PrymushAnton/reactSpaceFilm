import "./ChangeRecordPage.css"

import { useNavigate, useParams } from "react-router-dom"
import { useOneRecord } from "../../hooks/useOneRecord"

import { useForm } from "react-hook-form"
import { useEffect, useState } from "react"
import { useUserContext } from "../../context/userContext"
import { Response } from "../../shared/types/response"


export interface ISubmitData{
    [key: string]: number | string[] | string
}

export interface IRelationName{
    id: string
    name: string
}

export interface IRelations{
    [key: string]: IRelationName[]
}



export function ChangeRecordPage() {

    const navigate = useNavigate()

    const {isAuthenticated, getToken} = useUserContext()

    useEffect(() => {
        if (!(isAuthenticated())) {
            navigate("/")
        }
    }, [])
    
    const {name, id} = useParams()


    const [button, setButton] = useState<"delete" | "update">("update")
    const {record, isLoading, error} = useOneRecord(name as string, id as string)


    const [manyFields, setManyFields] = useState<string[]>([])
    const [manyRecords, setManyRecords] = useState<IRelations>({})

    const [singleFields, setSingleFields] = useState<string[]>([])
    const [singleRecords, setSingleRecords] = useState<IRelations>({})

    
    useEffect(() => {
        Object.entries(record ? record : {}).forEach(([key, value]) => {
            if (value.type === "manytomany" || value.type === "onetomany") {
                setManyFields(manyFields => [...manyFields, key])
            } else if (value.type === "manytoone" || value.type === "onetoone") {
                setSingleFields(singleFields => [...singleFields, key])
            }
        })
    }, [record]) 


    useEffect(() => {
        async function getAllRecords(name: string){
            try{
                const token = getToken()
                if (token === "error") return

                const response = await fetch(`http://localhost:3001/api/${name.toLowerCase().slice(0, -1)}/all/names`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                const result: Response<any> = await response.json()
                if (result.status === "error") return
                setManyRecords(manyRecords => ({
                    ...manyRecords,
                    [name]: result.data
                }));
            } catch (error) {
                if (error instanceof Error){
                    console.log(error.message)
                }
            }
            
        }

        manyFields.forEach((name) => {
            getAllRecords(name)
        })
        
    }, [manyFields])


    useEffect(() => {
        async function getAllRecords(name: string){
            try{
                const token = getToken()
                if (token === "error") return

                const response = await fetch(`http://localhost:3001/api/${name.toLowerCase().slice(0, -2)}/all/names`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                const result: Response<any> = await response.json()
                if (result.status === "error") return
                setSingleRecords(singleRecords => ({
                    ...singleRecords,
                    [name]: result.data
                }));
            } catch (error) {
                if (error instanceof Error){
                    console.log(error.message)
                }
            }
            
        }

        singleFields.forEach((name) => {
            getAllRecords(name)
        })
        
    }, [singleFields])

    useEffect(() => {
        reset(defaultValues)
    }, [record])

    useEffect(() => {
        console.log(singleRecords)
    }, [singleRecords])

    let defaultValues = {}

    Object.entries(record ? record : {}).forEach(([key, value]) => {
        if (value.type === "manytomany" || value.type === "onetomany" || value.type === "manytoone" || value.type === "onetoone") {
            defaultValues = {...defaultValues, [key]: value.data}
        }
    })


    const {register, handleSubmit, formState, reset} = useForm<ISubmitData>({
        mode: "onSubmit",
        defaultValues: defaultValues
    })


    async function onSubmitUpdate(data: ISubmitData){
        try{
            const token = getToken()
            if (token === "error") return

            const response = await fetch(`http://localhost:3001/api/${name?.toLowerCase()}/update`, { 
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({id: id, ...data})
            })
            await response.json()
            await navigate(`/admin/${name}`)

        } catch (error) {

        }
    }


    async function onSubmitDelete(data: ISubmitData){
        try{
            const token = getToken()
            if (token === "error") return
            const response = await fetch(`http://localhost:3001/api/${name?.toLowerCase()}/delete`, { 
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({id: id})
            })
            await response.json()
            await navigate(`/admin/${name}`)

        } catch (error) {

        }
    }


    async function onSubmit(data: ISubmitData){
        const newData = Object.fromEntries(
            Object.entries(data).filter(([key, value]) => {return key !== "password" && key !== "email"})
        );
        if (button === "update") {
            await onSubmitUpdate(newData)
        } else if (button === "delete"){
            await onSubmitDelete(newData)
        }
    }



    return (
        <div className="changeRecordPage">
            <div className="changeRecordPageContainer">
                <form className="changeRecordPageForm" onSubmit={handleSubmit(onSubmit)}>

                    <div className="changeRecordPageTitle">
                        <h2>Change {name?.toLowerCase()} <i>{record?.name.data}</i></h2>
                    </div>

                    <table className="changeRecordPageTable">
                        {record && Object.entries(record).map(([key, value]) => {
                            return (
                                <tr className="changeRecordPageRow" key={key}>
                                    <th className="changeRecordPageTh">{!(String(key).slice(-2) === "Id") ? String(key).charAt(0).toUpperCase() + String(key).slice(1) :  String(key).charAt(0).toUpperCase() + String(key).slice(1, -2)}</th>
                                    {
                                        (key === "password" || key === "email") 
                                        ? <td className="changeRecordPageTd">
                                            <input type={value.type} defaultValue={value.data} disabled={true} {...register(key)}/>
                                            <p className="changeRecordPageError">{formState.errors[key]?.message}</p>
                                        </td>
                                        : (value.type === "text" || value.type === "number")
                                        ? <td className="changeRecordPageTd">
                                            <input type={value.type} defaultValue={value.data} {...register(key, {
                                                required: {value: true, message: "This field is required"}
                                            })}/>
                                            <p className="changeRecordPageError">{formState.errors[key]?.message}</p>
                                        </td>
                                        : (value.type === "textarea")
                                            ? <td className="changeRecordPageTd">
                                                <textarea defaultValue={value.data} {...register(key, {
                                                    required: {value: true, message: "This field is required"},
                                                })}/>
                                                <p className="changeRecordPageError">{formState.errors[key]?.message}</p>
                                            </td>
                                            : (value.type === "manytomany")
                                                ? <td className="changeRecordPageTd">

                                                    <select multiple={true} {...register(key)}>
                                                        {manyRecords[key]?.map((manyRecord) => {
                                                            return (
                                                                <option value={String(manyRecord.id)} selected={value.data.includes(String(manyRecord.id))}>{manyRecord.name}</option>
                                                            )
                                                        })}
                                                    </select>
                                                    <p className="changeRecordPageError">{formState.errors[key]?.message}</p>
                                                </td>
                                                : (value.type === "onetoone" || value.type === "manytoone")
                                                    && <td className="changeRecordPageTd">
                                                        <select {...register(key)}>
                                                            {singleRecords[key]?.map((singleRecord) => {
                                                                return (
                                                                    <option value={String(singleRecord.id)} selected={String(value.data) === String(singleRecord.id)}>{singleRecord.name}</option>
                                                                )
                                                            })}
                                                        </select>
                                                        <p className="changeRecordPageError">{formState.errors[key]?.message}</p>
                                                    </td>
                                    }
                                    
                                </tr>
                            )
                        })}
                        <tr className="changeRecordPageRow ">
                            <td></td>
                            <td className="changeRecordPageTd changeRecordPageTdButton" colSpan={2}>
                                <button type="submit" className="changeRecordPageButton changeRecordPageDelete" onClick={() => {setButton("delete")}}>DELETE</button>
                                <button type="submit" className="changeRecordPageButton changeRecordPageSave" onClick={() => {setButton("update")}}>UPDATE</button>
                            </td>
                        </tr>
                    </table>
                </form>
                
            </div>
		</div>
    )
}