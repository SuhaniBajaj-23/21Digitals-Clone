import "./index.css"

function MovingBox(props){
    return(
        <div className="movingbox">
            <div className="icon">
               <img src={props.icon} alt=""/>
            </div>
            <div className="number">
                {props.number}
            </div>
            <div className="name">
                {props.name}
            </div>
        </div>
    );
}

export default MovingBox;