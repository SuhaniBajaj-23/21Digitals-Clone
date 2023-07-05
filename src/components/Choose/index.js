import "./index.css"
import Reason from '../Reason';
import one from '../../assets/1.png';
import two from '../../assets/2.png';
import three from '../../assets/3.png';
import four from '../../assets/4.png';
import five from '../../assets/5.png';
import {HiLightBulb} from "react-icons/hi";


const Choose = ()=>{
    return(
     <div className="choose">
        <div className="head">
            Why Choose 91Digitals ?
        </div>
        <div className="heading">
            Our Innovative Team To Deliver End to End Solutions
        </div>
        <div className="tag">
            We have a good experience in building brands. Because we operate in a collaborative setting with innovative and creative ideas, to evaluate original concepts against analytics explanations to make your business the next big thing.
        </div>
        <div className="reasons">
        <Reason icon={one} name="One to one discussion"/>
        <Reason icon={two} name="Project Briefing"/>
        <Reason icon={three} name="Brand Strategy"/>
        <Reason icon={four} name="Design and Creativity"/>
        <Reason icon={five} name="Review and Launch"/>
        </div>
        
        
     </div>
    );
}

export default Choose;