import "./index.css"
const RightAboutUs = ()=>{
    return(
        <div className="rightside">
            <div className="head">
                About Us
            </div>
            <div className="heading">
            Start with a plan and finish with results
            </div>
            <div className="content">
                <p>91Digitals is an <b>Creative digital marketing agency</b> that believes in bringing results,  We don’t just provide services, We help brands scale with forward thinking full-stack creative digital marketing agency. </p>
                <p>We brainstorm and formulate solutions to our client’s problems and marketing activities that are cost-effective for our clients. Our success depends on the satisfaction of our clients. </p>
            </div>
            <button onClick={event=>
            window.location.href="/about"}>Know More</button>
        </div>
    );
}

export default RightAboutUs;