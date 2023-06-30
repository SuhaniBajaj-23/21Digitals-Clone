import "./index.css"

function Carousal(props){
    return(
        <div className="carousal">
            <div className="image">
                <img src={props.image} alt=""/>
            </div>
            <div className="description">
                {props.description}
            </div>
            <div className="name">
                {props.name}
            </div>
            <div className="position">
                {props.designation}
            </div>
        </div>
    );
}

export default  Carousal;