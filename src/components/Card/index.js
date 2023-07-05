import "./index.css";

const Card = (props) => {
    return(
        <div className="blogCard">
            <div className="image">
                <img src={props.image} alt=""/>
            </div>
            <div className="content">
                <div className="topic">
                    {props.name}
                </div>
                <div className="description">
                    {props.description}
                </div>
                <button onClick={event=>
                window.location.href="/"}>Read Post</button>
            </div>
        </div>
    );
}

export default Card;