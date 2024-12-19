
import "./FiltersDiv.css"
import { SearchFilmCatalog } from "../SearchFilmCatalog/SearchFilmCatalog"
import { Genres } from "../Genres/Genres";
import { IFilm, ICategories } from "../CatalogList/CatalogList"

interface IFiltersDivProps{
    films: IFilm[]
    keyOfObject: string,
    setCategories: Function,
    categories: ICategories,
    setFilteredFilms: Function,
    filteredFilms: IFilm[],
}

export function FiltersDiv(props: IFiltersDivProps){


    return (
        <div className="filtersContainer">
            <SearchFilmCatalog></SearchFilmCatalog>
            <Genres films={props.films} keyOfObject={props.keyOfObject} setCategories={props.setCategories} categories={props.categories} setFilteredFilms={props.setFilteredFilms} filteredFilms={props.filteredFilms}></Genres>

        </div>
    )
}