import "./index.css"
import ServiceCard from "../ServiceCard";
import {BsVectorPen,BsChatSquareHeartFill} from "react-icons/bs";
import {MdOutlineAutoAwesomeMotion} from "react-icons/md"
import {FaPhotoVideo,FaFileCode} from "react-icons/fa";

const Services = ()=>{
    return(
        <section id="services">
     <div className="services" >
        <div className="head">
            Our Services
        </div>
        <div className="heading">
            Creative Solutions for your Business
        </div>
        <div className="tag">
        Just tell us about your business, we are here to help you out with our creative Digital marketing solutions
        </div>
        <div className="service-cards">
            <ServiceCard icon=<BsVectorPen size={50}/> name="Graphic Designing" description="Our prolific creative team works on all aspects of Graphics design from print to digital media with Innovative Branding & Visual Identity strategy."/>
            <ServiceCard icon=<MdOutlineAutoAwesomeMotion size={50}/> name="Motion Graphics" description="we provide a great deal of data in a short, simple, visually appealing video to grab and hold the viewer's attention with the help of creative motion graphics."/>
            <ServiceCard icon=<FaPhotoVideo size={50}/> name="Video Editing" description="Businesses using video grow company revenue 49% faster, Keeping this fact in mind to represent your business, we create videos that users enjoy with interest."/>
            <ServiceCard icon=<BsChatSquareHeartFill size={50}/> name="Social Media" description="By utilizing our unique social media marketing strategies, your brand will navigate the digital landscape and reach untapped markets."/>
            <ServiceCard icon=<FaFileCode size={50}/> name="Design & Development" description="we ensure a dynamic and versatile approach through a series of carefully articulated strategies for UI and UX Design that win users' hearts."/>
            <ServiceCard icon=<MdOutlineAutoAwesomeMotion size={50}/> name="SEO" description="With our white-hat SEO techniques and latest SEO techniques, we can help you to increase the visibility of your website in search engines."/>
        </div>
     </div>
     </section>
    );
}

export default Services;