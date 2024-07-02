import '../Styles/LandingPage.css'
import About from './About';
import Home from './Home';
const LandingPage = () => {
    return ( 
        <div className="landingpage">
        <div className="navbar">
            <div id='logo'><h2>sanjeev.</h2></div>
            <div id='links'>
                <a href=''>Home</a>
                <a href=''>About</a>
                <a href=''>Resume</a>
                <a href=''>Skills</a>
                <a href=''>Projects</a>
                <a href=''>Contact</a>
            </div>
        </div>
        <div className="container">
            <div id='home'><Home/></div>
            <hr className='line'/>
            <div id="about"><About/></div>
            <hr className='line'/>
        </div>
        </div>
     );
}
 
export default LandingPage;