import React from "react"
import { faHand } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark" aria-label="Dark offcanvas navbar">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Mobile-First Quiz App Built with React</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarDark" aria-controls="offcanvasNavbarDark" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasNavbarDark" aria-labelledby="offcanvasNavbarDarkLabel">
                    <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarDarkLabel">About my app</h5>
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            {/* <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li> */}
                            <li className="nav-item">
                            <a className="nav-link" href="https://brianoneil.netlify.app/" target="_blank"><FontAwesomeIcon icon={faHand} shake /> About me</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="https://react.dev/" target="_blank">About react</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="https://github.com/BrianAndrewOneil/quiz-app" target="_blank">See this code on my github</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}