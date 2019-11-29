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
            <option value='BURG'>BURG</option>,
            <option value='Burglary - Attempt'>Burglary - Attempt</option>,
            <option value='CALA'>CALA</option>,
            <option value='CALL'>CALL</option>,
            <option value='CALP'>CALP</option>,
            <option value='Check Welfare'>Check Welfare</option>,
            <option value='City Ordin Viol-ABC'>City Ordin Viol-ABC</option>,
            <option value='City Ordin Viol-Litter - Dumping'>
              City Ordin Viol-Litter-Dumping
            </option>
            ,
            <option value='City Ordin Viol-Nuisance'>
              City Ordin Viol-Nuisance
            </option>
            ,
            <option value='City Ordin Viol-Open Cont'>
              City Ordin Viol-Open Cont
            </option>
            ,
            <option value='City Ordinance Violation'>
              City Ordinance Violation
            </option>
            ,<option value='CIVC'>CIVC</option>,
            <option value='CIVL'>CIVL</option>,
            <option value='CMIS'>CMIS</option>,
            <option value='Confiscation'>Confiscation</option>,
            <option value='COP'>COP</option>,
            <option value='Courier'>Courier</option>,
            <option value='CPW-CrimPossWeapon'>CPW-CrimPossWeapon</option>,
            <option value='Crime Prevention Detail'>
              Crime Prevention Detail
            </option>
            ,
            <option value='Criminal Impersonation'>
              Criminal Impersonation
            </option>
            ,<option value='CSC Violation'>CSC Violation</option>,
            <option value='DEMO'>DEMO</option>,
            <option value='DETL'>DETL</option>,
            <option value='DISP'>DISP</option>,
            <option value='DISQ'>DISQ</option>,
            <option value='DIST'>DIST</option>,
            <option value='DISV'>DISV</option>,<option value='DOA'>DOA</option>,
            <option value='DOMI'>DOMI</option>,
            <option value='DOMP'>DOMP</option>,
            <option value='DOMV'>DOMV</option>,
            <option value='DOMW'>DOMW</option>,
            <option value='Drug Law Violation-UPM'>
              Drug Law Violation-UPM
            </option>
            ,
            <option value='DRUG-CSC Sanction Only'>
              DRUG-CSC Sanction Only
            </option>
            ,
            <option value='DRUG-Narcotics Violation'>
              DRUG-Narcotics Violation
            </option>
            ,<option value='DWI'>DWI</option>,
            <option value='Early Arrival'>Early Arrival</option>,
            <option value='ELEV'>ELEV</option>,
            <option value='Enter Call Type'>Enter Call Type</option>,
            <option value='Escort – Faculty or Staff'>
              Escort – Faculty or Staff
            </option>
            ,<option value='Escort – Non Student'>Escort – Non Student</option>,
            <option value='Escort – STAFF'>Escort – STAFF</option>,
            <option value='Escort – STUDENT'>Escort – STUDENT</option>,
            <option value='ESCT'>ESCT</option>,
            <option value='EXPL'>EXPL</option>,
            <option value='Exposure-Person'>Exposure-Person</option>,
            <option value='FAPL'>FAPL</option>,
            <option value='FBUS'>FBUS</option>,
            <option value='FCHM'>FCHM</option>,
            <option value='FELC'>FELC</option>,
            <option value='FGHT'>FGHT</option>,
            <option value='FGHW'>FGHW</option>,
            <option value='Field Interview'>Field Interview</option>,
            <option value='Fight/with injuries-FGHT'>
              Fight/with injuries-FGHT
            </option>
            ,<option value='FLUP'>FLUP</option>,
            <option value='FORG'>FORG</option>,
            <option value='Found Property'>Found Property</option>,
            <option value='FOUT'>FOUT</option>,
            <option value='FPOL'>FPOL</option>,
            <option value='FRAD'>FRAD</option>,
            <option value='FSTR'>FSTR</option>,
            <option value='FVEH'>FVEH</option>,
            <option value='FWKS'>FWKS</option>,
            <option value='GILL'>GILL</option>,
            <option value='HARA'>HARA</option>,
            <option value='HARR'>HARR</option>,
            <option value='HAZD'>HAZD</option>,
            <option value='Hazing'>Hazing</option>,
            <option value='HAZM'>HAZM</option>,
            <option value='Health/Safety Check'>Health/Safety Check</option>,
            <option value='HELP'>HELP</option>,
            <option value='HOMI'>HOMI</option>,
            <option value='HR Detail'>HR Detail</option>,
            <option value='Identity Theft'>Identity Theft</option>,
            <option value='Impersonation'>Impersonation</option>,
            <option value='INFO'>INFO</option>,
            <option value='Info-NonDPS'>Info-NonDPS</option>,
            <option value='INTX'>INTX</option>,
            <option value='Investigation'>Investigation</option>,
            <option value='IOD'>IOD</option>,<option value='JUVS'>JUVS</option>,
            <option value='LARC'>LARC</option>,
            <option value='Larceny-Attempt'>Larceny-Attempt</option>,
            <option value='LEWD'>LEWD</option>,
            <option value='Liquor Law Violation'>Liquor Law Violation</option>,
            <option value='Littering'>Littering</option>,
            <option value='Local Law – Resale of Tickets'>
              Local Law – Resale of Tickets
            </option>
            ,<option value='Lock'>Lock</option>,
            <option value='Lockout – Non SU'>Lockout – Non SU</option>,
            <option value='Lockout Staff-Faculty'>Lockout Staff-Faculty</option>
            ,<option value='Lockout Student'>Lockout Student</option>,
            <option value='LOIT'>LOIT</option>,
            <option value='Lost Property'>Lost Property</option>,
            <option value='Lost Property No Report'>
              Lost Property No Report
            </option>
            ,<option value='LOUD'>LOUD</option>,
            <option value='Maintenance Alarm'>Maintenance Alarm</option>,
            <option value='Maintenance Request'>Maintenance Request</option>,
            <option value='MENA'>MENA</option>,
            <option value='MENT'>MENT</option>,
            <option value='MISS'>MISS</option>,
            <option value='Motor Vehicle Accident'>
              Motor Vehicle Accident
            </option>
            ,<option value='Motor Vehicle Theft'>Motor Vehicle Theft</option>,
            <option value='Murder'>Murder</option>,
            <option value='Murder/Negligent Manslaughter'>
              Murder/Negligent Manslaughter
            </option>
            ,<option value='NOTI'>NOTI</option>,
            <option value='NR Sex Offense'>NR Sex Offense</option>,
            <option value='NYSPIN'>NYSPIN</option>,
            <option value='OPEN'>OPEN</option>,
            <option value='OVRD'>OVRD</option>,<option value='P3'>P3</option>,
            <option value='PCHK'>PCHK</option>,
            <option value='PDAA'>PDAA</option>,
            <option value='PDAM'>PDAM</option>,
            <option value='PDHR'>PDHR</option>,
            <option value='PDVB'>PDVB</option>,
            <option value='PIAA'>PIAA</option>,
            <option value='PIAB'>PIAB</option>,
            <option value='PIHR'>PIHR</option>,
            <option value='PINJ'>PINJ</option>,
            <option value='PIVB'>PIVB</option>,
            <option value='PKNG'>PKNG</option>,
            <option value='Plain Clothes'>Plain Clothes</option>,
            <option value='POI'>POI</option>,
            <option value='Pornography'>Pornography</option>,
            <option value='Power Failure'>Power Failure</option>,
            <option value='Rape'>Rape</option>,
            <option value='Reckless Driving'>Reckless Driving</option>,
            <option value='RECV'>RECV</option>,
            <option value='Relationship Violence'>Relationship Violence</option>
            ,<option value='Resale of Tickets'>Resale of Tickets</option>,
            <option value='ROBB'>ROBB</option>,
            <option value='Robbery – Attempted'>Robbery – Attempted</option>,
            <option value='ROBI'>ROBI</option>,
            <option value='Run By'>Run By</option>,
            <option value='S49'>S49</option>,<option value='S50'>S50</option>,
            <option value='Scalping – Resale of Tickets'>
              Scalping – Resale of Tickets
            </option>
            ,
            <option value='Sex Offense – Anonymously Reported'>
              Sex Offense – Anonymously Reported
            </option>
            ,<option value='Shift Start'>Shift Start</option>,
            <option value='SHOI'>SHOI</option>,
            <option value='SHOT'>SHOT</option>,
            <option value='Siren Test'>Siren Test</option>,
            <option value='Skateboarding'>Skateboarding</option>,
            <option value='Smoking Complaint'>Smoking Complaint</option>,
            <option value='Solicitation'>Solicitation</option>,
            <option value='Special Event'>Special Event</option>,
            <option value='STAB'>STAB</option>,
            <option value='STAT'>STAT</option>,
            <option value='STLV'>STLV</option>,
            <option value='STOP SUIC'>STOP SUIC</option>,
            <option value='Suicide'>Suicide</option>,
            <option value='SUSI'>SUSI</option>,
            <option value='SUSP'>SUSP</option>,
            <option value='Suspicious Mail'>Suspicious Mail</option>,
            <option value='Suspicious Odor'>Suspicious Odor</option>,
            <option value='Suspicious Package'>Suspicious Package</option>,
            <option value='SUSV'>SUSV</option>,
            <option value='SUSW'>SUSW</option>,
            <option value='SXOF'>SXOF</option>,
            <option value='TAMP'>TAMP</option>,
            <option value='Tampering'>Tampering</option>,
            <option value='Test'>Test</option>,
            <option value='TISP'>TISP</option>,
            <option value='Training'>Training</option>,
            <option value='TRES'>TRES</option>,
            <option value='University Policy Violation'>
              University Policy Violation
            </option>
            ,<option value='Unknown'>Unknown</option>,
            <option value='Visitor'>Visitor</option>,
            <option value='Weapons Safekeeping'>Weapons Safekeeping</option>,
            <option value='Weapons Violation'>Weapons Violation</option>,
            <option value='Weapons-Not Illegal SU Policy'>
              Weapons-Not Illegal SU Policy
            </option>
            ,<option value='WTRP'>WTRP</option>,
            <option value='XING'>XING</option>
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

        <div className='form-group'>
          <small className='form-text'>*Location of Incident</small>
          <input
            type='text'
            placeholder='Location / address'
            name='Location'
            value={Location}
            onChange={e => onChange(e)}
          />
        </div>

        <div className='form-group'>
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
        <small className='form-text'>*Write incident description:</small>
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
          <small className='form-text'>*Time of incident:</small>
          <input
            type='time'
            // placeholder='00:00'
            name='time'
            value={time}
            onChange={e => onChange(e)}
          />
        </div>

        <div className='form-group'>
          <small className='form-text'>*Date of incident:</small>
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
