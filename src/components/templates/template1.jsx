// Template1.js
import React from 'react';
import '../../styles/template1.css';

const Template1 = () => {
  return (
    <div className="template">
      <div className="header">
        <h2>Template 1</h2>
        <p>123 Address Street, City, State - 12345</p>
        <p>Email: template1@example.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
      
      <div className="section">
        <h3>Objective</h3>
        <p>A highly motivated individual looking for the next step in my career.</p>
      </div>
      
      <div className="section">
        <h3>Education</h3>
        <p>B.Sc. in Computer Science, University Name,  Start Year - End Year</p>
      </div>
      
      <div className="section">
        <h3>Experience</h3>
        <ul>
          <li>Software Developer at XYZ Corp, Start Year - End Year</li>
          <li>Junior Developer at ABC Corp, Start Year - End Year</li>
        </ul>
      </div>
      
      <div className="section">
        <h3>Skills</h3>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
        </ul>
      </div>
      
      <div className="section">
        <h3>References</h3>
        <p>Available upon request</p>
      </div>
    </div>
  );
};

export default Template1;