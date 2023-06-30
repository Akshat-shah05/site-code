import './navbar.css';

// usestate not used yet but will be used for the menu drop in toggle thing for media query.
import React, { useState } from 'react';

const Navbar = () => {
    return (
        <>
            <div className="navbar-container">
                <div className="blob"></div>
                <h1 className="logo-name">Akshat Shah</h1>
                <nav className="navbar-inner">
                    <a href="home">Home</a>
                    <a href="about-me">About Me</a>
                    <a href="#projects">Projects</a>
                    <a href="#papers">Papers</a>
                    <a href="contact">Contact Me</a>
                </nav>
            </div>
        </>
    )
}

export default Navbar;
