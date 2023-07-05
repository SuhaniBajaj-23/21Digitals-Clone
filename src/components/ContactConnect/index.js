import "./index.css";
import yt from "../../assets/yt.jpg"
import behance from "../../assets/behance.jpg"
import insta from "../../assets/insta.jpg"
import linkedin from "../../assets/linkedin.jpg"
import twitter from "../../assets/twitter.jpg"
import { Map } from '@googlemaps/react-wrapper'

const ContactConnect = ()=>{
    return(
        <div className="contactconnect">
            <div className="heading">
            Connect With Us on Social Media
            </div>
            <div className="content">
            Follow us on social media and stay up to date with our latest creative updates
            </div>
            <div className="socials">
                <img src={yt} alt=""/>
                <div className="vertical"></div>
                <img src={behance} alt=""/>
                <div className="vertical"></div>
                <img src={insta} alt=""/>
                <div className="vertical"></div>
                <img src={linkedin} alt=""/>
                <div className="vertical"></div>
                <img src={twitter} alt=""/>
            </div>
        </div>
    );
}

export default ContactConnect;