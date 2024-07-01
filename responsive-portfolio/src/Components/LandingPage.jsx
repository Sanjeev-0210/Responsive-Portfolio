import '../Styles/LandingPage.css'
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
            <h1>Body</h1>
        </div>
        </div>
     );
}
 
export default LandingPage;