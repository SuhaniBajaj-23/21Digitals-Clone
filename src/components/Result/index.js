import "./index.css";
import ServiceItem from "../ServiceItem";
import MovingBox from "../MovingBox";
import one from "../../assets/graphicdesigning.png"
import two from "../../assets/motiongraphic.png";
import three from "../../assets/motiongraphic.png";
import four from "../../assets/videoediting.png";
import five from "../../assets/webappdev.png";
import six from "../../assets/socialmediamar.png";

import icon1 from "../../assets/download (3).png";
import icon2 from "../../assets/download (2).png";
import icon3 from "../../assets/download (1).png";
import icon4 from "../../assets/download.png";

function Result(){
    return(
        <div className="result">
            <div className="left">
                <div className="heading">
                We work with Result oriented Working strategies
                </div>
                <div className="para">
                It’s not only a <b>Digital Marketing Agency</b>. It’s a platform where we get some new friends, Where we learn, Where we did, Where we grow. A place that always motivate to never stop. That’s why our Creativity, our experience and effort always bring the best result to our clients.
                </div>
                <div className="bestservices">
                    <div className="head">
                    Services that we do best :
                    </div>
                    <div className="serviceitems">
                    <ServiceItem name="Graphic Designing" icon={one}/>
                    <ServiceItem name="Motion Graphic" icon={two}/>
                    <ServiceItem name="SEO" icon={three}/>
                    <ServiceItem name="Video Editing" icon={four}/>
                    <ServiceItem name="Web / App Development" icon={five}/>
                    <ServiceItem name="Social Media Marketing" icon={six}/>
                    </div>
                </div>
            </div>
            <div className="right">
                <MovingBox icon={icon1} number="34+" name="CLIENTS"/>
                <MovingBox icon={icon2} number="207" name="PROJECTS"/>
                <MovingBox icon={icon3} number="3" name="PARTNERS"/>
                <MovingBox icon={icon4} number="22+" name="TEAM"/>
            </div>
        </div>
    );
}

export default Result;