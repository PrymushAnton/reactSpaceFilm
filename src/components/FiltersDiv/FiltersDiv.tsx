import "./FiltersDiv.css"
import { SearchFilmCatalog } from "../SearchFilmCatalog/SearchFilmCatalog"
import { GenresFilter } from "../GenresFilter/GenresFilter"
import { useState } from "react"
import { IFilters } from "../CatalogList/CatalogList"


interface IFiltersDivProps{
    setFilters: Function,
    filters: IFilters
}

export function FiltersDiv(props: IFiltersDivProps){



    return (
        <div className="filtersContainer">
            <SearchFilmCatalog></SearchFilmCatalog>
            <GenresFilter setFilters={props.setFilters} filters={props.filters}></GenresFilter>
        </div>
    )
}

