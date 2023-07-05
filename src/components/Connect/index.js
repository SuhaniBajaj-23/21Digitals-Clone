import "./index.css"

const Connect = () =>{
    return(
        <div className="connect">
            <div className="head">
            Let's take your business ahead of the competition
            </div>
            <div className="heading">
            We are the problem solvers and we help businesses like yours succeed every day as creative analytics-oriented partners.
            </div>
            <button onClick={event=>
            window.location.href='/contact'
            }>Get in Touch</button>
        </div>
    );
}

export default Connect;