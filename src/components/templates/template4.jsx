import React from 'react';
import './template4.css';
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

const Template4 = () => {
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
      <div className='container4'>
        <div className='sidebar4'>
          <div>
            {photo ? 
              <div className='photo-wrapper4'>
                <img src={photo} className='photo-template4' alt='' />
              </div> : 
              <Avatar className='AVatar-template4'>
                {getInitials(personal.firstName, personal.lastName)}
              </Avatar>
            }
          </div>
          <div>
            <h2>
              <p style={{marginBottom:'2px', fontWeight:'normal'}}>{personal.firstName}</p>
              <p style={{marginTop:'2px'}}>{personal.lastName}</p>
            </h2>
          </div>
          <div>
            <p className='sidebar4-p'>
              <ContactsOutlinedIcon style={{verticalAlign: '-4px'}} /> &nbsp;  Contact
            </p>
              <p style={{ paddingLeft:'20px'}}>
                <PlaceIcon style={{ color: 'black', fontSize: '22px', verticalAlign: 'top' }} /> &nbsp;
                <span style={{color: '#666'}}>{personal.address},</span><br/>&nbsp;
                <span style={{color: '#666', paddingLeft:'28px'}}>{personal.city},</span>&nbsp;
                <span style={{color: '#666'}}>{personal.state},</span><br/>
                <span style={{color: '#666', paddingLeft:'28px'}}>{personal.postalCode}</span> &nbsp;<br/><br></br>
                <PhoneIcon style={{ color: 'black', fontSize: '22px', verticalAlign: 'top' }} /> &nbsp;
                <span style={{color:'#666'}}>{personal.mobile}</span><br/><br></br>
                <EmailIcon style={{ color: 'black', fontSize: '22px', verticalAlign: 'top' }} /> &nbsp; 
                <span style={{color:'#666'}}>{personal.email}</span> &nbsp;
              </p>
          </div>
          <div>
            <p className='sidebar4-p'><SettingsOutlinedIcon style={{verticalAlign: '-4px'}}/> &nbsp;Skills</p>
            <p>
              <ul className="template4-skills">
                {(skills ? Object.values(skills) : []).map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </p>
          </div>
        </div>
        <div className='main-content4'>
          <div className='overview4'>
            <p className='main-content4-p'><PersonIcon style={{verticalAlign: '-4px'}} /> &nbsp;About Me</p>
            <p style={{paddingLeft:'10px'}}>{personal.overview}</p>
          </div>
          <div className='content4'>
            <p className='main-content4-p'><SchoolIcon style={{verticalAlign: '-4px'}} /> &nbsp;Education</p>
            <p className='list4'>
              {educationArray.map((edu, index) => (
                <p key={index} className='timeline4'>
                    <span className="type4">{edu.type}</span><br/>
                    <span style={{color:'#497194'}} className="endYear4">{edu.End_Year}</span>&nbsp;-&nbsp;
                    <span style={{color:'#497194'}} className="startYear4">{edu.Start_Year}</span><br/>
                    <span className="Grade_Score4">{edu.Grade_Score}</span><br/>
                    <span className="university_collegeName4">{edu.university_collegeName}</span>
                    <p></p>
                </p>
              ))}
              
            </p>
          </div>
          <div className='content4'>
            <p className='main-content4-p'><WorkIcon style={{verticalAlign: '-4px'}} /> &nbsp;Work Experience</p>
            <p className='list4'>
              {experienceArray.map((job, index) => (
                <p key={index} className='timeline4'>
                    <span className="orgName4">{job.orgName}</span><br/>
                    <span style={{color:'#497194'}} className="startYear4">{job.startYear}</span>&nbsp;-&nbsp;
                    <span style={{color:'#497194'}} className="endYear4">{job.endYear}</span><br/>
                    <span className="jobTitle4">{job.jobTitle}</span>
                    <p></p>
                </p>
              ))}
              
            </p>
          </div>
        </div>
      </div>
  );
};

export default Template4;