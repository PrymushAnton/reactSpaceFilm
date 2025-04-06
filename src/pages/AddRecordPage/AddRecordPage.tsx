import "./AddRecordPage.css"

import { useNavigate, useParams } from "react-router-dom"
import { useForm } from "react-hook-form"
import { useModelFields } from "../../hooks/useModelFields"
import { useEffect, useState } from "react"
import { ISubmitData } from "../ChangeRecordPage/ChangeRecordPage"
import { useUserContext } from "../../context/userContext"
import { Response } from "../../shared/types/response"


export interface IRelationName{
    id: string
    name: string
}

export interface IRelations{
    [key: string]: IRelationName[]
}


export function AddRecordPage() {

    const navigate = useNavigate()

    const {isAuthenticated, getToken} = useUserContext()

    useEffect(() => {
        if (!(isAuthenticated())) {
            navigate("/")
        }
    }, [])

    const {name, id} = useParams()

    const {fields: record} = useModelFields(name ? name : "")


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
                    headers: {Authorization: `Bearer ${token}`}
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
                    headers: {Authorization: `Bearer ${token}`}
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


    
    let defaultValues = {}

    Object.entries(record ? record : {}).forEach(([key, value]) => {
        if (value.type === "manytomany" || value.type === "onetomany" || value.type === "manytoone" || value.type === "onetoone") {
            defaultValues = {...defaultValues, [key]: value.data}
        }
    })

    const {register, handleSubmit, formState, reset, setError} = useForm<ISubmitData>({
        mode: "onSubmit",
        defaultValues: defaultValues
    })

    async function onSubmit(data: ISubmitData){
        console.log(data)

        for (const [key, value] of Object.entries(data)) {
            if (key.slice(-2) === "Id" && value === "0") {
                setError(key, {
                    type: "manual",
                    message: "This field is required"
                })
                return
            }
        }

        try{
            const token = getToken()
            if (token === "error") return
            const response = await fetch(`http://localhost:3001/api/${name?.toLowerCase()}/create`, { 
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(data)
            })
            await response.json()
            await navigate(`/admin/${name}`)

        } catch (error) {

        }
    }


    return (
        <div className="addRecordPage">
            <div className="addRecordPageContainer">
                <form className="addRecordPageForm" onSubmit={handleSubmit(onSubmit)}>

                    <div className="addRecordPageTitle">
                        <h2>Create {name?.toLowerCase()}</h2>
                    </div>

                    <table className="addRecordPageTable">
                        {record && Object.entries(record).map(([key, value]) => {
                            return (
                                <tr className="addRecordPageRow" key={key}>
                                    <th className="addRecordPageTh">{String(key).charAt(0).toUpperCase() + String(key).slice(1)}</th>
                                    { 
                                        (value.type === "text" || value.type === "number")
                                        ? <td className="addRecordPageTd">
                                            <input type={value.type} {...register(key, {
                                                required: {value: true, message: "This field is required"},
                                                ...(key === "mark" && {max: {value: 10, message: "Maximum value is 10" }}),
                                                ...(key === "mark" && {min: {value: 0, message: "Minimum value is 0" }}),


                                                ...(key === "year" && {max: {value: new Date().getFullYear(), message: `Maximum value is ${new Date().getFullYear()}` }}),
                                                ...(key === "year" && {min: {value: 1888, message: "Minimum value is 1888" }}),

                                                ...(key === "rating" && {max: {value: 10, message: "Maximum value is 10" }}),
                                                ...(key === "rating" && {min: {value: 0, message: "Minimum value is 0" }}),

                                            })}/>
                                            <p className="addRecordPageError">{formState.errors[key]?.message}</p>
                                        </td>
                                        : (value.type === "textarea")
                                            ? <td className="addRecordPageTd">
                                                <textarea {...register(key, {
                                                    required: {value: true, message: "This field is required"},
                                                })}/>
                                                <p className="addRecordPageError">{formState.errors[key]?.message}</p>
                                            </td>
                                            : (value.type === "manytomany")
                                                ? <td className="addRecordPageTd">
                                                    <select multiple={true} {...register(key)}>
                                                        {manyRecords[key]?.map((manyRecord) => {
                                                            return (
                                                                <option value={String(manyRecord.id)} selected={value.data.includes(String(manyRecord.id))}>{manyRecord.name}</option>
                                                            )
                                                        })}
                                                    </select>
                                                    <p className="addRecordPageError">{formState.errors[key]?.message}</p>
                                                </td>
                                                : (value.type === "onetoone" || value.type === "manytoone")
                                                    && <td className="addRecordPageTd">
                                                        <select {...register(key, {
                                                            required: {value: true, message: "This field is required"},
                                                        })}>
                                                            <option value="0" selected={true} disabled={true}>--- Choose an option ---</option>
                                                            {singleRecords[key]?.map((singleRecord) => {
                                                                return (
                                                                    <option value={String(singleRecord.id)} selected={String(value.data) === String(singleRecord.id)}>{singleRecord.name}</option>
                                                                )
                                                            })}
                                                        </select>
                                                        <p className="addRecordPageError">{formState.errors[key]?.message}</p>
                                                    </td>
                                    }
                                </tr>
                            )
                        })}
                        <tr className="addRecordPageRow">
                            <td></td>
                            <td className="addRecordPageTd addRecordPageTdButton" colSpan={2}>
                                <button type="submit" className="addRecordPageButton addRecordPageSave">CREATE</button>
                            </td>
                        </tr>
                    </table>
                </form>
                
            </div>
		</div>
    )
}