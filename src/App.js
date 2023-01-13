
import './App.css';
import {useEffect, useRef, useState} from "react";
import Home from './Home.js';
import Projects from './Projects.js';
import About from './About.js';
import Contact from './Contact.js';
import initials from './images/initials.png';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

function App() {
  const home = useRef(null);
  const work = useRef(null);
  const about = useRef(null);
  const contact = useRef(null);
  const buttLocation = useRef(null);
  const [open, setOpen] = useState(false);



  const buttonScroll = (e) => {
    if(e.target.className == "contact-span"){
      window.scrollTo({
        top: contact.current.offsetTop,
        behavior: 'smooth'
      });
    }else{
      window.scrollTo({
        top: work.current.offsetTop,
        behavior: 'smooth'
      });
    }
  }

  const [selectedTab, setSelectedTab] = useState(0);
  const toggleMobile = () =>{
    setOpen(!open);
    console.log(open);
  }
  return (
    <ParallaxProvider>
      <div className="App">
          <div className={open ? 'navbar-container open' : 'navbar-container'}>
              <div className="initials-container">
                  <img src={initials}/>
              </div>
              <div className="mobile-icon" onClick={() => toggleMobile()}>
                  <div></div>
                  <div></div>
                  <div></div>
              </div>
              <div className={open ? 'tab-container open' : 'tab-container'}>
                  <ul className="tabs">
                      <li className="tab" >
                          <Link activeClass="active" to="home" spy={true} smooth={true} duration={750} >
                            <span>Home</span>
                          </Link>
                      </li>
                      <li className="tab" >
                          <Link activeClass="active" to="work" spy={true} smooth={true} duration={750} >
                            <span>Work</span>
                          </Link>
                      </li>
                      <li className="tab" >
                          <Link activeClass="active" to="about" spy={true} smooth={true} duration={750} >
                            <span>About</span>
                          </Link>
                      </li>
                      <li className="tab">
                          <Link activeClass="active" to="contact" spy={true} smooth={true} duration={750} >
                            <span>Contact</span>
                          </Link>
                      </li>
                  </ul>
              </div>
          </div>
          <div name="home" className="home">
            <Parallax speed={-5}>
              <Home reference={home} />
            </Parallax>
          </div>
          <div name="work" className="work">
            <Parallax speed={5}>
              <Projects reference={work}/>
            </Parallax>
          </div>
          <div name="about" className="about">
            <Parallax speed={15}>
              <About reference={about}/>
            </Parallax>
          </div>
          <div name="contact" className="contact">
            <Parallax speed={30}>
            <Contact reference={contact}/>  
            </Parallax>
          </div>
          
      </div>
    </ParallaxProvider> 
        
  );
}

export default App;
