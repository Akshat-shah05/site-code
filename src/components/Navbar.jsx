import './navbar.css';
import { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <>
            <div className="navbar-container">
                <div className="blob"></div>
                <h1 className="logo-name">Akshat Shah</h1>
                <nav className="navbar-inner">
                    <a href="about-me">About</a>
                    <a href="home">Education</a>
                    <a href="projects">Projects</a>
                    <a href="papers">Papers</a>
                    <a href="contact">Contact</a>
                </nav>

                <div className="navbar-dropdown">
                    {toggleMenu
                        ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                        : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                    {toggleMenu && (
                    <div className="dropdown-container">
                        <div className="dropdown-contents">
                            <a href="about-me">About</a>
                            <a href="education">Education</a>
                            <a href="projects">Projects</a>
                            <a href="papers">Papers</a>
                            <a href="contact">Contact</a>
                        </div>
                    </div>
                 )}

                </div>
            </div>
        </>
    )
}

export default Navbar;
