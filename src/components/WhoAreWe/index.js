import "./index.css"

const WhoAreWe=()=>{
    return(
        <div className="whoarewe">
            <div className="upper">
                <div className="left">
                    <div className="heading">
                        Who We Are ?
                    </div>
                    <p><b>91Digitals</b> is a full stack <b>digital marketing agency</b> that combines professionals from different backgrounds with different skill sets in one place that only have one main objective in mind: to make internet a better & more useful place for all businesses types.</p>
                    <p>We did what everyone only think, We make the thing’s happen by never giving up. Gave your business a wings with 91Digitals digital marketing services.</p>
                </div>
                <div className="right">
                <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                frameborder='0'
                allow='autoplay; encrypted-media'
                allowfullscreen
                title='video'
                />  
                </div>
            </div>
            <div className="lower">
                <div className="left">
                <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                frameborder='0'
                allow='autoplay; encrypted-media'
                allowfullscreen
                title='video'
                />  
                </div>
                <div className="right">
                <div className="heading">
                            How We Work ?
                    </div>
                    <p>We work with the aim to help every business grow and Succeed. The business Idea you have is a dream that needs to be reality of tomorrow that’s why we are here. Leave everything to us, Our dedicated services and love to our client always motivate us.</p>
                    <p>Our success depends on the satisfaction of our clients. Satisfaction that requires five steps : One to One Discussion, Project Planning, Brand Strategy, Design and Creativity & Review and Launch.</p>
                </div>
            </div>
        </div>
    );
}

export default WhoAreWe;