import "./ChangeRecordPage.css"

import { useNavigate, useParams } from "react-router-dom"
import { useOneRecord, IRecord, IManyToMany, IManyToOne } from "../../hooks/useOneRecord"
import { IRelations, useRelations,  } from "../../hooks/useRelations"

import { useForm } from "react-hook-form"
import { useEffect, useState } from "react"


export interface ISubmitData{
    [key: string]: number | string[] | string
}

export function ChangeRecordPage() {

    const {name, id} = useParams()
    const navigate = useNavigate()


    const [button, setButton] = useState<"delete" | "update">("update")
    const {record, isLoading, error} = useOneRecord(name as string, id as string)


    const [manyFields, setManyFields] = useState<string[]>([])
    const [manyRecords, setManyRecords] = useState<IRelations>({})
    

    useEffect(() => {
        console.log(record)
        Object.entries(record ? record : {}).forEach(([key, value]) => {
            if (value.type === "manytomany") {
                setManyFields(manyFields => [...manyFields, key])
            }
        })
    }, [record]) 

    useEffect(() => {
        async function getAllRecords(name: string){
            try{
                const response = await fetch(`http://localhost:3001/api/${name.toLowerCase().slice(0, -1)}/all/names`)
                const recordsRes = await response.json()
                setManyRecords(manyRecords => ({
                    ...manyRecords,
                    [name]: recordsRes
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


    
    let obj = {}

    Object.entries(record ? record : {}).forEach(([key, value]) => {
        if (Array.isArray(value.data)) {
            obj = {...obj, [key]: value.data}
        }
    })

    const {register, handleSubmit, formState, reset} = useForm<ISubmitData>({
        mode: "onSubmit",
        defaultValues: obj
    })


    async function onSubmitUpdate(data: ISubmitData){
        try{
            console.log(data)
            const response = await fetch(`http://localhost:3001/api/${name?.toLowerCase()}/update`, { 
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({id: id, ...data})
            })
            const result = await response.json()
            await navigate(`/admin/${name}`)

        } catch (error) {

        }
    }

    

    async function onSubmitDelete(data: ISubmitData){
        try{
            const response = await fetch(`http://localhost:3001/api/${name?.toLowerCase()}/delete`, { 
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({id: id})
            })
            const result = await response.json()
            await navigate(`/admin/${name}`)

        } catch (error) {

        }
    }


    async function onSubmit(data: ISubmitData){
        if (button === "update") {
            await onSubmitUpdate(data)
        } else if (button === "delete"){
            await onSubmitDelete(data)
        }
    }

    useEffect(() => {
        reset(obj)
    }, [record])

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
                                    <th className="changeRecordPageTh">{String(key).charAt(0).toUpperCase() + String(key).slice(1)}</th>
                                    { 
                                        (value.type === "text" || value.type === "number")
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
                                                        {/* <select {...register(key)}>
                                                            {record.map((rec) => {
                                                                return (
                                                                    <option value={rec.id}>{rec.name}</option>
                                                                )
                                                            })}
                                                        </select> */}
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