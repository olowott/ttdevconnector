import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../actions/post';

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState('');

  return (
    <div className="post-form">
      <div className="post-form-header bg-primary">
        <h3>Leave a Comment...</h3>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          addComment(postId, { text });
          setText('');
        }}
        className="n-forms my-1 p-1"
      >
        <div className="form-group">
          <label htmlFor="post">Create a Post</label>
          <textarea
            onChange={(e) => setText(e.target.value)}
            name="post"
            cols="30"
            rows="5"
          ></textarea>
        </div>
        <input type="submit" value="Submit" className="btn btn-dark my-1" />
      </form>
    </div>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default connect(null, { addComment })(CommentForm);
