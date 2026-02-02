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
                    <h2>Jun 2015 - Apr 2016</h2>
                    <h3>SSLC</h3>
                    <p><span>State Board of Tamilnadu</span>
                        Percentage: 91% <br />
                        Through my SSLC with a strong academic record, gaining a solid foundation in core subjects such as mathematics,
                        science, and languages, which prepared me for advanced studies and helped develop my analytical and problem-solving skills.</p>
                </div>
                <div>
                    <h2>Jun 2017 - Apr 2018</h2>
                    <h3>HSC</h3>
                    <p><span>State Board of Tamilnadu</span>
                        Percentage: 76.5% <br />
                        Through my HSC studies provided a strong foundation in subjects like Mathematics, Science, and English, where I developed critical thinking and analytical skills, preparing me for higher education and future career challenges.</p>
                </div>
                <div>
                    <h2>Aug 2018 - Jul 2022</h2>
                    <h3>B.E Computer Science and Engineering</h3>
                    <p><span>Anna University</span>
                        Percentage: 78.5% <br />
                        Through my degree in Computer Science and Engineering, where I gained in-depth knowledge and hands-on experience in programming,
                        algorithms, data structures, software development, and system design, equipping me with the technical and problem-solving skills essential for the tech industry.</p>
                </div>
                <div>
                    <h2>Jan 2023 - Jun 2023</h2>
                    <h3>Business Development Associate</h3>
                    <p><span>Byju's-Think & Learn Pvt ltd, Salem</span> <br />
                        Developing and executing strategic sales plans, Growing existing accounts.
                        Identifying and developing new business opportunities. Documenting the sales process and closing.
                        Creating proposals and presentation material.
                        Providing support to the sales team on all aspects of the sales process. Managing customer relationships.</p>
                </div>
                <div>
                    <h2>Jul 2023 - Jun 2024</h2>
                    <h3>Java Full Stack Development</h3>
                    <p><span>JSpiders, Bangalore</span> <br />
                        Through my professional course in Java Full Stack Development, I gained proficiency in front-end technologies like HTML, CSS, and JavaScript, alongside back-end skills in Java,
                        Spring Boot, and database management, enabling me to develop robust and scalable web applications.</p>
                </div>
                <div>
                    <h2>Jul 2024 - Nov 2024</h2>
                    <h3>Software Developer</h3>
                    <p><span>Codentrix Technologies, Chennai</span> <br />
                        During my internship, Developed web pages with HTML, CSS, and JavaScript, and back-end services with Python and .NET. Managed MySQL databases and used Git for version control. 
                        Contributed to projects like an inventory management system and an e-commerce platform.</p>
                </div>
                <div>
                    <h2>Nov 2024 - Present</h2>
                    <h3>Systems Engineer</h3>
                    <p><span>Infosys</span> <br />
                        Develop and customize business applications using Microsoft Dynamics 365 and .NET, ensuring scalable and efficient solutions. Collaborate with teams to design, implement, and maintain enterprise-level features.</p>
                </div>
            </div>
            <a href={cv} download="Sanjeev_CV.pdf"><button>Download CV <CloudDownloadIcon style={{ height: "20px" }} /></button></a>
        </div>
    );
}

export default Resume;