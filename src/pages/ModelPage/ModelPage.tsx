import { Link, useParams } from "react-router-dom";
import "./ModelPage.css";
import { IRecord, useRecords } from "../../hooks/useRecords";
import { IoPencilSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { useEffect, useState } from "react";


export function ModelPage() {

    const {name} = useParams()

    const {records, isLoading, error} = useRecords(String(name))

    const [modelRecords, setModelRecords] = useState<IRecord[]>(records)

    useEffect(() => {
        setModelRecords(records)
    }, [records])

    return (
        <div className="modelPage">
            <div className="modelPageContainer">
                <div className="modelTitle">
                    <h2>Select {name?.toLowerCase()} to change</h2>
                    <Link to={`/admin/${name}/create/`} className="modelPageAddRecord"><FaPlus color="green" size={20}/>Add</Link>
                </div>

                <table className="modelsTable">
                    {modelRecords.map((record) => {
                        return (
                            <tr className="modelRow">
                                <th className="modelTh"><Link to={`/admin/${name}/update/${record.id}`}>{record.name}</Link></th>


                                <td className="modelTd">
                                    <Link to={`/admin/${name}/update/${record.id}`}><IoPencilSharp color="#e0c947" size={20}/>Change</Link>
                                </td>
                                <td className="modelTd">
                                    <Link to={`/admin/${name}/delete/${record.id}`}><MdDelete color="#c33333" size={20}/>Delete</Link>
                                </td>
                            </tr>
                        )
                    })}
                </table>
            </div>
		</div>
    )
}