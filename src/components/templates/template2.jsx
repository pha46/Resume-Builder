import React from 'react';
import './template2.css';
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PlaceIcon from '@mui/icons-material/Place';
import ApiIcon from '@mui/icons-material/Api';
import backgroundImage from '../../assets/background.jpg';

const Template2 = () => {
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
      <div className='template2-container' style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'top',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
      <div className="template2-sidebar">
      <div>
  {photo ? 
    <div className='photo-wrapper'>
      <img src={photo} className='photo-template2' alt='' />
    </div> : 
    <Avatar className='AVatar-template2'>
      {getInitials(personal.firstName, personal.lastName)}
    </Avatar>
  }
</div>
        <div>
        <h3 style={{ color: '#497194', fontSize: '25px'}}>
          <ApiIcon style={{ color: '#497194', fontSize: '25px', verticalAlign: 'top' }} />&nbsp;SKILLS</h3>
          <ul style={{paddingLeft:'2px', textTransform:'capitalize'}} className="template2-skills">
            {(skills ? Object.values(skills) : []).map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="main-content2">
          <div className='su'>
            <h2 style={{
              fontSize: '35px',
              textTransform: 'capitalize',
             }}>{personal.firstName} {personal.lastName}</h2>
            <p>{personal.overview}</p>
            <p>
              <div>
                <p>
                <MailOutlineIcon style={{ color: 'rgb(185, 17, 45)', fontSize: '22px', verticalAlign: 'top' }} />&nbsp;
                  <span style={{color:'black', fontSize: '20px'}}>Email: </span> 
                  <span style={{color:'blue'}}>{personal.email}</span> &nbsp;
                  <PhoneIphoneIcon style={{ color: 'rgb(185, 17, 45)', fontSize: '22px', verticalAlign: 'top' }} />&nbsp;
                  <span style={{color:'black', fontSize: '20px'}}>Phone: </span> 
                  <span style={{color:'blue'}}>{personal.mobile}</span>
                </p>
                <p className='address'>
                <PlaceIcon style={{ color: 'rgb(185, 17, 45)', fontSize: '22px', verticalAlign: 'top' }} />&nbsp;
                  <span style={{color:'black', fontSize: '20px'}}>Address:</span> &nbsp;
                  <span style={{color: '#666'}}>{personal.address},</span><br/>
                  <span style={{color: '#666', paddingLeft:'120px'}}>{personal.city},</span> &nbsp;
                  <span style={{color: '#666'}}>{personal.state},</span> &nbsp;
                  <span style={{color: '#666'}}>{personal.postalCode}</span>
                </p>
              </div>
            </p><hr></hr>
          </div>
          <h2><ApiIcon style={{ color: '#497194', fontSize: '28px', verticalAlign: 'top' }} />&nbsp;Work Experience:</h2>
          <div className='ex2'>
            {experienceArray.map((job, index) => (
              <p key={index} className='timeline2'>
                  <span className="orgName2">{job.orgName}</span><br/>
                  <span className="jobTitle2">{job.jobTitle}</span><br/>
                  <span style={{color:'#497194'}} className="startYear2">{job.startYear}</span>&nbsp;-&nbsp;
                  <span style={{color:'#497194'}} className="endYear2">{job.endYear}</span>
              </p>
            ))}
          </div>
          <hr />
          <h2><ApiIcon style={{ color: '#497194', fontSize: '28px', verticalAlign: 'top' }} />&nbsp;Education:</h2>
          <div className='ed2'>
            {educationArray.map((edu, index) => (
              <p key={index} className='timeline2'>
                  <span className="type2">{edu.type}</span><br/>
                  <span className="university_collegeName2">{edu.university_collegeName}</span><br/>
                  <span className="Grade_Score2">{edu.Grade_Score}</span><br/>
                  <span style={{color:'#497194'}} className="startYear2">{edu.Start_Year}</span>&nbsp;-&nbsp;
                  <span style={{color:'#497194'}} className="endYear2">{edu.End_Year}</span>
              </p>
            ))}
          </div>
          <span></span>      
      </div>
    </div>
    </>
  );
};

export default Template2;