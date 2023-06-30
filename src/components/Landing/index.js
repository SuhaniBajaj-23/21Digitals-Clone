import React from "react";
import "./index.css";
import Button from "../Button";
import {AiFillPlayCircle} from "react-icons/ai";

function Landing() {
  return (
    <div className="landing">
        <div className="whole">
            <div className="heading">
                We Develop the Visual Identity of Your Business
            </div>
            <div className="tag">
                Your Dream We Make it Happen
            </div>
            <div className="buttons">
                <Button color='#EFA14C' name="Get Started"/>
                <Button icon=<AiFillPlayCircle/> name="Show Reel"/>
            </div>
        </div>
    </div>
  );
}

export default Landing;
