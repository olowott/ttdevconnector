import React, { useState, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';

const CreateProfile = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    githubusername: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: '',
  });

  const [displaySocialInput, toggleSocialInput] = useState(false);

  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
  } = formData;

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history);
  };
  return (
    <Fragment>
      <h1 className="large text-primary">Create your profile</h1>
      <p className="lead">
        Let's get some information to make your profile stand out
      </p>
      <small>* = required fields </small>
      <form action="#" className="n-forms" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <label htmlfor="select"> Select Professional Status </label>
          <select name="status" value={status} onChange={(e) => onChange(e)}>
            <option value="0">* Select Professional Status</option>
            <option value="Developer">Developer</option>
            <option value="Junior Developer">Junior Developer</option>
            <option value="Senior Developer">Senior Developer</option>
            <option value="Manager">Manager</option>
            <option value="Student or Learning">Student or Learning</option>
            <option value="Instructor or Teacher">Instructor or Teacher</option>
            <option value="Intern">Intern</option>
            <option value="Other">Other</option>
          </select>
          <small>Give us and idea of where you are in your career</small>
        </div>

        <div className="form-group">
          <label htmlfor="company">Company</label>
          <input
            type="text"
            name="company"
            value={company}
            onChange={(e) => onChange(e)}
          />
          <small>Could be your own Company or one you work for</small>
        </div>
        <div className="form-group">
          <label htmlfor="website">Website</label>
          <input
            type="text"
            name="website"
            value={website}
            onChange={(e) => onChange(e)}
          />
          <small>Could be your own or company website</small>
        </div>
        <div className="form-group">
          <label htmlfor="location">Location</label>
          <input
            type="text"
            name="location"
            value={location}
            onChange={(e) => onChange(e)}
          />
          <small>City & State suggested (e.g Boston, MA)</small>
        </div>
        <div className="form-group">
          <label htmlfor="skills">* Skills</label>
          <input
            type="text"
            name="skills"
            value={skills}
            onChange={(e) => onChange(e)}
          />
          <small>
            Please user comma seperated values (eg HTML, CSS, Javascript, PHP)
          </small>
        </div>
        <div className="form-group">
          <label htmlfor="github-username">Github Username</label>
          <input
            type="text"
            name="github-username"
            value={githubusername}
            onChange={(e) => onChange(e)}
          />
          <small>
            If you want your latest repos and a Github link, include your
            username
          </small>
        </div>
        <div className="form-group">
          <label htmlfor="bio">A short bio of yourself</label>
          <textarea
            name="bio"
            value={bio}
            onChange={(e) => onChange(e)}
          ></textarea>
          <small>Tell us a little about yourself</small>
        </div>
        <div className="my-2">
          <button
            onClick={() => toggleSocialInput(!displaySocialInput)}
            className="btn btn-dark"
          >
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>
        {displaySocialInput && (
          <Fragment>
            <div className="form-group social-input">
              <i className="fa fa-twitter fa-2x"></i>
              <input
                type="text"
                name="twitter"
                id="twiter"
                placeholder="Twitter Url"
                value={twitter}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="form-group social-input">
              <i className="fa fa-facebook fa-2x"></i>
              <input
                type="text"
                name="facebook"
                id="facebook"
                placeholder="Facebook Url"
                value={facebook}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="form-group social-input">
              <i className="fa fa-youtube fa-2x"></i>
              <input
                type="text"
                name="youtube"
                id="youtube"
                placeholder="YouTube Url"
                value={youtube}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="form-group social-input">
              <i className="fa fa-linkedin fa-2x"></i>
              <input
                type="text"
                name="linkedin"
                id="linkedin"
                placeholder="Linkedin Url"
                value={linkedin}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="form-group social-input">
              <i className="fa fa-instagram fa-2x"></i>
              <input
                type="text"
                name="instagram"
                id="instagram"
                placeholder="Instagram Url"
                value={instagram}
                onChange={(e) => onChange(e)}
              />
            </div>
          </Fragment>
        )}

        <input type="submit" className="btn btn-primary my-1" value="Submit" />
        <Link to="/dashboard" className="btn btn-dark my-1">
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
};

export default connect(null, { createProfile })(withRouter(CreateProfile));
