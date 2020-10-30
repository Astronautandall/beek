// React
import React from "react";

// Third Party
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = ({ onMenuClick }) => {
    return (
        <nav className="ui fixed menu">
            <div className="navbar-title">Audiolibros</div>
            <div className="right menu navbar-menu-icon">
                <a href="#" onClick={onMenuClick}>
                    <FontAwesomeIcon icon={faBars} color="#262525" />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
