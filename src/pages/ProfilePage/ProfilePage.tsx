import { useEffect, useState } from "react"
import { useUserContext } from "../../context/userContext"
import "./ProfilePage.css"
import { useNavigate } from "react-router-dom"
import { FavouriteFilmsSlider } from "../../shared/FavouriteFilmsSlider/FavouriteFilmsSlider"
import { ChangeUserDataModal } from "../../shared/ChangeUserDataModal/ChangeUserDataModal"
import { ChangeUserPasswordModal } from "../../shared/ChangeUserPasswordModal/ChangeUserPasswordModal"

export function ProfilePage() {
    const {user, isAuthenticated} = useUserContext()
    const navigate = useNavigate()

    const [statusInformation, setStatusInformation] = useState<boolean>(false)
    const [statusPassword, setStatusPassword] = useState<boolean>(false)

    
    useEffect(() => {
        if (!(isAuthenticated())) {
            navigate("/")
        }
    }, [isAuthenticated])

    function closeInformationModal() {
        setStatusInformation(false)
    }
    
    function openInformationModal() {
        setStatusInformation(true)
    }


    function closePasswordModal() {
        setStatusPassword(false)
    }
    
    function openPasswordModal() {
        setStatusPassword(true)
    }

    return (
        <div className="profilePage">
            <div className="userDataProfile">
                <img src={user?.src} alt="" className="userImageProfile"/>
                <div>
                    <h2>{user?.name}</h2>
                    <p>{user?.email}</p>
                    <p>Age: {user?.age} years old</p>
                    <div className="userDataButtonsDivProfile">
                        <button onClick={() => {openInformationModal()}} className="buttonProfile">Change information</button>
                        <button onClick={() => {openPasswordModal()}} className="buttonProfile">Change password</button>
                    </div>
                    
                </div>
                <ChangeUserDataModal show={statusInformation} onClose={closeInformationModal}/>
                <ChangeUserPasswordModal show={statusPassword} onClose={closePasswordModal}/>
            </div>

            <div className="favouriteFilmsProfile">
                <h4 className="favouriteFilmsTitleProfile">Favourite films</h4>
                <FavouriteFilmsSlider/>

            </div>

        </div>
    )
}