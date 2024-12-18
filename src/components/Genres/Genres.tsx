import { OneItem } from "../OneItem/OneItem"

interface IGenresProps{
    films: {
        src: string,
        title: string,
        description: string,
        categories: string[][],
        percentage: number,
    }[],
    id: number,
    setFunction: Function,
    categories: string[][]
}


export function Genres(props: IGenresProps){
    console.log(props.categories)
    let setOfCategories = new Set<string>()
    
    props.films.forEach((film) => {
        film.categories[props.id].forEach((category) => {
            setOfCategories.add(category)
        })
    })
    
    const categoriesArray = Array.from(setOfCategories)
    console.log("GENRES", categoriesArray)
    return (
        <div className="genresContainer">
            <h2>Genres</h2>
            {categoriesArray.map((item) => { 
                return <OneItem name={item} setFunction={props.setFunction} id={props.id} categories={props.categories}></OneItem>
            })}
        </div>
    )
}