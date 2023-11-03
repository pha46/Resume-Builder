import React from 'react';
import { useSelector } from 'react-redux';
import './Resume4.css';

const Template4 = () => {
  const data = useSelector(state => state.formR.formData); // Update this line to match your actual Redux state structure
  const photo = useSelector(state => state.photo.profilePhoto);


  return (
    <div className='container'>
      <div className="sidebar">
          <img src={photo} alt="Your Image" />
          <h2>{data.firstName} {data.lastName}</h2>
          <p>Phone: {data.mobile}</p>
          <p>Email: {data.email}</p>
          <p>Address: {data.address}, {data.city}, {data.state}, {data.postalCode}</p>
          <h3>Skills</h3>
          <ul>
              {/* replace this with actual skills data if available */}
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
          </ul>
      </div>
      <div className="main-content">
          <h2>Summary</h2>
          <p>{data.overview}</p>
          <hr />
          <h2>Work History</h2>
          <p>{data.orgName} - {data.jobTitle} <br /> {data.startYear} - {data.endYear}</p>
          <hr />
          <h2>Education</h2>
          <p>{/* your education data here... */}</p>
      </div>
    </div>
  );
};

export default Template4;