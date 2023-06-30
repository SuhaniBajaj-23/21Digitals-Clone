import "./index.css"
import Card from "../Card";
import imageone from "../../assets/blog1.jpg"
import imagetwo from "../../assets/blog2.jpg"


function Blog(){
    return(
        <div className="blog">
            <div className="head">
                Our Blog
            </div>
            <div className="heading">
            Let us know more from us, Get the Knowledge of the latest trends and Tips & Tricks to stand in the digital creative era.
            </div>
            <div className="main">
                <div className="left">
                    <button>Motion Graphics</button>
                    <div className="tips">
                    5 Easy Tips to Optimize Your Graphic Design Workflow
                    </div>
                    <div className="intro">
                    Introduction The importance of optimizing your graphic design workflow. Graphic design is a critical part of any company’s branding and marketing efforts. …
                    </div>
                </div>
                <div className="right">
                    <Card image={imageone} name="Web Development" description="Effective Ways to Increase your Website Traffic"/>
                    <Card image={imagetwo} name="Seo" description="Best Way to Optimize Blog Content for Search Engines"/>
                </div>
            </div>
            
        </div>
    );
}

export default Blog;