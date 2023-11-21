import React from 'react';
import { useSelector } from 'react-redux';
import './template1.css';
import Avatar from '@mui/material/Avatar';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PlaceIcon from '@mui/icons-material/Place';

const Template1 = () => {
  const photo = useSelector(state => state.root.profilePhoto);
  const personal = useSelector(state => state.root.formData.personalInfo);
  const experience = useSelector(state => state.root.formData.experience);
  const experienceArray = experience ? Object.values(experience) : [];
  const education = useSelector(state => state.root.formData.education);
  const educationArray = education ? Object.values(education) : [];
  const skills = useSelector(state => state.root.formData.skills);

  const getInitials = (firstName, lastName) => {
    if (!firstName || !lastName) return "";
    return `${firstName[0]}${lastName[0]}`;
  };

  return (
    <>
    <div className='template1-container'>
      <div className="template1-sidebar">
          {photo ? <img src={photo} className='photo' alt='AVatar' /> : 
          <Avatar className='AVatar'>
            {getInitials(personal.firstName, personal.lastName)}
          </Avatar>}
          <h2>{personal.firstName} {personal.lastName}</h2>
          <div>
          <p>
          <PhoneIphoneIcon style={{ color: 'black', fontSize: '28px', verticalAlign: 'top' }} />&nbsp;
            <span style={{color:'black', fontSize: '22px'}}>Phone: </span> 
            <span style={{color:'blue'}}>{personal.mobile}</span>
          </p>
          <p>
          <MailOutlineIcon style={{ color: 'black', fontSize: '28px', verticalAlign: 'top' }} />&nbsp;
            <span style={{color:'black', fontSize: '22px'}}>Email: </span> 
            <span style={{color:'blue'}}>{personal.email}</span>
          </p>
          <p className='address'>
          <PlaceIcon style={{ color: 'black', fontSize: '28px', verticalAlign: 'top' }} />&nbsp;
            <span style={{color:'black', fontSize: '22px'}}>Address:</span><br></br>
            <span>{personal.address && personal.address.split(',').map((line, index) => (
              <React.Fragment key={index}>
                <span style={{color: '#666', paddingLeft:'20px'}}>{line},</span>
                <br />
              </React.Fragment>
            ))}</span>
            <span style={{color: '#666', paddingLeft:'20px'}}>{personal.city},</span><br/>
            <span style={{color: '#666', paddingLeft:'20px'}}>{personal.state},</span><br/>
            <span style={{color: '#666', paddingLeft:'20px'}}>{personal.postalCode}</span>
          </p><hr></hr>
          </div>
          <h3>SKILL'S:</h3>
          <ul style={{paddingLeft:'20px', textTransform:'capitalize'}} className="template1-skills">
            {(skills ? Object.values(skills) : []).map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
      </div>
      <div className="main-content">
          <div className='su'>
            <h2 style={{color:'#0bb5f4'}}>Summary:</h2>
            <p>{personal.overview}</p>
          </div>
          <hr/>
          <h2>Experience:</h2>
          <div className='ex'>
            {experienceArray.map((job, index) => (
              <p key={index} className='timeline'>
                  <span className="jobTitle">{job.jobTitle}</span> •&nbsp;
                  <span className="startYear">{job.startYear}</span>&nbsp;-&nbsp;
                  <span className="endYear">{job.endYear}</span><br/>
                  <span className="orgName">{job.orgName}</span>
              </p>
            ))}
          </div>
          <hr />
          <h2>Education:</h2>
          <div className='ed'>
            {educationArray.map((edu, index) => (
              <p key={index} className='timeline'>
                  <span className="type">{edu.type}</span><br/>
                  <span className="university_collegeName">{edu.university_collegeName}</span><br/>
                  <span className="Grade_Score">{edu.Grade_Score}</span><br/>
                  <span className="startYear">{edu.Start_Year}</span>&nbsp;-&nbsp;
                  <span className="endYear">{edu.End_Year}</span>
              </p>
            ))}
          </div>
      </div>
    </div>
    </>
  );
};

export default Template1;