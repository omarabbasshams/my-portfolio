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

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin/projects" element={<ProtectedRoute component={AdminProjects} />} />
            <Route path="/admin/skills" element={<ProtectedRoute component={AdminSkills} />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
