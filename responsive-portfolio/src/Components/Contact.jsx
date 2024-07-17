import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import '../Styles/Contact.css'
// import Image2 from '../Images/Image2.png'
import {useState} from 'react'
import axios from 'axios'

const Contact = () => {

    let[name,setname] = useState('')
    let[email,setemail] = useState('')
    let[subject,setsubject] = useState('')
    let[message,setmessage] = useState('')

    let data = [name,email,subject,message]

    function sendmail(e){
        e.preventDefault();
        axios.post(`http://localhost:8080/api/send-mail`,data)
        .then((res)=>{
            console.log(res.data);
            alert('Mail Sent Successfully!!!')
        })
        .catch((err)=>{
            console.log(err);
            alert('Error Occured, Please Enter the valid Message!!!')
        })
    }

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
                    {/* <img src={Image2} alt="" /> */}
                </div>
                <div id="msg">
                    <form onSubmit={sendmail}>
                    <input value={name} onChange={e=>{setname(e.target.value)}} type="text" placeholder='Your Name' required/> <br />
                    <input value={email} onChange={e=>{setemail(e.target.value)}} type="text" placeholder='Your Email' required/> <br />
                    <input value={subject} onChange={e=>{setsubject(e.target.value)}} type="text" placeholder='Subject' required/> <br />
                    <textarea value={message} onChange={e=>{setmessage(e.target.value)}} cols="55" rows="10" placeholder='Message...' required/> <br />
                    <button>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;