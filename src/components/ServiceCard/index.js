import React from "react";
import "./index.css";
const ServiceCard = (props)=>{
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
            <button onClick={event=>
            window.location.href="/"}>Read More</button>
        </div>
    );
}

export default ServiceCard;
