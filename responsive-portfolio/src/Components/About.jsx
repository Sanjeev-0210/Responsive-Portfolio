import '../Styles/About.css'
import cv from '../Images/Sanjeev_CV.pdf'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

const About = () => {
    return (
        <div className="about">
            <h2>About Me</h2>
            <p>As a tech professional with a strong foundation in Microsoft Dynamics 365, Power Platform, and Full Stack Development, I focus on building scalable, reliable, and business-driven applications. My academic background and hands-on experience have equipped me with the skills to design, develop, and maintain modern business and web applications.
            </p>
                <h3>Skills:</h3>
                <ul>
                    <li><b>Programming Languages: </b> Java, C#, JavaScript, Python</li>
                    <li><b>Front-End Technologies: </b> HTML, CSS, ReactJS, Angular</li>
                    <li><b>Back-End Technologies: </b> ASP.Net, Spring Boot, RESTful APIs</li>
                    <li><b>Database Management: </b> MySQL</li>
                    <li><b>Version Control: </b> Git</li>
                </ul>
                <p>
                I am passionate about coding and continually learning new technologies to enhance my skill set. I thrive in collaborative environments and am excited to contribute to innovative projects. Let's connect and discuss how I can bring value to your team!
                <br />
                <a href={cv} download="Sanjeev_CV.pdf"><button>Download CV <CloudDownloadIcon style={{height:"20px"}}/></button></a>
                </p>
            
        </div>
    );
}

export default About;