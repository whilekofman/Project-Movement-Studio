
import headshot from "../assets/profile.jpg";
import Button from "./Button";

const Credentials = () => {
  return (
    <div className="credentials" id="credentials-section">
        <img src={headshot} alt="" />
        <div className="credential-details">
            <div className="credential-headline">
                <span>START YOUR FITNESS JOURNEY WITH </span>
                <span id="gold">MOMENTUM</span>
            </div>
            <div className="credential-text">
                <span id="credential-title">CREDENTIALS</span>
                <span>Owner / Personal Trainer</span>
                <span>NASM Certified Personal Trainer</span>
                <span>NASM Corrective Exercise Specialist</span>
                <span>NASM Performance Enhancing Specialist</span>
                <span>ISSA Strength & Conditioning Coach</span>
                <span>ISSA Nutrition Coach</span>
                <span>ISSA Certified Personal Trainer</span>
                <span>NFPT Functional Training Specialist</span>
                <span>CPR/AED Certified</span>
                <span id="credential-desc">Kevin loves his job as a personal trainer and coach. He believes that personal trainers and coaches are the frontline of helping individuals take their first steps in changing their lives. Kevin is extremely experienced with transformations, helping individuals stay consistent and accountable for their fitness goals. He is willing to take on any client who loves to be challenged and wants to be the best version of themselves.</span>
            </div>
            <Button className="credential-button" text={"Book Now"}/>
        </div>

    </div>
  );
};

export default Credentials;