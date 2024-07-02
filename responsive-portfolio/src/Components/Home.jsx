import Image from '../Images/Image.png'
import '../Styles/Home.css'

const Home = () => {

    // let text=document.querySelector(".sec-text");

    // let textchange=()=>{
    //     setTimeout(() => {
    //         text.innerText="Software Developer"
    //     }, 0);
    //     setTimeout(() => {
    //         text.innerText="Web Developer"
    //     }, 4000);
    //     setTimeout(() => {
    //         text.innerText="Java Developer"
    //     }, 8000);
    //     setTimeout(() => {
    //         text.innerText="Web Designer"
    //     }, 12000);
        
    // };
    // textchange();
    // setInterval(textchange, 16000);

    return ( 
        <div className="home">
            <div className="content">
                <div>
                <h5>Hello!</h5>
                <h1>I'm <span>Sanjeev</span></h1>
                <h3><span className="text sec-text">Software </span>Developer</h3>
                </div>
                <div>
                    <button>Hire me</button>
                    <button id='btn2'>About me</button>
                </div>
            </div>
            <div id="img">
                <img src={Image} alt="" height='650vh'/>
            </div>
        </div>
     );
}
 
export default Home;