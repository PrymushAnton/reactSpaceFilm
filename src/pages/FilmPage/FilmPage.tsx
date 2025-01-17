import { useParams } from "react-router-dom"
import "./FilmPage.css"


export function FilmPage() {

    const params = useParams()
    console.log(params.id)

    return (
        <div>
            <p>Id: {params.id}</p>
        </div>
    )
}