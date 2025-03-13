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
                    {models.map((model, index) => {
                        return (
                            <tr className="modelRow">
                                <th className="modelTh"><Link to={`${model}/`}>{model}</Link></th>
                                
                                <td className="modelTd">
                                    <Link to="#"><FaPlus color="green"/>Add</Link>
                                </td>

                                <td className="modelTd">
                                    <Link to={`${model}/`}><IoPencilSharp color="#e0c947"/>Change</Link>
                                </td>
                            </tr>
                        )
                    })}
                </table>
            </div>
            

		</div>
	);
}
