import { OneItem } from "../OneItem/OneItem"
import { ICategories } from "../CatalogList/CatalogList"


interface IFilm{
    src: string,
    title: string,
    description: string,
    categories: ICategories,
    percentage: number,
}

interface IGenresProps{
    films: IFilm[],
    keyOfObject: string,
    setCategories: Function,
    categories: ICategories,
    setFilteredFilms: Function,
    filteredFilms: IFilm[]
}



export function Genres(props: IGenresProps){

    let setOfCategories = new Set<string>()

    props.films.forEach((film) => {
        

        film.categories[props.keyOfObject].forEach((category) => {
            setOfCategories.add(category)
        })
    })

    const categoriesArray = Array.from(setOfCategories)

    return (
        <div className="genresContainer">
            <h2>Genres</h2>
            {categoriesArray.map((item) => { 
                return <OneItem name={item} keyOfObject={props.keyOfObject} categories={props.categories} setCategories={props.setCategories} setFilteredFilms={props.setFilteredFilms} filteredFilms={props.filteredFilms} films={props.films}></OneItem>
            })}
        </div>
    )
}