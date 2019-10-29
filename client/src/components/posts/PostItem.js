import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import moment from 'moment';
import { connect } from 'react-redux';
import { deletePost } from '../../actions/post';

const PostItem = ({
  deletePost,
  auth,
  post: {
    _id,
    text,
    name,
    user,
    time,
    date,
    incident_date,
    Call_Type,
    Disposition,
    Location,
    Location_Type,
    person_last_name,
    person_first_name,
    officer_last_name,
    officer_first_name
  },
  showActions
}) => (
  <div className='post bg-white p-1 my-1'>
    <div>
      <h4>Created by: {name}</h4>
      <Link to={`/posts/${_id}`}>
        <h6>File ID: {_id}</h6>
      </Link>
      <p className='post-date'>
        Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
      </p>
    </div>

    <div>
      <p className='post-date'>
        Incident Date{' '}
        <Moment format='YYYY/MM/DD'>{moment.utc(incident_date)}</Moment>
      </p>
      <p className='post-date'>Time: {time}</p>
      <p className='post-date'>
        Officer Name Last/First: {officer_last_name}, {officer_first_name}
      </p>
      <p className='post-date'>
        Person Name Last/First: {person_last_name}, {person_first_name}
      </p>
      <p className='post-date'>Call Type: {Call_Type}</p>
      <p className='post-date'>Disposition: {Disposition}</p>
      <p className='post-date'>Location: {Location}</p>
      <p className='post-date'>Location_Type: {Location_Type}</p>

      {showActions && (
        <Fragment>
          {!auth.loading && user === auth.user._id && (
            <button
              onClick={() => deletePost(_id)}
              type='button'
              className='btn btn-danger'
            >
              <i className='fas fa-times' />
            </button>
          )}
        </Fragment>
      )}
    </div>

    <p className='my-1'>{text}</p>
  </div>
);

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired,
  showActions: PropTypes.bool
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deletePost }
)(PostItem);
