import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../service/api';

const Login = () => {
  const [userid, setuserid] = useState('');
  const [password, setpassword] = useState('');
  const navigate = useNavigate();

  const loginObj = {
    userid: userid,
    password: password
  }

  const login = async (e) => {
    e.preventDefault();
    const res = await loginUser(loginObj);
    console.log(res);
    if (res.status === 200) {
      navigate(`/home/${res.data._id}`);
    }
  }
  return (
    // <div className="container">
    //   <h1>Login Form</h1>
    //   <form onSubmit={login}>
    //     <input type="text" name="userid" value={userid} onChange={(e) => setuserid(e.target.value)} />
    //     <input type="password" name="password" value={password} onChange={(e) => setpassword(e.target.value)} />
    //     <button type="submit">Login</button>
    //     <a href="/register">Register</a>
    //   </form>
    // </div>
    <div className="login-container">
      <div className="left">
        <div className="logo">
          <p>Logo</p>
        </div>
        <div className="left-container">
          <h1>Log in</h1>
          <p id='welcome-tag'>Welcome back! Please enter your details.</p>
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
            <button type='submit'>Login</button>
          </form>
          <div className="google-auth">
            <img src="Images/google.png" alt="google-icon" />
            <p className="google-tag">
              Sign in with Google
            </p>
          </div>
          <p id='create-tag'>Don't have an acccount? <a href="/register"><span className="green">Sign Up</span></a></p>
        </div>
      </div>
      <div className="right">
        <img src="https://bit.ly/34zjrv5" alt="hero-section-image" />
      </div>
    </div>
  );
};

export default Login;