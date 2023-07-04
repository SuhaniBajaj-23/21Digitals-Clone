import "./index.css"

function ServiceItem(props){
    return(
        <div className="serviceitem">
            <div className="icon">
                <img src={props.icon} alt=""/>
            </div>
            <div className="name">
                {props.name}
            </div>
        </div>
    );
}

export default ServiceItem;