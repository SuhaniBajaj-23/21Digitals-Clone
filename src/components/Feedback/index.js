import { useEffect,useState } from "react";
import Carousal from "../Carousal";
import './index.css';
import icon from "../../assets/feedback.jpg";
// import logo from "../../assets/logo.png";


const Feedback = ()=>{

    const data =[<Carousal image={icon}  description="In Delhi, only 91 Digitals provide result-oriented digital marketing services. It was the first time I have seen such great results after working with several agencies and freelancers. In addition to redesigning our website, they were also able to resolve payment gateway issues and gain exceptional leads through paid campaigns. I look forward to achieving more milestones with you. Thanks!	" name="Elena Gilbert" designation="Founder"/>,
    <Carousal image={icon}  description="In Delhi, only 91 Digitals provide result-oriented digital marketing services. It was the first time I have seen such great results after working with several agencies and freelancers. In addition to redesigning our website, they were also able to resolve payment gateway issues and gain exceptional leads through paid campaigns. I look forward to achieving more milestones with you. Thanks!	" name="FLOYD STALLER" designation="CO-FOUNDER"/>,
    <Carousal image={icon}  description="In Delhi, only 91 Digitals provide result-oriented digital marketing services. It was the first time I have seen such great results after working with several agencies and freelancers. In addition to redesigning our website, they were also able to resolve payment gateway issues and gain exceptional leads through paid campaigns. I look forward to achieving more milestones with you. Thanks!	" name="ADAM CHIESE" designation="DESIGNER"/>];
    const [currentIndex,setCurrentIndex] = useState(0);

    const carousalInfiniteScroll = () =>{
        if(currentIndex===data.length-1){
            return setCurrentIndex(0);
        }
        return setCurrentIndex(currentIndex+1);
    }

    useEffect(()=>{
        const interval =setInterval(()=>{
            carousalInfiniteScroll()},3000)

            return () =>clearInterval(interval);
        })
    

    return(
        <div className="feedback">
            <div className="head">
                Happy Clients
            </div>
            <div className="heading">
                What Do Our Clients Says About Us
            </div>
            <div className="carousals">
            {data.map((item,index)=>{
                return<div className="carousal-item" style={{transform: `translate(-${currentIndex * 100}%)`}}
                key={index}>{item}</div>
            })}
                {/* <Carousal description="In Delhi, only 91 Digitals provide result-oriented digital marketing services. It was the first time I have seen such great results after working with several agencies and freelancers. In addition to redesigning our website, they were also able to resolve payment gateway issues and gain exceptional leads through paid campaigns. I look forward to achieving more milestones with you. Thanks!	" name="Elena Gilbert" designation="Founder"/> */}
                {/* <Carousal description="In Delhi, only 91 Digitals provide result-oriented digital marketing services. It was the first time I have seen such great results after working with several agencies and freelancers. In addition to redesigning our website, they were also able to resolve payment gateway issues and gain exceptional leads through paid campaigns. I look forward to achieving more milestones with you. Thanks!	" name="FLOYD STALLER" designation="CO-FOUNDER"/> */}
                {/* <Carousal description="In Delhi, only 91 Digitals provide result-oriented digital marketing services. It was the first time I have seen such great results after working with several agencies and freelancers. In addition to redesigning our website, they were also able to resolve payment gateway issues and gain exceptional leads through paid campaigns. I look forward to achieving more milestones with you. Thanks!	" name="ADAM CHIESE" designation="DESIGNER"/> */}
            </div>
        </div>
    );
}

export default Feedback;