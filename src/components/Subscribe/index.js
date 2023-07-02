import "./index.css"
import mailBox from "../../assets/subscribe.jpg"

function Subscribe(){
    return(
        <div className="subscribe">
            <div className="left">
                <div className="heading">
                Subscribe to our Newsletter
                </div>
                <div className="lower">
                    <div className="input">
                     <input type="email" name="email" placeholder="Email" />
                    </div>
                    <div className="Subbutton">
                    <button>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
            <div className="right">
                <img src={mailBox} alt=""/>
            </div>
        </div>
    );
}

export default Subscribe;