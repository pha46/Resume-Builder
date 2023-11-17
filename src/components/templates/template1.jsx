import React from 'react';
import { useSelector } from 'react-redux';
import './template1.css';
import Avatar from '@mui/material/Avatar';

const Template1 = () => {
  const photo = useSelector(state => state.root.profilePhoto);
  const personal = useSelector(state => state.root.formData.personalInfo);
  const experience = useSelector(state => state.root.formData.experience);
  const experienceArray = Object.values(experience);
  const education = useSelector(state => state.root.formData.education);
  const educationArray = Object.values(education);
  const skills = useSelector(state => state.root.formData.skills);

  const getInitials = (firstName, lastName) => {
    if (!firstName || !lastName) return "";
    return `${firstName[0]}${lastName[0]}`;
  };

  return (
    <div className='template1-container'>
      <div className="template1-sidebar">
          {photo ? <img src={photo} className='photo' alt='AVatar' /> : 
          <Avatar className='AVatar'>
            {getInitials(personal.firstName, personal.lastName)}
          </Avatar>}
          <h2>{personal.firstName} {personal.lastName}</h2>
          <p>Phone: {personal.mobile}</p>
          <p>Email: {personal.email}</p>
          <p>Address: {personal.address}<br/>
            {personal.city}<br/>
            {personal.state}<br/>
            {personal.postalCode}
          </p>
          <h3>Skills:</h3>
          <ul className="template1-skills">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
      </div>
      <div className="main-content">
          <h2>Summary:</h2>
          <p>{personal.overview}</p>
          <hr />
          <h2>Experience:</h2>
          {experienceArray.map((job, index) => (
              <p key={index}>
                  <span className="jobTitle">{job.jobTitle}</span> •&nbsp;
                  <span className="startYear">{job.startYear}</span>&nbsp;-&nbsp;
                  <span className="endYear">{job.endYear}</span><br/>
                  <span className="orgName">{job.orgName}</span>
              </p>
          ))}
          <hr />
          <h2>Education:</h2>
          {educationArray.map((edu, index) => (
              <p key={index}>
                  <span className="type">{edu.type}</span><br/>
                  <span className="university_collegeName">{edu.university_collegeName}</span><br/>
                  <span className="Grade_Score">{edu.Grade_Score}</span><br/>
                  <span className="Start_Year">{edu.Start_Year}</span>&nbsp;-&nbsp;
                  <span className="End_Year">{edu.End_Year}</span>
              </p>
          ))}
      </div>
    </div>
  );
};

export default Template1;