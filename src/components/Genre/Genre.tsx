

import { useState } from "react"
import "./Genre.css"


interface IGenreProps{
    name: string,
    categories: string[]
    setFunction: Function,
    
}

export function Genre(props:IGenreProps){


    console.log(0, props.categories)
    
    const [checked, setChecked] = useState(false)

    function conditionChecked(checkStatus: boolean){
        if (checkStatus){
            setChecked(false)
            // props.categories.filter((el) => el != props.name)
            const index = props.categories.indexOf(props.name)
            props.categories.splice(index, 1)
            console.log(1, props.categories)
            props.setFunction(props.categories)
        } else {
            setChecked(true)
            props.categories.push(props.name)
            console.log(2, props.categories)
            props.setFunction(props.categories)
        }
    }

    return (
        <div className="genreDiv">
            <div id="checkboxDiv">
                <input type="checkbox" className="checkboxInput" onChange={(event) => {conditionChecked(checked)}}/>
            </div>
            <p className="genreName">{props.name}</p>
        </div>
    )
}