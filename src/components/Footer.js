import React from "react"
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

export default function Footer() {
    return (
        <div className="footer">
            < FaLinkedin size="2em" />
            < FaGithub size="2em" />
            < FaTwitter size="2em" />
        </div>
    )
}