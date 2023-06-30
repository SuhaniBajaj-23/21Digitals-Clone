import "./index.css"

function Subscribe(){
    return(
        <div className="subscribe">
            <div className="left">
                <div className="heading">
                Subscribe to our Newsletter
                </div>
                <div className="lower">
                    <div className="input">
                    <input type="email" name="email" />
                    </div>
                    <div className="button">
                    <button>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="right">
            </div>
        </div>
    );
}

export default Subscribe;