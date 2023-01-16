import './styles/About.css';
import React, {useEffect, useState, useRef} from 'react';
import p2pic from './images/p2pic.png';
import p22pic from './images/p22pic.png';

function About({reference, onClick}) {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        const callbackFunction = (entries) => {
            const [entry] = entries;
            setIsVisible(entry.isIntersecting);
        }
        const observer = new IntersectionObserver(callbackFunction, {
            root: null,
            rootMargin: '0px',
            threshold: 0.25
        })
        const observedEl = containerRef.current
        if(observedEl){
            observer.observe(observedEl);
        }
        return () => {
            if(observedEl){
                observer.unobserve(observedEl)
            }
        }
    }, [containerRef])

    
    return (
            <div className="about-container" ref={reference}>
                <div className={isVisible ? 'image-container animate' : 'image-container'} ref={containerRef}>
                    <img className="pic1" src={p2pic} alt="oops"/>
                    <img className="pic2" src={p22pic} alt="oops"/>
                </div>
                
                <div className={isVisible ? 'bio animate' : 'bio'}>
                    <h2>About Me</h2>
                    <p>
                    Hello ! I am a 23 year old web developer currently based in Austin, Texas. I was raised in houston, texas for most of my childhood, and ended up going to school at the university of texas at austin. I graduated in 2021, and have been working in Austin since. In my free time, I like playing video games such as Valorant or Minecraft, and breaking (my) ankles on the basketball court. Oh, and I also really enjoy making websites ! Whether its for a business or an individual, helping people make their dream or idea into a reality is something I take pride in. Lets make something cool together !
                    </p>
                </div>
                <div className="stars"></div>
            </div>  
    );
}

export default About;
