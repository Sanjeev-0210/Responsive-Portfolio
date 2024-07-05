import '../Styles/Project.css'

const Project = () => {

    return ( 
        <div className="project">
            <h1>My Projects</h1>
            <i>"The only way to do great work is to love what you do." - Steve Jobs</i>
            <div id="container">
            <div>
                <div id="foodcart">
                    <div id="sub-content">
                        <h2><a href="https://foodcart-reactjs.netlify.app/" target='blank'>Food Cart</a></h2>
                        <p>Web Application</p>
                    </div>
                </div>
                <div id="busapp">
                <div id="sub-content">
                        <h2><a href="https://github.com/Sanjeev-0210/Reservation-App" target='blank'>Bus Reservation App</a></h2>
                        <p>Web Application</p>
                    </div></div> 
            </div>
            <div>
                <div id="portfolio">
                <div id="sub-content">
                        <h2><a href="https://sanjeev0210c-portfolio.netlify.app/" target='blank'>Portfolio</a></h2>
                        <p>Web Application</p>
                    </div>
                </div>
                <div id="audi">
                <div id="sub-content">
                        <h2><a href="https://github.com/Sanjeev-0210/Audi-Clone-" target='-blank'>Audi Website</a></h2>
                        <p>Clone Website</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
     );
}
 
export default Project;