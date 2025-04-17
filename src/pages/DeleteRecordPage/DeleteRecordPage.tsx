import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useUserContext } from "../../context/userContext";



export function DeleteRecordPage() {
    const {getToken, isAuthenticated} = useUserContext()

    const navigate = useNavigate()
    
    useEffect(() => {
        if (!(isAuthenticated())) {
            navigate("/")
        }
    }, [])
    
    const {name, id} = useParams()

    useEffect(() => {
        
        async function deleteRecord(){
            try{
                const token = getToken()
                if (token === "error") return

                await fetch(`http://localhost:3001/api/${name?.toLowerCase()}/delete`, { 
                    method: 'POST',
                    headers: { 
                        'Content-Type': 'application/json',
                        "Authorization": `Bearer ${token}`
                    },
                    body: JSON.stringify({id: id})
                })
                await navigate(`/admin/${name}/`)

            } catch (error) {
    
            }
        }
        deleteRecord()
    }, [])


    return (
        <></>
    )
}