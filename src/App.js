import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import ResumeTemplate from './pages/ResumeTemplate';
import TemplateForm from './pages/TemplateForm';
import MyResume from './pages/MyResume';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resume-template" element={<ResumeTemplate />} />
        <Route path="/template-form" element={<TemplateForm />} />
        <Route path="/my-resume" element={<MyResume />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;