import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  //redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

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
        <form className="s-form" onSubmit={(e) => onSubmit(e)}>
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

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
