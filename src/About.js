import './styles/About.css';
import React, {useEffect, useState} from 'react';
import p2pic from './images/p2pic.png';
import { Parallax, useParallax } from 'react-scroll-parallax';

function About({reference, onClick}) {
    return (
            <div className="about-container" ref={reference}>
                <div className="image-container">
                    <img src={p2pic}/>
                </div>
                <div className="bio">
                    <h2>About Me</h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                    </p>
                </div>
                <div className="stars"></div>
            </div>  
    );
}

export default About;
