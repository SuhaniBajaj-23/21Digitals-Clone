import React from "react";
import "./index.css";

function Reason(props){
    return(
        <div className="reason">
            <div className="icon">
                {props.icon}
            </div>
            <div className="name">
                {props.name}
            </div>
        </div>
    );
}

export default Reason;
