import React from 'react'
import Button from './Button';
import profile from "../assets/profile_dark.jpg";

const About = () => {
    const scrollToBottom = () => {
        const bodyHeight = document.body.scrollHeight;

        window.scrollTo({top: bodyHeight, behavior: 'smooth'});
    };

    return (
        <div className='about'>
            <div className="about-tagline-container">
                <div className="about-tagline">
                    <span>YOUR ASSIGNMENT IS FITNESS - </span>
                    <span>JOIN THE MVMT</span>
                </div>
                <div className='about-desc'>
                    <span>
                        PRJCT MVMT is a boutique fitness studio focused on making you feel, look, and MOVE better! Join us now to make fitness part of your everyday lifestyle whether it's one on one training or our small group training, we’ll get you moving.
                    </span>
                </div>
                <div className="about-links">
                    <Button className="about-button" text={"Join Now"}/>
                    <span onClick={scrollToBottom}>Learn More</span>
                </div>
            </div>
            <div className="about-image">
                <img src={profile} alt="about-image" />
            </div>
        </div>
    );
};

export default About;