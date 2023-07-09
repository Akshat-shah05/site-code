import './navbar.css';
import { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { HashLink as Link } from 'react-router-hash-link'


const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <>
            <div className="navbar-container">
                <div className="blob"></div>
                <h1 className="logo-name">Akshat Shah</h1>
                <nav className="navbar-inner">
                    <Link to="#about-me" smooth> About </Link>
                    <Link to="#education" smooth> Education </Link>
                    <Link to="#projects" smooth> Projects </Link>
                    <Link to="#papers" smooth> Papers </Link>
                    <Link to="#contact" smooth> Contact </Link>
                </nav>

                <div className="navbar-dropdown">
                    {toggleMenu
                        ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                        : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                    {toggleMenu && (
                    <div className="dropdown-container">
                        <div className="dropdown-contents">
                            <Link to="#about-me" smooth> About </Link>
                            <Link to="#education" smooth> Education </Link>
                            <Link to="#projects" smooth> Projects </Link>
                            <Link to="#papers" smooth> Papers </Link>
                            <Link to="#contact" smooth> Contact </Link>
                        </div>
                    </div>
                 )}

                </div>
            </div>
        </>
    )
}

export default Navbar;
