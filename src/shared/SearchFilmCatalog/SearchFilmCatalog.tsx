
import "./SearchFilmCatalog.css"


export function SearchFilmCatalog(){

    return (
        <div className="searchContainer">
            <h2 id="searchText">Search</h2>
            <form id="searchForm">
                <input type="text" id="searchBar" placeholder="Enter name of film..." />
                <button id="searchButton"><img id="magnifyingGlassIcon" src="https://cdn-icons-png.flaticon.com/512/149/149852.png" alt="" /></button>
            </form>
            
        </div>
    )
}