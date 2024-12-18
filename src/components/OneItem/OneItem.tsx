

import { useState } from "react"
import "./OneItem.css"


interface IGenreProps{
    name: string,
    categories: string[][],
    setFunction: Function,
    id: number,
}

export function OneItem(props:IGenreProps){


    // console.log(0, props.categories)
    
    const [checked, setChecked] = useState(false)

    // function conditionChecked(checkStatus: boolean){
    //     if (checkStatus){
    //         setChecked(false)
    //         // props.categories.filter((el) => el != props.name)
    //         const index = props.categories[props.id_in_array].indexOf(props.name)
    //         props.categories[props.id_in_array].splice(index, 1)
    //         console.log(1, props.categories)
    //         props.setFunction(props.categories)
    //         // props.setFunction(10)
    //     } else {
    //         setChecked(true)
    //         props.categories[props.id_in_array].push(props.name)
    //         console.log(2, props.categories)
    //         props.setFunction(props.categories)
    //         // props.setFunction(5)
    //     }
    // }
    // console.log(props.categories)
    function conditionChecked(checkStatus: boolean){
        if (checkStatus){
            setChecked(false)
            props.categories[props.id].push(props.name)
            const index = props.categories[props.id].indexOf(props.name)
            props.categories[props.id].splice(index, 1)
            props.setFunction(props.categories)
            
        } else {
            setChecked(true)
            props.categories[props.id].push(props.name)
            props.setFunction(props.categories)
        }
        console.log(props.categories)
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