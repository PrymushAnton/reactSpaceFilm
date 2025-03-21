import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";



export function DeleteRecordPage() {
    const {name, id} = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        
        async function deleteRecord(){
            try{
                const response = await fetch(`http://localhost:3001/api/${name?.toLowerCase()}/delete`, { 
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json'},
                    body: JSON.stringify({id: id})
                })
                const result = await response.json()
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