import "./FilmsFilter.css"

const genres = [
    { genre: "Сімейні"},
    { genre: "Фентезі"},
    { genre: "Арт-хаус"},
    { genre: "Бойовики"},
    { genre: "Військові"},
    { genre: "Детективи"},
    { genre: "Кримінал"},
    { genre: "Пригоди"},
    { genre: "Драми"},
    { genre: "Спортивні"},
    { genre: "Фантастика"},
    { genre: "Комедії"},
    { genre: "Мелодрами"},
    { genre: "Трилери"},
    { genre: "Жахи"},
    { genre: "Музичні"},
    { genre: "Історичні"},
    { genre: "Документальні"},
    { genre: "Подорожі"},
    { genre: "Пізнавальні"},
    { genre: "Театр"},
    { genre: "Короткометражні"},
    { genre: "Українські"},
    { genre: "Закордонні"},
]

export function FilmsFilter(){
    return(
        <div id = "filters-div">
            <div id = "filters-header">
                <h2>Пошук</h2>
                <div id="search-div">
                    <input type="text" name="" id="inputSearch" placeholder="Search"/>
                </div>
            </div>

            <div id="filters-filters">
                <h2>Жанр</h2>
                <div id="genre">
                {genres.map((genre, index) => (
                        <div className="genre-div" key={index}>
                            <div id="checkbox-div">
                                <input type="checkbox" name={genre.genre} className="checkbox"/>
                            </div>
                            <p>{genre.genre}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}