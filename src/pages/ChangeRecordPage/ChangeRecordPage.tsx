import "./ChangeRecordPage.css"

import { useParams } from "react-router-dom"
import { useOneRecord, IRecord } from "../../hooks/useOneRecord"
import { useRecords } from "../../hooks/useRecords"

import { useForm } from "react-hook-form"
import { useState } from "react"


export function ChangeRecordPage() {

    const {name, id} = useParams()

    const [button, setButton] = useState<"delete" | "save">("save")
    const {record, isLoading, error} = useOneRecord(name as string, id as string)

    const {records, isLoading: isLoadingRecord, error: errorRecord} = useRecords("film")

    const {register, handleSubmit, formState, getValues} = useForm<IRecord>({
        mode: "onSubmit"
    })

    

    


    async function onSubmitUpdate(data: IRecord){
        try{
            const response = await fetch(`http://localhost:3001/api/${name?.toLowerCase()}/update`, { 
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({id: id, ...data})
            })
            const result = await response.json()

        } catch (error) {

        }
    }

    async function onSubmitDelete(data: IRecord){
        try{
            const response = await fetch(`http://localhost:3001/api/${name?.toLowerCase()}/delete`, { 
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({id: id})
            })
            const result = await response.json()

        } catch (error) {

        }
    }


    async function onSubmit(data: IRecord){
        if (button === "save") {
            await onSubmitUpdate(data)
        } else if (button === "delete"){
            await onSubmitDelete(data)
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
                                    <th className="changeRecordPageTh">{String(key).charAt(0).toUpperCase() + String(key).slice(1)}</th>
                                    { 
                                        (value.type === "text" || value.type === "number")
                                        ? <td className="changeRecordPageTd">
                                            <input type={value.type} defaultValue={value.data} {...register(key, {
                                                required: {value: true, message: "This field is required"},
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
                                            : (value.type === "manytomany" || value.type === "onetomany")
                                                ? <td className="changeRecordPageTd">
                                                    <select multiple {...register(key)}>
                                                        {records.map((record) => {
                                                            return (
                                                                <option value={record.id} selected={value.data.includes(record.id)}>{record.name}</option>
                                                            )
                                                        })}
                                                    </select>
                                                    <p className="changeRecordPageError">{formState.errors[key]?.message}</p>
                                                </td>
                                                : (value.type === "onetoone")
                                                    && <td className="changeRecordPageTd">
                                                        <select {...register(key)}>
                                                            {records.map((record) => {
                                                                return (
                                                                    <option value={record.id}>{record.name}</option>
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
                                <button type="submit" className="changeRecordPageButton changeRecordPageSave" onClick={() => {setButton("save")}}>SAVE</button>
                            </td>
                        </tr>
                    </table>
                </form>
                
            </div>
		</div>
    )
}