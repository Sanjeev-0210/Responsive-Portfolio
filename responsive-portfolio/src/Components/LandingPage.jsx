import '../Styles/LandingPage.css'
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Project from './Project';
import Resume from './Resume';
import Skills from './Skills';
const LandingPage = () => {
    return ( 
        <div className="landingpage">
        <div className="navbar">
            <div id='logo'><h2>sanjeev.</h2></div>
            <div id='links'>
                <a href='#home'>Home</a>
                <a href='#about'>About</a>
                <a href='#resume'>Resume</a>
                <a href='#skills'>Skills</a>
                <a href='#projects'>Projects</a>
                <a href='#contact'>Contact</a>
            </div>
        </div>
        <div className="container">
            <div id='home'><Home/></div>
            <hr className='line'/>
            <div id="about"><About/></div>
            <hr className='line'/>
            <div id='resume'><Resume/></div>
            <hr className='line'/>
            <div id="skills"><Skills/></div>
            <hr className='line'/>
            <div id="projects"><Project/></div>
            <hr className='line'/>
            <div id="contact"><Contact/></div>
        </div>
        </div>
     );
}
 
export default LandingPage;