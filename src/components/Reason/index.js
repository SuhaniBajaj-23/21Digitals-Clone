import React from "react";
import "./index.css";

const Reason=(props)=>{
    return(
        <div className="reason">
            <div className="icon">
                <img src={props.icon} alt=""></img>
            </div>
            <div className="name">
                {props.name}
            </div>
        </div>
    );
}

export default Reason;
