import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form"
import { IUser, useUserContext } from "../../context/userContext";

interface ISubmitData{
    password: string
    passwordRepeat: string
}
interface IChangeUserPasswordModalProps{
    show: boolean
    onClose: () => void
}

export function ChangeUserPasswordModal(props: IChangeUserPasswordModalProps){
    const {show, onClose} = props
    const {user, getToken, getData} = useUserContext()

    const [userState, setUserState] = useState<IUser>()

    const [isPasswordMatch, setIsPasswordMatch] = useState<boolean>(true)

    const {register, handleSubmit, formState, reset, setValue} = useForm<ISubmitData>({
        mode: "onSubmit"
    })

    useEffect(() => {
        user && setUserState(user)
        reset()
    }, [user])

    async function onSubmit(data: ISubmitData){
        if (data.password !== data.passwordRepeat) {
            setIsPasswordMatch(false)
            return
        }

        setIsPasswordMatch(true)

        async function sendRequest(){
            try{
                const token = getToken()
                if (token === "error") return

                const response = await fetch(`http://localhost:3001/api/user/change-password`, { 
                    method: 'POST',
                    headers: { 
                        'Content-Type': 'application/json',
                        "Authorization": `Bearer ${token}`
                    },
                    body: JSON.stringify({password: data.password})
                })
                await response.json()

                await getData(token)

                reset()
                onClose()
            } catch (error) {
            }
        }
        sendRequest()
    }

    return(
        <div>
            <Modal show={show} onHide={() => {onClose(); reset()}} id="AuthModal">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <Modal.Header id="AuthRegTop">
                        <h2>Change information</h2>
                    </Modal.Header>
                    
                    <Modal.Body id="AuthRegMiddle">

                        <div className="inputDiv">
                            <h4 className="inputTitle">Password</h4>
                            <input type="password" className="inputText" {...register("password", {
                                required: {value: true, message: "This field is required"},
                                maxLength: {value: 20, message: "Max length is 20"},
                                minLength: {value: 8, message: "Min length is 5"}
                            })}/>
                            <p>{formState.errors.password?.message}</p>
                        </div>

                        <div className="inputDiv">
                            <h4 className="inputTitle">Repeat password</h4>
                            <input type="password" className="inputText" {...register("passwordRepeat", {
                                required: {value: true, message: "This field is required"},
                                maxLength: {value: 20, message: "Max length is 20"},
                                minLength: {value: 8, message: "Min length is 5"}
                            })}/>
                            <p>{formState.errors.passwordRepeat?.message}</p>
                            <p style={{display: isPasswordMatch ? "none" : "block"}}>Passwords don't match</p>
                        </div>


                    </Modal.Body>

                    <Modal.Footer>

                        <button type="submit" className="buttonProfile">Send data</button>

                    </Modal.Footer>

                </form>
                
            </Modal>
        </div>
    )
}

