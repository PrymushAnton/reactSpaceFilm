import { Link, useParams } from "react-router-dom";
import "./ModelPage.css";
import { useRecords } from "../../hooks/useRecords";
import { IoPencilSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";


export function ModelPage() {

    const {name} = useParams()

    const {records, isLoading, error} = useRecords(String(name))


    return (
        <div className="adminPage">
            <div className="adminPageContainer">
                <div className="adminTitle">
                    <h2>Select {name?.toLowerCase()} to change</h2>
                    <Link to="#"><FaPlus color="green"/>Add</Link>
                </div>

                <table className="modelsTable">
                    {records.map((record) => {
                        return (
                            <tr className="modelRow">
                                <th className="modelTh"><Link to="#">{record.name}</Link></th>
                                
                                

                                <td className="modelTd">
                                    <Link to="#"><IoPencilSharp color="#e0c947"/>Change</Link>
                                </td>
                            </tr>
                        )
                    })}
                </table>
            </div>
		</div>
    )
}