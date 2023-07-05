import "./index.css"
import logo from "../../assets/logo.png"
import yt from "../../assets/yt.jpg"
import behance from "../../assets/behance.jpg"
import insta from "../../assets/insta.jpg"
import linkedin from "../../assets/linkedin.jpg"
import twitter from "../../assets/twitter.jpg"


const Footer=()=>{
    return(
        <div className="footer">
            <div className="upper">
                <div className="upperleft">
                <img src={logo} alt="" className="logo"/>
                <p>A Full Stack Creative Digital Marketing Agency For Your Business - Simple | Minimal | Effective</p>
                <div className="socials">
                    <a href="https://www.youtube.com/channel/UCD9sYmrqyaoflSkvvfEzD3Q"><img src={yt} alt=""/></a>
                    <a href="https://www.instagram.com/91.digitals/"><img src={insta} alt=""/></a>
                    <a href="https://www.linkedin.com/company/91digitals/"><img src={linkedin} alt=""/></a>
                    <a href="https://twitter.com/91_digitals"><img src={twitter} alt=""/></a>
                    <a href="https://www.behance.net/91digitals"><img src={behance} alt=""/></a>
                </div>

                </div>
                <div className="v2">
                </div>
                <div className="upperright">
                    <div className="service">
                        <h2>Services</h2>
                        <p>Graphic Designing</p>
                        <p>Motion Graphics</p>
                        <p>Video Editing</p>
                        <p>Social Media</p>
                        <p>Web/App Dev</p>
                        <p>Branding</p>
                    </div>
                    <div className="resources">
                        <h2>Resources</h2>
                        <p>Blog</p>
                        <p>About Us</p>
                        <p>Portfolio</p>
                        <p>Career page</p>
                    </div>
                        
                    <div className="support">
                        <h2>Support</h2>
                        <p>Contact Us</p>
                        <p>Privacy Policy</p>
                        <p>Terms of use</p>
                    </div>
                        
                </div>
            </div>
            <hr/>
            <div className="lower">
            <p>© 2022 <b>91Digitals</b> . All rights reserved</p>
            </div>

        </div>
    );
}

export default Footer;