import { Link } from "react-router-dom"
import "./Header.css"
import { AuthRegModal } from "../AuthRegModal/AuthRegModal"
import { useUserContext } from "../../context/userContext"


export function Header() {
    const {isAdmin, user, isAuthenticated} = useUserContext()
    
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
                <AuthRegModal></AuthRegModal>
                {
                    isAuthenticated() &&
                    <Link to={"/profile"} className="userInfoHeader">
                        {user && user.name.length > 10 ? user.name.slice(0, 10) + "..." : user?.name}
                        <img src={user?.src} alt="" className="userImageHeader"/>
                    </Link>
                }
            </div>
        </header>
    )
}