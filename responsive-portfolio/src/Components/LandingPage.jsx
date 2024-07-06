import '../Styles/LandingPage.css'
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
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
            <div id="about"><About/></div>
            <div id='resume'><Resume/></div>
            <div id="skills"><Skills/></div>
            <div id="projects"><Project/></div>
            <div id="contact"><Contact/></div>
            <hr className='line'/>
            <div id="footer"><Footer/></div>
        </div>
        </div>
     );
}
 
export default LandingPage;