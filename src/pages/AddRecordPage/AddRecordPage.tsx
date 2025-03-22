import "./AddRecordPage.css"

import { useNavigate, useParams } from "react-router-dom"
import { IRecord } from "../../hooks/useOneRecord"
import { useRecords } from "../../hooks/useRecords"

import { useForm } from "react-hook-form"
import { useModelFields } from "../../hooks/useModelFields"
import { useEffect, useState } from "react"


export function AddRecordPage() {

    const {name} = useParams()
    const navigate = useNavigate()

    const {fields} = useModelFields(name ? name : "")

    // const {record, isLoading, error: recordError} = useOneRecord(name as string)

    // const {records, isLoading: isLoadingRecord, error: errorRecord} = useRecords("film")
    const [error, setError] = useState<string>("")

    const {register, handleSubmit, formState} = useForm<IRecord>({
        mode: "onSubmit"
    })

    async function onSubmit(data: IRecord){
        try{
            const response = await fetch(`http://localhost:3001/api/${name?.toLowerCase()}/create`, { 
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({...data})
            })
            const result = await response.json()
            console.log(result)

            if (result.status === "error") {
                setError(result.message)
                return
            }
            
            await navigate(`/admin/${name}`)
            

        } catch (error) {
            if (error instanceof Error) console.log(error)
        }
    }

    useEffect(() => {
        console.log(fields)
    }, [fields])


    return (
        <div className="addRecordPage">
            <div className="addRecordPageContainer">
                <form className="addRecordPageForm" onSubmit={handleSubmit(onSubmit)}>

                    <div className="addRecordPageTitle">
                        <h2>Create {name?.toLowerCase()}</h2>
                    </div>

                    <table className="addRecordPageTable">
                        {fields && Object.entries(fields).map(([key, value]) => {
                            return (
                                <tr className="addRecordPageRow" key={key}>
                                    <th className="addRecordPageTh">{String(key).charAt(0).toUpperCase() + String(key).slice(1)}</th>
                                    { 
                                        (value.type === "text" || value.type === "number")
                                        ? <td className="addRecordPageTd">
                                            <input type={value.type} {...register(key, {
                                                required: {value: true, message: "This field is required"},
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
                                                    {/* <select multiple={true} defaultValue={fields.films.data} {...register(key)}>
                                                        {records.map((record) => {
                                                            return (
                                                                <option value={record.id} selected={value.data.includes(record.id)}>{record.name}</option>
                                                            )
                                                        })}
                                                    </select> */}
                                                    <p className="addRecordPageError">{formState.errors[key]?.message}</p>
                                                </td>
                                                : (value.type === "onetoone" || value.type === "manytoone")
                                                    && <td className="addRecordPageTd">
                                                        {/* <select {...register(key)}>
                                                            {records.map((record) => {
                                                                return (
                                                                    <option value={record.id}>{record.name}</option>
                                                                )
                                                            })}
                                                        </select> */}
                                                        <p className="addRecordPageError">{formState.errors[key]?.message}</p>
                                                    </td>
                                    }
                                    
                                </tr>
                            )
                        })}
                        <tr className="addRecordPageRow">
                            <td></td>
                            <td>
                                <p className="addRecordPageError">
                                    {error}
                                </p>
                            </td>
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