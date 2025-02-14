import { useState } from "react";
import "./AuthRegModal.css"
import Modal from 'react-bootstrap/Modal';
import { ModalBody, ModalFooter, ModalHeader } from "react-bootstrap";

export function AuthModal(){
    const [showLog, setShowLog] = useState(false);
    const [showReg, setShowReg] = useState(false);

    const handleCloseLog = () => setShowLog(false);
    const handleCloseReg = () => setShowReg(false);

    const handleShowLog = () => {
        setShowLog(true);
        setShowReg(false);
    };

    const handleShowReg = () => {
        setShowReg(true);
        setShowLog(false);
    };
    return(
        <div>
            <button id="loginButtonHeader" onClick={handleShowLog}>
                Login
                <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 11.1941C10 13.9784 7.76142 13.4627 5 13.4627C2.23858 13.4627 0 13.9784 0 11.1941C0 8.40974 2.23858 6.15259 5 6.15259C7.76142 6.15259 10 8.40974 10 11.1941Z" fill="white"/><ellipse cx="4.99989" cy="3.04348" rx="2.36842" ry="2.54348" fill="white"/></svg>
            </button>
            <Modal show={showLog} onHide={handleCloseLog} id="AuthModal" animation={false}>
                <Modal.Header id="AuthRegTop">
                    <h2>Sign In</h2>
                </Modal.Header>
                <form>
                    <Modal.Body id="AuthRegMiddle">
                        <div className="inputDiv">
                            <h4 className="inputTitle">Email</h4>
                            <input type="text" className="inputText"/>
                        </div>
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
                        <div className="inputDiv">
                            <h4 className="inputTitle">Email</h4>
                            <input type="text" className="inputText"/>
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

