import './styles/Home.css';
import Testimonials from './Testimonials.js';
import p1Pic from "./images/p1pic.png";
import linkedIn from "./images/icons/linkedIn.png";
import twitter from "./images/icons/twitter.png";
import github from "./images/icons/github.png";

function Home() {
  return (
    <div className="home-container">
        <div className="column1">
            <div className="heading">
                <h3 className="name">ERIC JI</h3>
                <h2 className="job">FREELANCE WEB DEVELOPER</h2>
                <h3 className="job-description">Helping people turn their ideas and businesses into cool websites that work.</h3>
            </div>
            <div className="buttons">
                <div className="button-container">
                    <a className="button"><span>Hire Me</span></a>
                </div>
                <div className="button-container">
                    <a className="button"><span>View my work</span></a>
                </div>
            </div>
            <div className="socials">
                <a className="twitter"><img src={twitter}/></a>
                <a className="github"><img src={github}/></a>
                <a className="linkedin"><img src={linkedIn}/></a>
            </div>
        </div>
        <div className="column2">
            <img src={p1Pic}/>
        </div>
        <Testimonials/>
    </div>
  );
}

export default Home;
