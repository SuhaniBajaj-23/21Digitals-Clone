import React from "react";
import "./index.css";

function Button(props){
    return(
        <div className="button">
            <div className="icon">
                {props.icon}
            </div>
            <div className="name">
                {props.name}
            </div>
        </div>
        // <button className="button"></button>
    );
}

export default Button;
