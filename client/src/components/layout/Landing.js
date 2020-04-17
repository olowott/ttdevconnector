import React, { useState } from 'react';

import { Link } from 'react-router-dom';

const Landing = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log('Passwords do not match');
    } else {
      console.log('SUCCESS');
    }
  };

  return (
    <div className="landing">
      <div className="intro-text">
        <h1 className="x-large">Developer Connector</h1>
        <p className="lead">
          Connect with Developer globally,
          <br />
          Start, share ideas and get help from other developers
        </p>
        <img src="./img/devedevelopers.svg" alt="ConnectDevelopers" />
      </div>
      <div className="intro-form">
        <form className="s-form" onSubmit={(e) => onSubmit(e)}>
          <h2>Sign Up Today!</h2>
          <h4>Create your account</h4>
          <div className="form-control">
            <input
              type="text"
              className="input"
              name="name"
              value={name}
              onChange={(e) => onChange(e)}
              required
            />
            <label htmlFor="name">Name</label>
          </div>
          <div className="form-control">
            <input
              type="email"
              className="input"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
              required
            />
            <label htmlFor="name">Email</label>
          </div>
          <div className="form-control">
            <input
              type="password"
              className="input"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
              minLength="6"
            />
            <label htmlFor="password">Password</label>
          </div>
          <div className="form-control">
            <input
              type="password"
              className="input"
              name="password2"
              value={password2}
              onChange={(e) => onChange(e)}
              minLength="6"
            />
            <label htmlFor="password2">Confirm Password</label>
          </div>
          <input type="submit" value="Register" className="btn btn-primary" />
          <Link to="/login" className="my-1">
            Already have an account? <span>Sign In</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Landing;