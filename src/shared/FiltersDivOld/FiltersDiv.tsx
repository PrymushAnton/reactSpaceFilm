
import "./FiltersDiv.css"
import { SearchFilmCatalog } from "../SearchFilmCatalog/SearchFilmCatalog"
import { IFilm } from "../../pages/CatalogList/CatalogList"

interface IFiltersDivProps{
    films: IFilm[]
    keyOfObject: string,
    setCategories: Function,
    // categories: ICategories,
    setFilteredFilms: Function,
    filteredFilms: IFilm[],
}

export function FiltersDiv(props: IFiltersDivProps){


    return (
        <div className="filtersContainer">
            <SearchFilmCatalog></SearchFilmCatalog>
        </div>
    )
}