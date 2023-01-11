
import './App.css';
import {useRef} from "react";
import Home from './Home.js';
import Projects from './Projects.js';
import Navbar from './Navbar.js';
import About from './About.js';
import Contact from './Contact.js';
import initials from './images/initials.png';

function App() {
  const home = useRef(null);
  const work = useRef(null);
  const about = useRef(null);
  const contact = useRef(null);
  const buttLocation = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    });
  }
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
  return (
    <div className="App">
      <div className="navbar-container">
            <div className="initials-container">
                <img src={initials}/>
            </div>
            <div className="tab-container">
                <ul className="tabs">
                    <li className="tab" onClick={() => scrollToSection(home)}>
                        <span>Home</span>
                    </li>
                    <li className="tab" onClick={() => scrollToSection(work)}>
                        <span>Work</span>
                    </li>
                    <li className="tab" onClick={() => scrollToSection(about)}>
                        <span>About</span>
                    </li>
                    <li className="tab" onClick={() => scrollToSection(contact)}>
                        <span>Contact</span>
                    </li>
                </ul>
            </div>
        </div>
        <Home reference={home} click={(e) => buttonScroll(e)}/>
        <Projects reference={work}/>
        <About reference={about}/>
        <Contact reference={contact}/>
    </div>
  );
}

export default App;
