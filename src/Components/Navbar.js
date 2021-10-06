import React from 'react'
import './Navbar.css'
export default function Navbar() {
    return (
        <div>
            <div className="header">
                <div className="logo">
                    <h1><strong>HACK-R@CE</strong></h1>
                </div>
                <div className="navbar">
                    <ul>
                        <li className="single"><a href="/">Home</a></li>
                        <li className="single"><a href="/">About Us</a></li>
                        <li className="single"><a href="/">Register</a></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}
