import React from "react"
import Head from "./components/Head"
import Body from "./components/body"
import Footer from "./components/Footer"

export default function App() {
    return (
        <div className="page">
            <Head />
            <Body />
            <Footer />
        </div>
    )
}