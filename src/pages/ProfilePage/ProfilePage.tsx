import { useEffect } from "react"
import { useUserContext } from "../../context/userContext"
import "./ProfilePage.css"
import { useNavigate } from "react-router-dom"
import { FavouriteFilmsSlider } from "../../shared/FavouriteFilmsSlider/FavouriteFilmsSlider"

export function ProfilePage() {
    const {isAdmin, user, isAuthenticated} = useUserContext()
    const navigate = useNavigate()
    
    useEffect(() => {
        if (!(isAuthenticated())) {
            navigate("/")
        }
    }, [isAuthenticated])

    return (
        <div className="profilePage">
            <div className="userDataProfile">
                <img src={user?.src} alt="" className="userImageProfile"/>
                <div>
                    <h2>{user?.name}</h2>
                    <p>{user?.email}</p>
                    <p>Age: {user?.age} years old</p>
                </div>
            </div>

            <FavouriteFilmsSlider/>

        </div>
    )
}