import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import Register from '../auth/Register';

const Landing = ({ setAlert, register, isAuthenticated }) => {
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
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  //redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

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

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Landing);
