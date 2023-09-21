import { useState } from "react";
import studio from "../assets/studio_wide.jpg";

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [type, setType] = useState('default');
    const [showNotification, setShowNotification] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setName('');
        setEmail('');
        setNumber('');
        setType('default');

        // display submit text for 5 secs
        setShowNotification(true);

        setTimeout(() => {
            setShowNotification(false);
        }, 5000);
    }

    return (
        <div className="contact-container">
            <div className='contact' id='contact-section'>
                <div className="contact-header">
                    <div className='contact-tag'>
                        <span className='tag-left'>JOIN NOW </span>
                        <span>TO GET IN SHAPE</span>
                    </div>
                    <span className='contact-text'>Get started on your fitness journey! Drop us a line using the form below or reach us at </span>
                    <span className='contact-text'>projectmovementstudio@gmail.com</span>
                </div>
                <form
                target="_blank"
                method="POST"
                action="https://formsubmit.co/projectmovementstudio@gmail.com"
                onSubmit={handleSubmit}
                >
                    <input type="text" 
                    placeholder='NAME' 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}/>
                    <input type="email" 
                    placeholder='EMAIL' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                    <input type="tel" 
                    placeholder='PHONE NUMBER' 
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}/>
                    <select 
                    onChange={(e) => setType(e.target.value)}
                    value={type}>
                        <option value="default" disabled>Which Program are you interested in?</option>
                        <option value="personal">Personal Training</option>
                        <option value="group">Group Training</option>
                    </select>
                    <div>
                        <button>SUBMIT</button>
                        {showNotification && <span className="notification-text">Form Submitted Successfully!</span>}
                    </div>
                </form>
            </div>
            <img src={studio} alt="" />
        </div>
    );
};

export default Contact;