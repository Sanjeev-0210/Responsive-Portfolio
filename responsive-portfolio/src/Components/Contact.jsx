import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import '../Styles/Contact.css'
import Image2 from '../Images/Image2.png'

const Contact = () => {
    return (
        <div className="contact">
            <h1>Contact Me</h1>
            <i>~Let's Connect</i>
            <div id="content">
                <div><LocationOnIcon className='icon'/>
                <h3>ADDRESS</h3>
                    <p>TN, India</p> </div>
                <div><PhoneIcon className='icon'/>
                <h3>CONTACT NUMBER</h3>
                    <p>+91-9500366015</p></div>
                <div><EmailIcon className='icon'/>
                <h3>EMAIL ADDRESS</h3>
                    <p>sanjeev0210c@gmail.com</p></div>
                <div><LanguageIcon className='icon'/>
                <h3>WEBSITE</h3>
                    <a href='https://sanjeev0210c-portfolio.netlify.app/' target='blank' style={{color:"grey"}}>Portfolio.</a></div>
            </div>
            <div id="msg-box">
                <div id="img">
                    <img src={Image2} alt="" />
                </div>
                <div id="msg">
                    <form action="">
                    <input type="text" placeholder='Your Name' required/> <br />
                    <input type="text" placeholder='Your Email' required/> <br />
                    <input type="text" placeholder='Subject' required/> <br />
                    <textarea cols="55" rows="10" placeholder='Message...' required/> <br />
                    <button>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;