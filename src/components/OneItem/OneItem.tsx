

import { useState } from "react"
import "./OneItem.css"
import { ICategories } from "../CatalogList/CatalogList"


interface IFilm{
    src: string,
    title: string,
    description: string,
    categories: ICategories,
    percentage: number,
}

interface IGenreProps{
    name: string,
    keyOfObject: string,
    setCategories: Function,
    categories: ICategories,
    setFilteredFilms: Function,
    filteredFilms: IFilm[],
    films: IFilm[]
}

export function OneItem(props:IGenreProps){
    
    const [checked, setChecked] = useState(false)


    function conditionChecked(checkStatus: boolean){
        if (checkStatus){
            setChecked(false)
            // props.categories[props.id].push(props.name)
            const index = props.categories[props.keyOfObject].indexOf(props.name)
            props.categories[props.keyOfObject].splice(index, 1)
            props.setCategories(props.categories)
            


        } else {
            setChecked(true)
            props.categories[props.keyOfObject].push(props.name)
            props.setCategories(props.categories)

            
           
            
        }
        const filteredFilms = props.films.filter((film) => {
            return Object.keys(props.categories).every((filterKey) => {
                const filterValues = props.categories[filterKey]
                const filmValues = film.categories[filterKey]
                // if (!filmValues) return false
                return filterValues.every((value) => filmValues.includes(value));
            })
        })
        props.setFilteredFilms(filteredFilms)
        console.log(props.categories)
        console.log(filteredFilms)
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