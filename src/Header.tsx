import "./static/css/Header.css"

export function Header() {
    return (
        <div>
            <header>
                <h2 id="SpaceFilmh2">SpaceFilm</h2>
                <div id="catalogNews">
                    <a href="" id="Catalog">Catalog</a>
                    <a href="" id="News">News</a>
                </div>
                <div id="searchLogin">
                    <input type="text" name="" id="inputSearch" placeholder="Search"/>
                    <a href="">
                        Login
                        <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 11.1941C10 13.9784 7.76142 13.4627 5 13.4627C2.23858 13.4627 0 13.9784 0 11.1941C0 8.40974 2.23858 6.15259 5 6.15259C7.76142 6.15259 10 8.40974 10 11.1941Z" fill="white"/><ellipse cx="4.99989" cy="3.04348" rx="2.36842" ry="2.54348" fill="white"/></svg>
                    </a>
                </div>
            </header>
        </div>
    )
}