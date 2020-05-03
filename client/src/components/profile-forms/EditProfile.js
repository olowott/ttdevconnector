import React, { useState, Fragment, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history,
}) => {
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

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  useEffect(() => {
    getCurrentProfile();

    setFormData({
      company: loading || !profile.company ? '' : profile.company,
      website: loading || !profile.website ? '' : profile.website,
      location: loading || !profile.location ? '' : profile.location,
      status: loading || !profile.status ? '' : profile.status,
      skills: loading || !profile.skills ? '' : profile.skills.join(','),
      githubusername:
        loading || !profile.githubusername ? '' : profile.githubusername,
      bio: loading || !profile.bio ? '' : profile.bio,
      twitter: loading || !profile.twitter ? '' : profile.twitter,
      facebook: loading || !profile.facebook ? '' : profile.facebook,
      linkedin: loading || !profile.linkedin ? '' : profile.linkedin,
      youtube: loading || !profile.youtube ? '' : profile.youtube,
      instagram: loading || !profile.instagram ? '' : profile.instagram,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, getCurrentProfile]);

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
    createProfile(formData, history, true);
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
          <label htmlFor="select"> Select Professional Status </label>
          <select name="status" value={status} onChange={onChange}>
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
          <label htmlFor="company">Company</label>
          <input
            type="text"
            name="company"
            value={company}
            onChange={onChange}
          />
          <small>Could be your own Company or one you work for</small>
        </div>
        <div className="form-group">
          <label htmlFor="website">Website</label>
          <input
            type="text"
            name="website"
            value={website}
            onChange={onChange}
          />
          <small>Could be your own or company website</small>
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            value={location}
            onChange={onChange}
          />
          <small>City & State suggested (e.g Boston, MA)</small>
        </div>
        <div className="form-group">
          <label htmlFor="skills">* Skills</label>
          <input type="text" name="skills" value={skills} onChange={onChange} />
          <small>
            Please user comma seperated values (eg HTML, CSS, Javascript, PHP)
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="github-username">Github Username</label>
          <input
            type="text"
            name="githubusername"
            value={githubusername}
            onChange={onChange}
          />
          <small>
            If you want your latest repos and a Github link, include your
            username
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="bio">A short bio of yourself</label>
          <textarea name="bio" value={bio} onChange={onChange}></textarea>
          <small>Tell us a little about yourself</small>
        </div>
        <div className="my-2">
          <button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            className="btn btn-dark"
          >
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>
        {displaySocialInputs && (
          <Fragment>
            <div className="form-group social-input">
              <i className="fa fa-twitter fa-2x"></i>
              <input
                type="text"
                name="twitter"
                id="twiter"
                placeholder="Twitter Url"
                value={twitter}
                onChange={onChange}
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
                onChange={onChange}
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
                onChange={onChange}
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
                onChange={onChange}
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
                onChange={onChange}
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

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);
