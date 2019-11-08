import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';
import { Link, withRouter } from 'react-router-dom';

const PostForm = ({ addPost, history }) => {
  const [formData, setFormData] = useState({
    text: '',
    Call_Type: '',
    Disposition: '',
    Location: '',
    Location_Type: '',
    person_last_name: '',
    person_first_name: '',
    officer_last_name: '',
    officer_first_name: '',
    time: '',
    incident_date: ''
  });

  const {
    text,
    Call_Type,
    Disposition,
    Location,
    Location_Type,
    person_last_name,
    person_first_name,
    officer_last_name,
    officer_first_name,
    time,
    incident_date
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    addPost(formData, history);
  };

  return (
    <Fragment>
      <h1 class='large text-primary'>Create An Incident Report File</h1>
      <div>
        {/* <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link> */}
      </div>
      {/* <small>* = required field</small> */}
      <form class='form' onSubmit={e => onSubmit(e)}>
        <div class='form-group'>
          <small className='form-text'>*Call Type</small>
          <select
            name='Call_Type'
            value={Call_Type}
            onChange={e => onChange(e)}
          >
            <option value='0'> Select Call Type</option>
            <option value='711 Hang up- CALL'>711 Hang up- CALL</option>
            <option value='ABC'>ABC</option>
            <option value='ABDT'>ABDT</option>
            <option value='ABNV'>ABNV</option>
            <option value='Admin Detail'>Admin Detail</option>
            <option value='Adopt-A-Hall'>Adopt-A-Hall</option>
            <option value='Alcohol Violation'>Alcohol Violation</option>
            <option value='ALRB'>ALRB</option>
            <option value='ALRF'>ALRF</option>
            <option value='ALRP'>ALRP</option>
            <option value='ALRU'>ALRU</option>
            <option value='ANML'>ANML</option>
            <option value='ARSN'>ARSN</option>
            <option value='ASLI'>ASLI</option>
            <option value='ASLT'>ASLT</option>
            <option value='ASTA'>ASTA</option>
            <option value='ASTC'>ASTC</option>
            <option value='ASTO'>ASTO</option>
            <option value='ASTP'>ASTP</option>
            <option value='BDOG'>BDOG</option>
            <option value='Bias – Anonymous Report'>
              Bias – Anonymous Report
            </option>
            <option value='Bias – Case Report'>Bias – Case Report</option>
            <option value='Bias – Incident Report'>
              Bias – Incident Report
            </option>
            <option value='Bike Check'>Bike Check</option>
            <option value='BIOA'>BIOA</option>
            <option value='Blue Light Alarm'>Blue Light Alarm</option>
            <option value='BOMB'>BOMB</option>
          </select>
        </div>

        <div class='form-group'>
          <small className='form-text'>*Disposition:</small>
          <select
            name='Disposition'
            value={Disposition}
            onChange={e => onChange(e)}
          >
            <option value='0'> Select Disposition</option>
            <option value='Closed/Cleared'>Closed/Cleared</option>
            <option value='TOT – Outside Agency'>TOT – Outside Agency</option>
            <option value='CSC Referral'>CSC Referral</option>
            <option value='Arrest Made'>Arrest Made</option>
            <option value='No Prosecution'>No Prosecution</option>
          </select>
        </div>

        <div className='row'>
          <div className='form-group, column'>
            <small className='form-text'>*Location of Incident</small>
            <input
              type='text'
              placeholder='Location / address'
              name='Location'
              value={Location}
              onChange={e => onChange(e)}
            />
          </div>

          <div className='form-group, column'>
            <small className='form-text'>*Location Type:</small>
            <select
              name='Location_Type'
              value={Location_Type}
              onChange={e => onChange(e)}
            >
              <option value='0'> Select Location_Type</option>
              <option value='Address'>Address</option>
              <option value='Intersection'>Intersection</option>
              <option value='Common Name'>Common Name</option>
              <option value='Lat/Long'>Lat/Long</option>
              <option value='Rural Address'>Rural Address</option>
            </select>
          </div>
        </div>
        <div className='form-group'>
          <small className='form-text'>*Person's lastname:</small>
          <input
            type='text'
            placeholder='Persons lastname'
            name='person_last_name'
            value={person_last_name}
            onChange={e => onChange(e)}
          />
        </div>

        <div className='form-group'>
          <small className='form-text'>*Person's firstname:</small>
          <input
            type='text'
            placeholder='person first name'
            name='person_first_name'
            value={person_first_name}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <small className='form-text'>* Officer's lastname:</small>
          <input
            type='text'
            placeholder='Officer lastname'
            name='officer_last_name'
            value={officer_last_name}
            onChange={e => onChange(e)}
          />
        </div>

        <div className='form-group'>
          <small className='form-text'>*Officer's firstname:</small>
          <input
            type='text'
            placeholder='Officer fisrtname'
            name='officer_first_name'
            value={officer_first_name}
            onChange={e => onChange(e)}
          />
        </div>
        <small className='form-text'>*Write incedint description:</small>
        <textarea
          name='text'
          cols='30'
          rows='5'
          placeholder='Description'
          value={text}
          onChange={e => onChange(e)}
          required
        />

        <div className='form-group'>
          <small className='form-text'>*Time of incedint:</small>
          <input
            type='time'
            // placeholder='00:00'
            name='time'
            value={time}
            onChange={e => onChange(e)}
          />
        </div>

        <div className='form-group'>
          <small className='form-text'>*Date of incedint:</small>
          <input
            type='date'
            // placeholder='mm/dd/yyyy'
            name='incident_date'
            value={incident_date}
            onChange={e => onChange(e)}
          />
        </div>

        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  posts: state.post
});

export default connect(
  mapStateToProps,
  { addPost }
)(withRouter(PostForm));
