import React from "react";
import "./index.css";
function ServiceCard(props){
    return(
        <div className="card">
            <div className="icons">
                {props.icon}
            </div>
            <div className="name">
                {props.name}
            </div>
            <div className="description">
                {props.description}
            </div>
            <button>Read More</button>
        </div>
    );
}

export default ServiceCard;
