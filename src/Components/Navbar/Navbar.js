import React from "react";
import Headroom from "react-headroom";
import "./Navbar.scss";

const Navbar = () => {
    return (
        <Headroom>
            <header className="header">
                <a href="/portfolio" className="logo">
                    <span className="greyColor"> &lt;</span>
                    <span className="logoName">{"Usha Komati"}</span>
                    <span className="greyColor">/&gt;</span>
                </a>
                <input className="menuBtn" type="checkbox" id="menu-btn" />
                <label
                    className="menuIcon"
                    htmlFor="menu-btn"
                    style={{ color: "white" }}
                >
                    <span className="navicon"></span>
                </label>
                <ul className="menu">
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#experience">Experience</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#education">Education</a>
                    </li>
                    <li>
                        <a href="#contact">Contact Me</a>
                    </li>
                </ul>
            </header>
        </Headroom>
    )
}

export default Navbar