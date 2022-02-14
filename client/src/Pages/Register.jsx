import React, { useState } from 'react';
import { registerUser } from '../service/api';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [userid, setuserid] = useState('');
    const [password, setpassword] = useState('');
    const navigate = useNavigate();

    const registerObj = {
        userid: userid,
        password: password
    }

    const register = async (e) => {
        e.preventDefault();
        const res = await registerUser(registerObj);
        console.log(res.status);
        if(res.status === 200){
            navigate('/');
        }
    }
    return (
        // <div className="container">
        //     <h1>Register Form</h1>
        //     <form onSubmit={register}>
        //         <input type="text" name="userid" value={userid} onChange={(e) => setuserid(e.target.value)} />
        //         <input type="password" name="password" value={password} onChange={(e) => setpassword(e.target.value)} />
        //         <button type="submit">Register</button>
        //         <a href="/">Login</a>
        //     </form>
        // </div>
        <div className="login-container">
      <div className="left">
        <div className="logo">
          <p>Logo</p>
        </div>
        <div className="left-container">
          <h1>Sign Up</h1>
          <p id='welcome-tag'>Welcome! Please enter your details.</p>
          <form>
            <label htmlFor="email">Email</label>
            <input type="email" name='email' placeholder='Enter your email' id='email' />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder='Enter your password' />
            <section className="forgot-checkbox">
              <div>
              <input type="checkbox" name="dayCount" id='dayCount' />
              <label htmlFor="dayCount">Remember for 30 days</label>
              </div>
              <a href="/">
                <p><span className="green">Forgot Password?</span></p>
              </a>
            </section>
            <button type='submit'>Register</button>
          </form>
          <div className="google-auth">
            <img src="Images/google.png" alt="google-icon" />
            <p className="google-tag">
              Sign Up with Google
            </p>
          </div>
          <p id='create-tag'>Already a customer? <a href="/"><span className="green">Log in</span></a></p>
        </div>
      </div>
      <div className="right">
        <img src="https://bit.ly/34zjrv5" alt="hero-section-image" />
      </div>
    </div>
    )
}

export default Register