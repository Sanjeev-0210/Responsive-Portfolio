import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import '../Styles/Footer.css'

const Footer = () => {
    return ( 
        <div className="footer">
            <div id="socialmedia">
            <a href="https://www.instagram.com/_seeking_4_u_bby_/?utm_medium=copy_link" target="_blank" rel="noreferrer"><InstagramIcon className='icon' /></a>  
                <a href="https://www.linkedin.com/in/sanjeev-c-915447214" target="_blank" rel="noreferrer"><LinkedInIcon className='icon' /></a>  
                <a href="https://github.com/Sanjeev-0210" target="_blank" rel="noreferrer"><GitHubIcon className='icon' /></a>    
                <a href="https://wa.me/qr/FEJLL43N4Y3YI1" target="_blank" rel="noreferrer"><WhatsAppIcon className='icon' /></a>  
            </div>
            <div id="copyright">
            <span>Copyright &copy; 2026 SanjeevC0210. All rights reserved.</span>
            </div>
        </div>
     );
}
 
export default Footer;