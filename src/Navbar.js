import './styles/Navbar.css';
import React, {useEffect, useState} from 'react';
import logo from './images/logo.png';

function Navbar() {
    return (
        <div className="navbar-container">
            <div className="initials-container">
                <img src={logo}/>
            </div>
            <div className="tab-container">
                <ul className="tabs">
                    <li className="tab">
                        <span>Home</span>
                    </li>
                    <li className="tab">
                        <span>Work</span>
                    </li>
                    <li className="tab">
                        <span>About</span>
                    </li>
                    <li className="tab">
                        <span>Contact</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
