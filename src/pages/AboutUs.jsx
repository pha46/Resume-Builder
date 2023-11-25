import React from 'react';
import './AboutUs.css';
import AboutUS from '../assets/AboutUS.jpg';
import { FaEnvelope, FaWhatsapp, FaSms, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';

const AboutUs = () => {
  return(
    <div className="about-us">
      <h2>About Us</h2><hr className='AboutHr'></hr>
      <div className="about-us-content">
        <div className="about-me">
          <p>
            Welcome to our website! 
          </p>
          <p className="about-us-text">
            I've created this resume builder to help job seekers create professional resumes with ease.
          </p>
          <p>
            I've designed this platform to be intuitive and user-friendly,
            ensuring you can create a standout resume without any design experience.
          </p>
          <p>
            Thank you for choosing this site for your resume building journey.
          </p>
          <p >
            I look forward to helping you land your dream job!
          </p>
          <br></br>
          <p style={{color:'black'}}>Share with your friends:</p>
          <div className="social-media">
            
            <a href={`mailto:?subject=Check out this awesome resume builder&body=Here is the link to the website: https://pha46.github.io/Resume-Builder/`} target="_blank" rel="noopener noreferrer">          
    <FaEnvelope size="30px" />
            </a>
            <a href="whatsapp://send?text=Check out this awesome resume builder: https://pha46.github.io/Resume-Builder/" target="_blank" rel="noopener noreferrer">          
    <FaWhatsapp size="30px" />
            </a>
            <a href={`sms:?body=Check out this awesome resume builder: https://pha46.github.io/Resume-Builder/`} target="_blank" rel="noopener noreferrer">
              <FaSms size="30px" />
            </a>
            <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://pha46.github.io/Resume-Builder/&title=Check out this awesome resume builder" target="_blank" rel="noopener noreferrer">
    <FaLinkedin size="30px" />
            </a>
            <a href="https://www.facebook.com/sharer/sharer.php?u=https://pha46.github.io/Resume-Builder/" target="_blank" rel="noopener noreferrer">
    <FaFacebook size="30px" />
            </a>
            <a href="https://twitter.com/intent/tweet?text=Check out this awesome resume builder: https://pha46.github.io/Resume-Builder/" target="_blank" rel="noopener noreferrer">
    <FaTwitter size="30px" />
            </a>
          </div>
        </div>
        <div className="about-us-image">
          <img src={AboutUS} alt="About Us" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;