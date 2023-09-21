import temp_login_bg from "../assets/login_background.jpg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { IconContext } from 'react-icons';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { login } from "../store/reducers/session";

const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch()

    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     dispatch(login({ email, password }))
    // }

    return (
        <div className='login-container'>
            <div className="login-form">
                <span>Login</span>
                <form action="#">
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
                    <button onClick={onSubmit}>Login</button>
                </form>
                <div className="signup-text">
                    <span>Don't Have An Account? </span>
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