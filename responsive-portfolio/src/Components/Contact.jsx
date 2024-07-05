import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import '../Styles/Contact.css'

const Contact = () => {
    return (
        <div className="contact">
            <h1>Contact Me</h1>
            <i>~Let's Connect</i>
            <div id="content">
                <div><LocationOnIcon />
                    <p>TN, India</p> </div>
                <div><PhoneIcon />
                    <p>+91-9500366015</p></div>
                <div><EmailIcon />
                    <p>sanjeev0210c@gmail.com</p></div>
                <div><LanguageIcon />
                    <p>Portfolio.</p></div>
            </div>
        </div>
    );
}

export default Contact;