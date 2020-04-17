import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('SUCCESS');
  };

  return (
    <div className="landing">
      <div className="intro-text">
        <h1>Welcome Back!</h1>
        <p>
          Do complete your profile, remember to
          <br />
          Start, share ideas and get help from other developers
        </p>
        <img src="./img/login-devconnectors.svg" alt="ConnectDevelopers" />
      </div>
      <div className="intro-form">
        <form action="#" className="s-form">
          <h2>Sign In</h2>
          <h4>Sign into your account</h4>

          <div className="form-control">
            <input
              type="email"
              className="input"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
              required
            />
            <label forhtml="name">Email</label>
          </div>
          <div className="form-control">
            <input
              type="password"
              className="input"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
              required
            />
            <label forhtml="password">Password</label>
          </div>

          <input type="submit" value="Login" className="btn btn-primary" />
          <Link to="/" className="my-1">
            Dont have an account? <span>Sign Up</span>{' '}
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
