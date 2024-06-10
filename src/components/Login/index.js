import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css'
const Login=()=>{
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    const onClickSubmit = (e) => {
        e.preventDefault();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        if (password.length < 5) {
            alert('Password should be at least 5 characters long');
            return;
        }
        navigate('/dashboard');
    };
    return(
        <div className="login-app">
            <div className="left-side">
                <h1 className="board">Board.</h1>
            </div>
            <div className="right-side">
                <div className='sign-in-container'>
                <h1 className="sign-in">Sign in</h1>
                <p className="sign-in-account">Sign into your account</p>
                
                <form className='users-login-information' onSubmit={onClickSubmit}>
            <div className='email_input'>
                <label htmlFor='email' className='email'>Email address</label>
                <input id="email" type="email" placeholder='enter your email' className='emailinput' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='email_input'>
                <label htmlFor='password' className='email'>Password</label>
                <input id="password" type="password" placeholder='enter your password' className='emailinput' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <p className="forgot-password">Forgot password?</p>
            <button className="sign-in-button" type="submit">Sign In</button>
        </form>
                <p className="dont-have-account">Don't have an account?<span className='forgot-password'>Register here</span></p>
            </div>
            </div>
        </div>
    )
}

export default Login