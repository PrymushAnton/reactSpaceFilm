import "./AdminPage.css";
import { Link } from "react-router-dom";
import { useModels } from "../../hooks/useModels";

import { FaPlus } from "react-icons/fa6";
import { IoPencilSharp } from "react-icons/io5";

export function AdminPage() {

    const { models, isLoading, error } = useModels()

	return (
		<div className="adminPage">
            <div className="adminPageContainer">
                <div className="adminTitle">
                    <h2>Hello, admin</h2>
                </div>

                <table className="modelsTable">
                    {models.map((model) => {
                        return (
                            <tr className="modelRow">
                                <th className="modelTh"><Link to={`/admin/${model.toLowerCase()}/`}>{model}</Link></th>
                                
                                <td className="modelTd">
                                    <Link to={`/admin/${model.toLowerCase()}/create/`}><FaPlus color="green" size={20}/>Add</Link>
                                </td>

                                <td className="modelTd">
                                    <Link to={`/admin/${model.toLowerCase()}/`}><IoPencilSharp color="#e0c947" size={20}/>Change</Link>
                                </td>
                            </tr>
                        )
                    })}
                </table>
            </div>
            

		</div>
	);
}
