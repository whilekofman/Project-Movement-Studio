import temp_login_bg from "../assets/login_background.jpg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { IconContext } from 'react-icons';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSession } from "../features/session/SessionContext";

const Login = () => {
    const navigate = useNavigate();
    const { login } = useSession();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await login({credential: email, password});
            navigate("dashboard");
        } catch (error) {
            console.error("Login failed:", error);
            throw error;
        }
    };

    return (
        <div className='login-container'>
            <div className="login-form">
                <span>Login</span>
                <form onSubmit={onSubmit}>
                    <input 
                    type="text" 
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
                        required />
                        <IconContext.Provider value={{color: "rgb(51,51,51)"}}>
                            <div className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? 
                                    <AiOutlineEye /> : 
                                    <AiOutlineEyeInvisible />
                                }
                            </div>
                        </IconContext.Provider>
                    </div>
                    <button type="submit">Login</button>
                </form>
                <div className="signup-text">
                    <span>Don&apos;t Have An Account?</span>
                    <span className="signup-link" onClick={() => navigate('/signup')}>Sign Up</span>
                </div>
            </div>
            <div className="login-image">
                <img src={temp_login_bg} alt="" />
            </div>
        </div>
    )
}

export default Login