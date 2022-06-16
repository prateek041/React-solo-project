import React from "react"
import profile from "../images/profile.jpg"

export default function Head() {
    return (
        <>
            <div className="header-section">
                < div className="image" >
                    <img className="img" src={profile}></img>
                </div >
                <div className="details">
                    <h1 className="name">
                        Prateek Singh
                    </h1>
                    <h4 className="job">
                        Frontend developer
                    </h4>
                    <a className="git-link" url="https://github.com/prateek041">
                        Github
                    </a>
                </div>
                <div className="contact">
                    <a className="button-1" url="">Email</a>
                    <a className="button-2" url="">Linkedin</a>
                </div>
            </div>
        </>
    )
}