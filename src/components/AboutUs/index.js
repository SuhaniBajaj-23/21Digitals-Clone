import "./index.css"
import RightAboutUs from "../RightAboutUs";
function AboutUs (){
    return(
        <div className="about">
            <div className="left">
            <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                frameborder='0'
                allow='autoplay; encrypted-media'
                allowfullscreen
                title='video'
                />            
            </div>
            <div className="right">
                <RightAboutUs/>
            </div>
        </div>
    );
}

export default AboutUs;