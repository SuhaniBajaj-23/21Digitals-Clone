import "./index.css"
import {AiOutlineClockCircle} from "react-icons/ai";
import {FaComments} from "react-icons/fa";

const BlogCard=(props)=>{
    return(
        <div className="blogcard">
            <div className="name">
                    {props.name}
            </div>
            <br/>
            <div className="content">
                <div className="date">
                <AiOutlineClockCircle size={15}/>
                    {props.date}
                </div>
                <div className="comments">
                <FaComments size={15}/>
                    {props.comment}
                </div>
            </div>
        </div>
    );
}

export default BlogCard;