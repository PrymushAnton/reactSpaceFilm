import { useState } from "react"
import "./OneCheckbox.css"

import { IFilters } from "../CatalogList/CatalogList"


interface IOneCheckbox{
    name: string,
    filters: IFilters,
    setFilters: Function,
    type: string
}


export function OneCheckbox(props: IOneCheckbox){

    const [isChecked, setIsChecked] = useState<boolean>(false)
    const updatedFilters = { ...props.filters };


    function condition(){
        
        if (!isChecked){
            setIsChecked(true)
            try {
                updatedFilters[props.type].push(props.name)
                props.setFilters(updatedFilters)
            } catch (error) {
                updatedFilters[props.type] = []
                updatedFilters[props.type].push(props.name)
                props.setFilters(updatedFilters)
            }
            
        } else {
            setIsChecked(false)
            const indexOfFilter = updatedFilters[props.type].indexOf(props.name)
            updatedFilters[props.type].splice(indexOfFilter, 1)
            props.setFilters(updatedFilters)

        }
    }

    
    return (
        <div className="genreDiv">
            <input type="checkbox" id={props.name + "Checkbox"} className="checkbox" onChange={condition}/>
            <label htmlFor={props.name + "Checkbox"} className="labelCategory">{props.name}</label>
        </div>
    )
}