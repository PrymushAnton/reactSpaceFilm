import { useState } from "react";
import "./AuthRegModal.css"
import Modal from 'react-bootstrap/Modal';

export function AuthModal(){

    const [isLogShown, setIsLogShown] = useState<boolean>(false)
    const [isRegShown, setIsRegShown] = useState<boolean>(false)
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

    function openModal() {
        setIsModalOpen(true)
        setIsLogShown(true)
        setIsRegShown(false)
    }

    function closeModal() {
        setIsModalOpen(false)
        setIsLogShown(false)
        setIsRegShown(false)
    }

    function openLogIn() {
        setIsLogShown(true)
        setIsRegShown(false)
    }

    function openRegIn() {
        setIsLogShown(false)
        setIsRegShown(true)

        console.log(isLogShown ? isLogShown : isRegShown ?? isRegShown)
    }



    return(
        <div>
            <button id="loginButtonHeader" onClick={() => {openModal()}}>
                Login
                <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 11.1941C10 13.9784 7.76142 13.4627 5 13.4627C2.23858 13.4627 0 13.9784 0 11.1941C0 8.40974 2.23858 6.15259 5 6.15259C7.76142 6.15259 10 8.40974 10 11.1941Z" fill="white"/><ellipse cx="4.99989" cy="3.04348" rx="2.36842" ry="2.54348" fill="white"/></svg>
            </button>
            <Modal show={showLog} onHide={handleCloseLog} id="AuthModal" animation={false}>
                <Modal.Header id="AuthRegTop">
                    {
                        isLogShown
                        ? <h2>Log In</h2>
                        : isRegShown && <h2>Sign Up</h2>
                    }
                </Modal.Header>
                <Modal.Body id="AuthRegMiddle">
                    <form>
                        
                        <div className="inputDiv">
                            <h4 className="inputTitle">Username</h4>
                            <input type="text" className="inputText"/>
                        </div>

                        {
                            isRegShown 
                            && <div className="inputDiv">
                                <h4 className="inputTitle">Email</h4>
                                <input type="text" className="inputText"/>
                            </div>
                        }
                        
                        <div className="inputDiv">
                            <div id="inputDivTop">
                                <h4 className="inputTitle">Password</h4>
                                <a id="forgotPassword">Forgot password?</a>
                            </div>
                            <input type="password" className="inputText"/>
                        </div>
                        <input type="submit" value="Sign In" id="submitButt"/>
                    </Modal.Body>
                    <Modal.Footer id="AuthRegBottom">
                        <h5>New to SpaceFilm?</h5>
                        <button type="button" onClick={handleShowReg} className="SignInUpQuest">Sign Up &gt;</button>
                    </Modal.Footer>
                </form>
            </Modal>

            <Modal show={showReg} onHide={handleCloseReg} id="RegModal" animation={false}>
                <ModalHeader id="AuthRegTop">
                    <h2>Sign Up</h2>
                </ModalHeader>
                <form>
                    <ModalBody id="AuthRegMiddle">
                        <div className="inputDiv">
                            <h4  className="inputTitle">Name</h4>
                            <input type="text" className="inputText"/>
                        </div>
                        : isRegShown && <div>
                            <input type="submit" value="Sign Up" id="submitButt"/>
                            <button type="button" id="SignButt" onClick={() => {openLogIn()}} >Log In</button>
                        </div>
                        <div className="inputDiv">
                            <h4 className="inputTitle">Password</h4>
                            <input type="password" className="inputText"/>
                        </div>
                    </ModalBody>
                    <ModalFooter id="AuthRegBottom">
                        <input type="submit" value="Sign Up" id="submitButt"/>
                        <h5>Already have an account?</h5>
                        <button type="button" onClick={handleShowLog} className="SignInUpQuest">Sign In &gt;</button>
                    </ModalFooter>
                </form>
            </Modal>
        </div>
    )
}

