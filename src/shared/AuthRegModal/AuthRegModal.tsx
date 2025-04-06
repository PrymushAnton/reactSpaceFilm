import { useState } from "react";
import "./AuthRegModal.css"
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form"
import { useUserContext } from "../../context/userContext";



interface ISubmitData{
    name?: string
    email: string
    password: string
    src?: string
}

export function AuthModal(){
    const [status, setStatus] = useState<"reg" | "log" | "closed">("closed")
    const [button, setButton] = useState<"reg" | "log" | null>(null)
    const {register: registerUser, login, isAuthenticated, logout} = useUserContext()

    const {register, handleSubmit, formState, reset} = useForm<ISubmitData>({
        mode: "onSubmit"
    })


    function openModal() {
        setStatus("log")
    }

    function closeModal() {
        reset()
        setStatus("closed")
    }

    function openLogIn() {
        setStatus("log")
    }

    function openRegIn() {
        setStatus("reg")
    }

    async function onSubmit(data: ISubmitData){
        if (button === "log") {
            login(data.email, data.password)
        } else if (button === "reg") {
            registerUser(data.email, data.name as string, data.src as string, data.password)
        }
        closeModal()
    }


    return(
        <div>
            {
                !(isAuthenticated())
                ? <button id="loginButtonHeader" onClick={() => {openModal()}}>
                    Login
                    <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 11.1941C10 13.9784 7.76142 13.4627 5 13.4627C2.23858 13.4627 0 13.9784 0 11.1941C0 8.40974 2.23858 6.15259 5 6.15259C7.76142 6.15259 10 8.40974 10 11.1941Z" fill="white"/><ellipse cx="4.99989" cy="3.04348" rx="2.36842" ry="2.54348" fill="white"/></svg>
                </button>
                : <button id="loginButtonHeader" onClick={() => {logout()}}>
                    Logout
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 12L2 12M2 12L5.5 9M2 12L5.5 15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9.00195 7C9.01406 4.82497 9.11051 3.64706 9.87889 2.87868C10.7576 2 12.1718 2 15.0002 2L16.0002 2C18.8286 2 20.2429 2 21.1215 2.87868C22.0002 3.75736 22.0002 5.17157 22.0002 8L22.0002 16C22.0002 18.8284 22.0002 20.2426 21.1215 21.1213C20.3531 21.8897 19.1752 21.9862 17 21.9983M9.00195 17C9.01406 19.175 9.11051 20.3529 9.87889 21.1213C10.5202 21.7626 11.4467 21.9359 13 21.9827" stroke="white" stroke-width="2" stroke-linecap="round"></path> </g></svg>
                </button>
            }
           
            <Modal show={status === "log" || status === "reg"} onHide={() => {closeModal()}} id="AuthModal">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <Modal.Header id="AuthRegTop">
                        {
                            status === "log" && <h2>Log In</h2>
                        }
                        {
                            status === "reg"  && <h2>Sign Up</h2>
                        }
                    </Modal.Header>

                    
                    <Modal.Body id="AuthRegMiddle">
                        {
                            status === "reg" &&
                            <div className="inputDiv">
                                <h4 className="inputTitle">Name</h4>
                                <input type="text" className="inputText" {...register("name", {
                                    required: {value: true, message: "This field is required"}
                                })}/>
                                <p>{formState.errors.name?.message}</p>
                            </div>
                        }
                        <div className="inputDiv">
                            <h4 className="inputTitle">Email</h4>
                            <input type="text" className="inputText" {...register("email", {
                                required: {value: true, message: "This field is required"}
                            })}/>
                            <p>{formState.errors.email?.message}</p>
                        </div>
                        <div className="inputDiv">
                            <h4 className="inputTitle">Password</h4>
                            <input type="password" className="inputText" {...register("password", {
                                required: {value: true, message: "This field is required"}
                            })}/>
                            <p>{formState.errors.password?.message}</p>
                        </div>
                        {
                            status === "reg" &&
                            <div className="inputDiv">
                                <h4 className="inputTitle">Image src</h4>
                                <input type="text" className="inputText" {...register("src", {
                                    required: {value: true, message: "This field is required"}
                                })}/>
                                <p>{formState.errors.src?.message}</p>
                            </div>
                        }
                    </Modal.Body>
                    

                    <Modal.Footer>
                        {
                            status === "log" &&
                            <div className="AuthBottom">
                                <button type="submit" id="submitButt" onClick={() => {setButton("log")}}>Login</button>
                                <h5>New to SpaceFilm?</h5>
                                <button type="button" id="SignButt" className="SignInUpQuest" onClick={() => {openRegIn()}} >Sign Up -&gt;</button>
                            </div>
                        }
                        {
                            status === "reg" &&
                            <div className="RegBottom">
                                <button type="submit" id="submitButt" onClick={() => {setButton("reg")}}>Register</button>
                                <h5>Already have an account?</h5>
                                <button type="button" className="SignInUpQuest" onClick={() => {openLogIn()}} >Sign In -&gt;</button>
                            </div>
                        }
                    </Modal.Footer>
                </form>
                
            </Modal>
        </div>
    )
}

