import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form"
import { IUser, useUserContext } from "../../context/userContext";

interface ISubmitData{
    name?: string
    email: string
    src?: string
    age: number
}

interface IChangeUserDataModalProps{
    show: boolean
    onClose: () => void
}

export function ChangeUserDataModal(props: IChangeUserDataModalProps){
    const {show, onClose} = props
    const {user, getToken, getData} = useUserContext()

    const [userState, setUserState] = useState<IUser>()

    const {register, handleSubmit, formState, reset, setValue} = useForm<ISubmitData>({
        mode: "onSubmit"
    })

    useEffect(() => {
        user && setUserState(user)
        setValue("name", user?.name || "");
        setValue("email", user?.email || "");
        setValue("src", user?.src || "");
        setValue("age", user?.age || 0);
    }, [user])


    

    function onSubmit(data: ISubmitData){
        const changedObj: Partial<ISubmitData> = {}

        if (data.name !== userState?.name) {
            changedObj.name = data.name
        }
        if (data.email !== userState?.email) {
            changedObj.email = data.email
        }
        if (data.src !== userState?.src) {
            changedObj.src = data.src
        }
        if (data.age !== userState?.age) {
            changedObj.age = data.age
        }

        if (Object.keys(changedObj).length === 0) {
            onClose()
            return
        }

        async function sendRequest(){
            try{
                const token = getToken()
                if (token === "error") return

                const response = await fetch(`http://localhost:3001/api/user/change-data`, { 
                    method: 'POST',
                    headers: { 
                        'Content-Type': 'application/json',
                        "Authorization": `Bearer ${token}`
                    },
                    body: JSON.stringify({data: changedObj})
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
                            <h4 className="inputTitle">Name</h4>
                            <input type="text" className="inputText" defaultValue={userState?.name} {...register("name", {
                                required: {value: true, message: "This field is required"}
                            })}/>
                            <p>{formState.errors.name?.message}</p>
                        </div>
                    
                        <div className="inputDiv">
                            <h4 className="inputTitle">Email</h4>
                            <input type="email" className="inputText" defaultValue={userState?.email} {...register("email", {
                                required: {value: true, message: "This field is required"}
                            })}/>
                            <p>{formState.errors.email?.message}</p>
                        </div>

                        <div className="inputDiv">
                            <h4 className="inputTitle">Image src</h4>
                            <input type="text" className="inputText" defaultValue={userState?.src} {...register("src", {
                                required: {value: true, message: "This field is required"}
                            })}/>
                            <p>{formState.errors.src?.message}</p>
                        </div>

                        <div className="inputDiv">
                            <h4 className="inputTitle">Age</h4>
                            <input type="number" className="inputText" defaultValue={userState?.age} {...register("age", {
                                required: {value: true, message: "This field is required"},
                                valueAsNumber: true,
                                max: {value: 100, message: "Age must be less than 100"},
                                min: {value: 5, message: "Age must be more than 5"}
                            })}/>
                            <p>{formState.errors.age?.message}</p>
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

