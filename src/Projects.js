import './styles/Projects.css';
import React, {useEffect, useState, useRef} from 'react';
import speech from './images/speechBubble.png';

function Projects({reference, onClick}) {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const callbackFunction = (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
    }

    useEffect(() => {
        
        const observer = new IntersectionObserver(callbackFunction, {
            root: null,
            rootMargin: '5px',
            threshold: .35
        })
        const observedWork = containerRef.current;
        if(observedWork){
            observer.observe(observedWork);
        }
        return () => {
            if(observedWork){
                observer.unobserve(observedWork)
            }
        }
    }, [containerRef])
    return (
            <div className="projects-container" ref={reference}>
                <h2 className={isVisible ? 'header animate' : 'header'} >Work</h2>
                <div className={isVisible ? 'projects animate' : 'projects'} ref={containerRef}> 
                    <a className="project-container one grid-col-1" href="https://jordonalva.com/" target="_blank" rel="noreferrer">
                        <span className="border-animate"></span>
                        <div className="project1">
                        <div className="speech-bubble medium">
                            <img src={speech} alt="oops"/>
                            <span>
                                Jordon
                            </span>
                        </div>
                        </div>
                    </a>
                    
                    <a className="project-container two grid-col-1" href="https://southcloudramen.com/" target="_blank" rel="noreferrer">
                        <span className="border-animate"></span>
                        <div className="project2">
                            <div className="speech-bubble medium2">
                                <img src={speech} alt="oops"/>
                                <span>
                                    SouthCloud Ramen
                                </span>
                            </div>
                            
                        </div>
                    </a>
                
                    
                    
                    <a className="project-container three grid-row-2" href="https://www.360connect.com/" target="_blank" rel="noreferrer">
                        <span className="border-animate"></span>
                        <div className="project3">
                            <div className="speech-bubble large">
                                <img src={speech} alt="oops"/>
                                <span>
                                    360 Connect
                                </span>
                            </div>
                        </div>
                    </a>

                    
                    

                    <a className="project-container four grid-col-2" href="https://austinmahone.com/" target="_blank" rel="noreferrer">
                        <span className="border-animate"></span>
                        <div className="project4">
                        <div className="speech-bubble large2">
                            <img src={speech} alt="oops"/>
                            <span>
                                Austin Mahone
                            </span>
                        </div>
                        </div>
                    </a>

                    <a className="project-container five grid-row-2" href="https://mid22.com/" target="_blank" rel="noreferrer">
                        <span className="border-animate"></span>
                        <div className="project5">
                        <div className="speech-bubble medium3">
                            <img src={speech} alt="oops"/>
                            <span>
                                Studio MiD 22
                            </span>
                        </div>
                        </div>
                    </a>

                    <a className="project-container six grid-col-1" href="https://www.scord.app/" target="_blank" rel="noreferrer">
                        <span className="border-animate"></span>
                        <div className="project6">
                        <div className="speech-bubble medium">
                            <img src={speech} alt="oops"/>
                            <span>
                                Scord
                            </span>
                        </div>
                        </div>
                    </a>

                    <a className="project-container seven grid-col-1" href="https://ericji3333.wixsite.com/texbox-llc" target="_blank" rel="noreferrer">
                        <span className="border-animate"></span>
                        <div className="project7">
                        <div className="speech-bubble medium2">
                            <img src={speech} alt="oops"/>
                            <span>
                                Texbox
                            </span>
                        </div>
                        </div>
                    </a>

                    <a className="project-container eight grid-col-2" href="https://ericji3333.wixsite.com/fresh-heim" target="_blank" rel="noreferrer">
                        <span className="border-animate"></span>
                        <div className="project8">
                        <div className="speech-bubble large2">
                            <img src={speech} alt="oops"/>
                            <span>
                                Fresh Heim
                            </span>
                        </div>
                        </div>
                    </a>


                    
                </div>
                
            </div>
        
    );
}

export default Projects;
