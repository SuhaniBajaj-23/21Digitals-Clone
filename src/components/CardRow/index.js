import "./index.css"
import Card3D from "../Card3D";
import one from "../../assets/1.png";
import two from "../../assets/2.png";
import three from "../../assets/3.png";
import four from "../../assets/4.png";
import five from "../../assets/5.png";

const CardRow = () => {
    return(
        <div className="cardrow">
            <Card3D icon={one} name="One to One Discussion" content="Every Information and requirement has to be crystal clear."/>
            <Card3D icon={two} name="Project Planning" content="Create small steps to get high jump toward requirement"/>
            <Card3D icon={three} name="Brand Stratergy" content="Every brand require business plans to complete the step."/>
            <Card3D icon={four} name="Design and Creativity" content="Here what we are known for our eye catchy designs"/>
            <Card3D icon={five} name="Review and Launch" content="Remind steps and implement it to let everyone grow."/>
        </div>
    );
}
export default CardRow;