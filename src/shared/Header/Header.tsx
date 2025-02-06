import { Link } from "react-router-dom"
import "./Header.css"
import { AuthModal } from "../AuthRegModal/AuthRegModal"

export function Header() {
    return (
        <header>
            <h1 id="logoHeader"><Link to="/">SpaceFilm</Link></h1>
            
            <div id="catalogNews">
                <Link to="/catalog">Catalog</Link>
                <Link to="/news">News</Link>
                {/* <a href="" id="Catalog">Catalog</a>
                <a href="" id="News">News</a> */}
            </div>
            <div id="searchLogin">
                <input type="text" name="" id="inputSearch" placeholder="Search"/>
                <AuthModal></AuthModal> 
            </div>
        </header>
    )
}