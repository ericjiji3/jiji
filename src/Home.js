import './styles/Home.css';
import Testimonials from './Testimonials.js';
import p1Pic from "./images/p1pic.png";
import linkedIn from "./images/icons/linkedIn.png";
import twitter from "./images/icons/twitter.png";
import github from "./images/icons/github.png";
import { Parallax} from 'react-scroll-parallax';
import { Link} from 'react-scroll';

function Home({reference, click}) {
    
    return (
        <div className="home-container" ref={reference}>
            
            <div className="column1">
                <Parallax translateX={['0vw', '-25vw']} opacity={[1,0]} startScroll={0} endScroll={1000}>
                <div className="heading">
                    <h3 className="name">ERIC JI</h3>
                    <h2 className="job">WEB DEVELOPER</h2>
                    <h3 className="job-description">Helping people turn their ideas and businesses into cool websites that work.</h3>
                </div>
                </Parallax>
                <Parallax translateX={['0vw', '-25vw']} opacity={[1,0]} startScroll={0} endScroll={1000}>
                <div className="buttons">
                    <div className="button-container" onClick={(e) => click(e)}>
                    <Link activeClass="active" to="contact" spy={true} smooth={true} duration={750} ><span className="button"><span className="contact-span">Hire Me</span></span></Link>
                    </div>
                    <div className="button-container" onClick={(e) => click(e)}>
                    <Link activeClass="active" to="work" spy={true} smooth={true} duration={750} ><span className="button two" ><span className="work-span">View my work</span></span></Link>
                    </div>
                </div>
                </Parallax>
                <Parallax translateX={['0vw', '-25vw']} opacity={[1,0]} startScroll={0} endScroll={1000}>
                <div className="socials">
                    <span className="twitter"><img src={twitter} alt="oops"/></span>
                    <span className="github"><img src={github} alt="oops"/></span>
                    <span className="linkedin"><img src={linkedIn} alt="oops"/></span>
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
