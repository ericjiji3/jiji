
import './App.css';
import {useRef, useState} from "react";
import Home from './Home.js';
import Projects from './Projects.js';
import About from './About.js';
import Contact from './Contact.js';
import initials from './images/initials.png';

function App() {
  const home = useRef(null);
  const work = useRef(null);
  const about = useRef(null);
  const contact = useRef(null);
  const buttLocation = useRef(null);
  const [open, setOpen] = useState(false);

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
  const toggleMobile = () =>{
    setOpen(!open);
    console.log(open);
  }
  return (
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
