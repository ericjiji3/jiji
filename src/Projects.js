import './styles/Projects.css';
import React, {useEffect, useState} from 'react';
import tsz from './images/projects/360connect.jpg';
import jordon from './images/projects/jordon.jpeg';
import southcloud from './images/projects/southcloud.jpg';
import mahone from './images/projects/mahone.jpg';
import speech from './images/speechBubble.png';

function Projects() {
    return (
        <div className="projects-container">
            <h2 className="header">Work</h2>
            <div className="project1">
                <div className="speech-bubble">
                    <img src={speech}/>
                    <span>
                        Jordon
                    </span>
                </div>
            </div>
            <div className="project2">
                <div className="speech-bubble">
                    <img src={speech}/>
                    <span>
                        SouthCloud Ramen
                    </span>
                </div>
            </div>
            <div className="project3">
                <div className="speech-bubble">
                    <img src={speech}/>
                    <span>
                        360Connect
                    </span>
                </div>
            </div>
            <div className="project4">
                <div className="speech-bubble">
                    <img src={speech}/>
                    <span>
                        Austin Mahone
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Projects;
