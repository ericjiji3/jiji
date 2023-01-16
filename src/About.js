import './styles/About.css';
import React, {useEffect, useState, useRef} from 'react';
import p2pic from './images/p2pic.png';

function About({reference, onClick}) {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    
    const options ={
        root: null,
        rootMargin: '0px',
        threshold: 0.25
    }
    useEffect(() => {
        const callbackFunction = (entries) => {
            const [entry] = entries;
            setIsVisible(entry.isIntersecting);
        }
        const observer = new IntersectionObserver(callbackFunction, options)
        const observedEl = containerRef.current
        if(observedEl){
            observer.observe(observedEl);
        }
        return () => {
            if(observedEl){
                observer.unobserve(observedEl)
            }
        }
    }, [containerRef, options])

    
    return (
            <div className="about-container" ref={reference}>
                <div className={isVisible ? 'image-container animate' : 'image-container'} ref={containerRef}>
                    <img src={p2pic} alt="oops"/>
                </div>
                
                <div className={isVisible ? 'bio animate' : 'bio'}>
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
