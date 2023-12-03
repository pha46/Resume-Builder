import React from 'react';
import './template3.css';
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PlaceIcon from '@mui/icons-material/Place';
import backgroundImage3 from '../../assets/background3.jpg';

const Template3 = () => {
  // use Redux state in the component
  const photo = useSelector(state => state.root.profilePhoto);
  const personal = useSelector(state => state.root.formData.personalInfo) || {};

  // selector for experience array
  const experience = useSelector(state => state.root.formData.experience);
  const experienceArray = experience ? Object.values(experience) : [];

  // selector for education array
  const education = useSelector(state => state.root.formData.education);
  const educationArray = education ? Object.values(education) : [];

  // selector for skills object
  const skills = useSelector(state => state.root.formData.skills);

  // function to get initials from user's first name and last name
  const getInitials = (firstName, lastName) => {
    if (!firstName || !lastName) return "";
    return `${firstName[0]}${lastName[0]}`;
  };

  return (
    <>
      <div className='template3-container' style={{
        backgroundImage: `url(${backgroundImage3})`,
        backgroundPosition: 'top',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="template3-top">
          <div style={{alignSelf:'center'}}>
            {photo ? 
              <div className='photo-wrapper3'>
                <img src={photo} className='photo-template3' alt='' />
              </div> : 
              <Avatar className='AVatar-template3'>
                {getInitials(personal?.firstName, personal?.lastName)}
              </Avatar>
            }
          </div>
          <div style={{ paddingLeft: '50px', }}>
            <h2 style={{
              fontSize: '40px',
              textTransform: 'uppercase',
              marginBottom: '1px',
             }}>{personal?.firstName} {personal?.lastName}
            </h2>
            <div style={{marginTop:'1px'}}>
              <MailOutlineIcon style={{ color: 'rgb(185, 17, 45)', fontSize: '22px', verticalAlign: 'top' }} />&nbsp;
              <span style={{color:'blue'}}>{personal.email}</span>&nbsp;  | &nbsp;
              <PhoneIphoneIcon style={{ color: 'rgb(185, 17, 45)', fontSize: '22px', verticalAlign: 'top' }} />&nbsp;
              <span style={{color:'blue'}}>{personal.mobile}</span><br></br>
              <PlaceIcon style={{ color: 'rgb(185, 17, 45)', fontSize: '22px', verticalAlign: 'top' }} />&nbsp;
                  <span style={{color:'black', fontSize: '20px'}}></span> &nbsp;
                  <span style={{color: '#666'}}>{personal.address},</span><br/>
                  <span style={{color: '#666', paddingLeft:'35px'}}>{personal.city},</span> &nbsp;
                  <span style={{color: '#666'}}>{personal.state},</span> &nbsp;
                  <span style={{color: '#666'}}>{personal.postalCode}</span>
            </div>
          </div>
        </div>
        <div className="main-content3">
          <div style={{display: 'flex', flexDirection: 'row'}} className='summary3'>
            <div style={{
              color:'rgb(189, 139, 12)',
              textAlign:'right',
              fontSize:'25px',
              width:'30%',
              }} className='left-side3'><p>PROFESSIONAL SUMMARY</p></div>
            <div style={{paddingLeft:'5%', width: '70%'}} className='right-side3'><p>{personal.overview}</p></div>
          </div><hr></hr>
          <div style={{display: 'flex', flexDirection: 'row'}} className='skills3'>
            <div style={{
              color:'rgb(189, 139, 12)',
              textAlign:'right', 
              fontSize:'25px',
              width: '30%', 
              }} className='left-side3'><p>SKILLS</p></div>
            <div style={{paddingLeft:'5%', width: '70%'}} className='right-side3'>
              <ul style={{ textTransform:'capitalize', paddingInlineStart: '20px' }} className="template3-skills">
                {(skills ? Object.values(skills) : []).map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
            <div></div>
          </div><hr></hr>
          <div style={{display: 'flex', textTransform:'capitalize', flexDirection: 'row'}} className='experience3'>
            <div style={{
              color:'rgb(189, 139, 12)',
              textAlign:'right', 
              fontSize:'25px',
              width: '30%', 
              }} className='left-side3'><p>EXPERIENCE</p>
              </div>
              <div style={{paddingLeft:'5%', width: '70%'}} className='right-side3'>
                {experienceArray.map((job, index) => (
                  <div key={index} className='timeline3'>
                    <span className="orgName3">{job.orgName}</span><br/>
                    <span className="jobTitle3">{job.jobTitle}</span><br/>
                    <span style={{color:'#497194'}} className="startYear3">{job.startYear}</span>&nbsp;-&nbsp;
                    <span style={{color:'#497194'}} className="endYear3">{job.endYear}</span>
                  </div>
                ))}
              </div>
          </div><hr></hr>
          <div style={{display: 'flex', flexDirection: 'row'}} className='education3'>
            <div style={{
              color:'rgb(189, 139, 12)',
              textAlign:'right', 
              fontSize:'25px',
              width: '30%', 
              }} className='left-side3'><p>EDUCATION</p>
            </div>
            <div style={{paddingLeft:'5%', width: '70%'}} className='right-side3'>
              {educationArray.map((edu, index) => (
                <div key={index} className='timeline3'>
                  <span className="type3">{edu.type}</span><br/>
                  <span className="university_collegeName3">{edu.university_collegeName}</span><br/>
                  <span className="Grade_Score3">{edu.Grade_Score}</span><br/>
                  <span style={{color:'#497194'}} className="startYear3">{edu.Start_Year}</span>&nbsp;-&nbsp;
                  <span style={{color:'#497194'}} className="endYear3">{edu.End_Year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Template3;