import '../Styles/LandingPage.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Home from './Home';
import Project from './Project';
import Resume from './Resume';
import Skills from './Skills';
import { useState } from 'react';

const LandingPage = () => {

    const [showLinks, setShowLinks] = useState(false);

    const handleShowLinks = () => {
        setShowLinks(true);
    };
    const handleCloseLinks = () => {
        setShowLinks(false);
    };

    return (
        <div className="landingpage">
            <div className="navbar">
                <div id='logo'><h2><a href="#home">sanjeev.</a></h2></div>
                <div id='links'>
                    <a href='#home'>Home</a>
                    <a href='#about'>About</a>
                    <a href='#resume'>Resume</a>
                    <a href='#skills'>Skills</a>
                    <a href='#projects'>Projects</a>
                    <a href='#contact'>Contact</a>
                </div>
                <div id='menu'>
                    <p onClick={handleShowLinks}><MenuIcon /></p>
                    {showLinks && (
                        <div id="scr_links">
                            <span onClick={handleCloseLinks}><CloseIcon /></span>
                            <p><a href='#home' onClick={handleCloseLinks}>Home</a></p>
                            <p><a href='#about' onClick={handleCloseLinks}>About</a></p>
                            <p><a href='#resume' onClick={handleCloseLinks}>Resume</a></p>
                            <p><a href='#skills' onClick={handleCloseLinks}>Skills</a></p>
                            <p><a href='#projects' onClick={handleCloseLinks}>Projects</a></p>
                            <p><a href='#contact' onClick={handleCloseLinks}>Contact</a></p>
                        </div>
                    )}
                </div>
            </div>
            <div className="container">
                <div id='home'><Home /></div>
                <div id="about"><About /></div>
                <div id='resume'><Resume /></div>
                <div id="skills"><Skills /></div>
                <div id="projects"><Project /></div>
                <div id="contact"><Contact /></div>
                <hr className='line' />
                <div id="footer"><Footer /></div>
            </div>
        </div>
    );
}

export default LandingPage;