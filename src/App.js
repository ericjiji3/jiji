
import './App.css';
import Home from './Home.js';
import Projects from './Projects.js';
import Navbar from './Navbar.js';
import About from './About.js';
import Contact from './Contact.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Projects/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
