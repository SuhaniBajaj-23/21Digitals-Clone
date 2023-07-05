import "./index.css";
import one from "../../assets/Adidas.jpg"
import two from "../../assets/Honda.jpg"
import three from "../../assets/Layer.jpg"
import four from "../../assets/TheSIKHMEN.jpg"
import five from "../../assets/VirgiNMOBILE.jpg"
import six from "../../assets/dailies.jpg"
import seven from "../../assets/peuga.jpg"

const Sponser=()=>{
    return(
        <div className="sponsers">
            <div className="images">
                <img src={one} alt=""/>
                <img src={two} alt=""/>
                <img src={three} alt=""/>
                <img src={four} alt=""/>
                <img src={five} alt=""/>
                <img src={six} alt=""/>
                <img src={seven} alt=""/>
            </div>
            <div className="number">
               <b>27+</b> 
            </div>
        </div>
    );
}
export default Sponser;