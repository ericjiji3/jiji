import './styles/Home.css';
import Testimonials from './Testimonials.js';
import p1Pic from "./images/p1pic.png";
import linkedIn from "./images/icons/linkedIn.png";
import twitter from "./images/icons/twitter.png";
import github from "./images/icons/github.png";
import ig from "./images/icons/ig.png";
import linktree from "./images/icons/linktree.png";
import twitch from "./images/icons/twitch.png";
import { Parallax} from 'react-scroll-parallax';
import { Link} from 'react-scroll';
import { useState, useEffect } from 'react';

function getWindowDimensions() {
    const { innerWidth: width } = window;
    return {
      width
    };
}
function useWindowDimensions() {
const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

useEffect(() => {
    function handleResize() {
    setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
}, []);

return windowDimensions;
}
  
function Home({reference, click}) {
    const {width} = useWindowDimensions();

    return (
        <div className="home-container" ref={reference}>
            
            <div className="column1">
                <Parallax translateX={['0vw', '-25vw']} opacity={[1,0]} startScroll={0} endScroll={1000}>
                <div className="heading">
                    <h3 className="name">JIJI</h3>
                    <h2 className="job">WEB DEVELOPER</h2>
                    <h3 className="job-description">Helping people turn their ideas and businesses into cool websites that work.</h3>
                </div>
                </Parallax>
                <Parallax translateX={['0vw', '-25vw']} opacity={[1,0]} startScroll={0} endScroll={1000}>
                <div className="buttons">
                    <div className="button-container" onClick={(e) => click(e)}>
                    <Link activeClass="active" to="contact" spy={true} smooth={true} duration={750} delay={width < 850 ? 800 : 200}><span className='button'><span className="contact-span">Hire Me</span></span></Link>
                    </div>
                    <div className="button-container" onClick={(e) => click(e)}>
                    <Link activeClass="active" to="work" spy={true} smooth={true} duration={750} ><span className="button two" ><span className="work-span">View my work</span></span></Link>
                    </div>
                </div>
                </Parallax>
                <Parallax translateX={['0vw', '-25vw']} opacity={[1,0]} startScroll={0} endScroll={1000}>
                <div className="socials">
                    <a className="ig" href="https://www.instagram.com/jiji.web/"  rel="noreferrer"><img src={ig} alt="oops"/></a>
                    <a className="twitch" href="https://www.twitch.tv/dj_ji3" target="_blank" rel="noreferrer"><img src={twitch} alt="oops"/></a>
                    <a className="linktree" href="https://linktr.ee/jijiweb" target="_blank" rel="noreferrer"><img src={linktree} alt="oops"/></a>
                    <a className="github" href="https://github.com/ericjiji3" target="_blank" rel="noreferrer"><img src={github} alt="oops"/></a>
                    <a className="linkedin" href="https://www.linkedin.com/in/eric-ji-b96775192/" target="_blank" rel="noreferrer"><img src={linkedIn} alt="oops"/></a>
                </div>
                </Parallax>
            </div>
            
            
                <div className="column2">
                        <Parallax translateX={['0vw', '25vw']} opacity={[1,0]} startScroll={0} endScroll={1000}>
                            <img src={p1Pic} alt="oops"/>
                        </Parallax>
                </div>
           
            
            <Testimonials/>
        </div>
    );
}

export default Home;
