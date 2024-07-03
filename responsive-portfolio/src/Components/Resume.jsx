import '../Styles/Resume.css'
import cv from '../Images/Sanjeev_CV.pdf'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

const Resume = () => {
    return (
        <div className="resume">
            <h1>Resume</h1>
            <i>"The only limit to our realization of tomorrow is our doubts of today." - Franklin D. Roosevelt</i>
            <div id="container">
                <div>
                    <h2>2015-2016</h2>
                    <h3>SSLC</h3>
                    <p><span>State Board of Tamilnadu</span> 
                        Percentage: 91% <br />
                        Through my SSLC with a strong academic record, gaining a solid foundation in core subjects such as mathematics, 
                        science, and languages, which prepared me for advanced studies and helped develop my analytical and problem-solving skills.</p>
                </div>
                <div>
                <h2>2017-2018</h2>
                    <h3>HSC</h3>
                    <p><span>State Board of Tamilnadu</span>
                        Percentage: 76.5% <br />
                        Through my HSC studies provided a strong foundation in subjects like Mathematics, Science, and English, where I developed critical thinking and analytical skills, preparing me for higher education and future career challenges.</p>
                </div>
                <div>
                <h2>2018-2022</h2>
                    <h3>B.E Computer Science and Engineering</h3>
                    <p><span>Anna University</span>
                        Percentage: 78.5% <br />
                        Through my degree in Computer Science and Engineering, where I gained in-depth knowledge and hands-on experience in programming, 
                        algorithms, data structures, software development, and system design, equipping me with the technical and problem-solving skills essential for the tech industry.</p>
                </div>
                <div>
                <h2>2023-2024</h2>
                    <h3>Java Full Stack Development</h3>
                    <p><span>JSpiders,Bangalore</span> <br />
                    Through my professional course in Java Full Stack Development, I gained proficiency in front-end technologies like HTML, CSS, and JavaScript, alongside back-end skills in Java, 
                    Spring Boot, and database management, enabling me to develop robust and scalable web applications.</p>
                </div>
            </div>
            <a href={cv} download="Sanjeev_CV.pdf"><button>Download CV <CloudDownloadIcon style={{height:"20px"}}/></button></a>
        </div>
    );
}

export default Resume;