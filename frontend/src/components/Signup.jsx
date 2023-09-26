import temp_login_bg from "../assets/login_background.jpg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { IconContext } from 'react-icons'
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import sanitizeNumber from "../utils/sanitizeNumber";

const Signup = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    function handleSanitizeNumber(e) {
        const formattedNumber = sanitizeNumber(e.target.value);
        setPhoneNumber(formattedNumber);
    };

    return (
        <div className='signup-container'>
            <div className="signup-form">
                <span>Sign Up</span>
                <form action="#">
                    <div className="signup-name">
                        <input 
                        type="text" 
                        name="first_name" 
                        placeholder="First Name" 
                        value={firstName}
                        onChange={(e) => {setFirstName(e.target.value)}}
                        required />
                        <input 
                        type="text" 
                        name="last_name" 
                        placeholder="Last Name" 
                        value={lastName}
                        onChange={(e) => {setLastName(e.target.value)}}
                        required />
                    </div>
                    <input 
                    type="email" 
                    name="email" 
                    placeholder='Email Address' 
                    value={email}
                    onChange={(e) => {setEmail(e.target.value)}}
                    required />
                    <div className="password-container">
                        <input 
                        type={showPassword ? `text` :  `password`} 
                        name="password" 
                        placeholder='Password' 
                        value={password}
                        onChange={(e) => {setPassword(e.target.value)}}
                        required
                        />
                        <IconContext.Provider value={{color: "rgb(51,51,51)"}}>
                            <div className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? 
                                    <AiOutlineEye /> : 
                                    <AiOutlineEyeInvisible />
                                }
                            </div>
                        </IconContext.Provider>
                    </div>
                    <input 
                    type="tel" 
                    name="phone_number" 
                    id="phone"
                    placeholder="Phone Number"
                    onChange={(e) => {handleSanitizeNumber(e)}}
                    value={phoneNumber}
                    required
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    />
                    <button>Sign Up</button>
                </form>
                <div className="signup-text">
                    <span>Already Have An Account? </span>
                    <span className="signup-link" onClick={() => navigate('/login')}>Login</span>
                </div>
            </div>
            <div className="signup-image">
                <img src={temp_login_bg} alt="" />
            </div>
        </div>

    )
}

export default Signup