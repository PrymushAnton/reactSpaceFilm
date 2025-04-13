import { Link } from "react-router-dom"
import "./Header.css"
import { AuthModal } from "../AuthRegModal/AuthRegModal"
import { useUserContext } from "../../context/userContext"


export function Header() {
    const {isAdmin} = useUserContext()
    
    return (
        <header>
            
            <div id="leftContainerHeader">
                <h1 id="logoHeader"><Link to="/">SpaceFilm</Link></h1>

                <Link to="/catalog">Catalog</Link>
                {
                    isAdmin() && <Link to="/admin">Admin Panel</Link>
                }
            </div>
            <div id="searchLogin">
                <AuthModal></AuthModal> 
            </div>
        </header>
    )
}