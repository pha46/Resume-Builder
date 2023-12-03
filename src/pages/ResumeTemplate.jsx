import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Template1 from '../components/templates/template1';
import Template2 from '../components/templates/template2';
import Template3 from '../components/templates/template3';
import Template4 from '../components/templates/template4';
import thumbnail1 from '../assets/Thumbnail1.png';
import thumbnail2 from '../assets/Thumbnail2.png';
import thumbnail3 from '../assets/Thumbnail3.png';
import thumbnail4 from '../assets/Thumbnail4.png';
import './ResumeTemplate.css';
import { selectTemplate } from '../Redux/actions/actions';

// ResumeTemplate component displays the available resume templates for the user to select
function ResumeTemplate() {
  // useDispatch hook to dispatch actions
  const dispatch = useDispatch();

  // Array of templates with their respective thumbnails, components and paths
  const templates = [
    { id: 1, thumbnail: thumbnail1, component: Template1, path: "/template-form" },
    { id: 2, thumbnail: thumbnail2, component: Template2, path: "/template-form" },
    { id: 3, thumbnail: thumbnail3, component: Template3, path: "/template-form" },
    { id: 4, thumbnail: thumbnail4, component: Template4, path: "/template-form" }
    /* Add other templates as needed... */
  ];

  // Function to handle template selection
  const handleSelectTemplate = (id) => {
    // Dispatch selectTemplate action with the selected template id
    dispatch(selectTemplate(id));
  };

  return (
    <>
    <h1>Templates</h1>
    <p className='resume-template'>Get started by selecting a template.</p>
    <div className="templates-grid">
      {/* Map through the templates array and display each template */}
      {templates.map(template => {
        return (
          <div key={template.id} className="template-item">
            <img src={template.thumbnail} alt={`Template ${template.id}`} />
            <div className="overlay">
            {/* Link to the template form and dispatch selectTemplate action on click */}
            <Link to={`${template.path}`} className="view-btn" onClick={() => handleSelectTemplate(template.id)}>Use Template</Link>
            </div>
          </div>
        );
      })}
    </div>
    </>
  );
}

export default ResumeTemplate;