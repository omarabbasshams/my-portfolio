import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Login from './pages/Login';
import AdminProjects from './pages/AdminProjects';
import AdminSkills from './pages/AdminSkills';
import ProtectedRoute from './components/ProtectedRoute';
import AuthProvider from './context/AuthContext';
import MovingBackground from './components/MovingBackground';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Timeline from './components/Timeline';
import ExperienceTimeline from './components/ExperienceTimeline';
import ServicesSection from './components/ServicesSection';
import FooterSection from './components/FooterSection';



function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Header />
          <MovingBackground></MovingBackground>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin/projects" element={<ProtectedRoute component={AdminProjects} />} />
            <Route path="/admin/skills" element={<ProtectedRoute component={AdminSkills} />} />
          </Routes>
          <Timeline></Timeline>
          <ExperienceTimeline></ExperienceTimeline>
          <ServicesSection></ServicesSection>
          <FooterSection></FooterSection>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
