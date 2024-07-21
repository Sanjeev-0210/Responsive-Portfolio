import '../Styles/About.css'
import cv from '../Images/Sanjeev_CV.pdf'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

const About = () => {
    return (
        <div className="about">
            <h2>About Me</h2>
            <p>As a recent graduate with a strong foundation in Java Full Stack Development, I am eager to start my career in the tech industry. My academic background and hands-on project experience have equipped me with the skills necessary to build and maintain dynamic web applications.
            </p>
                <h3>Skills:</h3>
                <ul>
                    <li><b>Programming Languages: </b> Java, JavaScript, Python</li>
                    <li><b>Front-End Technologies: </b> HTML, CSS, ReactJS</li>
                    <li><b>Back-End Technologies: </b> Spring Boot, RESTful APIs</li>
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