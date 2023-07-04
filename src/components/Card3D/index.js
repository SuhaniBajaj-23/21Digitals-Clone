import "./index.css";

function Card3D(props) {
  return (
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src={props.icon} alt="Avatar" />
            <h1>{props.name}</h1>
          </div>
          <div class="flip-card-back">{props.content}</div>
        </div>
      </div>
    
  );
}

export default Card3D;
