// src/components/Projects.js
import React, { useState, useEffect } from 'react';
import { getProjects, createProject, updateProject, deleteProject } from '../api/api';

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      name: 'Project 1',
      description: 'This is the first project description.',
      image: 'https://example.com/project1.jpg',
    },
    {
      name: 'Project 2',
      description: 'This is the second project description.',
      image: 'https://example.com/project2.jpg',
    },
    {
      name: 'Project 3',
      description: 'This is the third project description.',
      image: 'https://example.com/project3.jpg',
    }
  ]);
  const [newProject, setNewProject] = useState({ name: '', description: '', image: '' });

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    const projects = await getProjects();
    setProjects(projects);
  };

  const handleCreateProject = async () => {
    await createProject(newProject);
    setNewProject({ name: '', description: '', image: '' });
    loadProjects();
  };

  const handleUpdateProject = async (id) => {
    const updatedProject = projects.find(p => p._id === id);
    await updateProject(id, updatedProject);
    loadProjects();
  };

  const handleDeleteProject = async (id) => {
    await deleteProject(id);
    loadProjects();
  };

  return (
    <section id="projects">
      <div className="container">
        <h1>My Projects</h1>
        <div className="project-cards">
          {projects.map(project => (
            <div className="card" key={project._id}>
              <img src={project.image} alt="Project" />
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <button onClick={() => handleUpdateProject(project._id)}>Edit</button>
              <button onClick={() => handleDeleteProject(project._id)}>Delete</button>
            </div>
          ))}
        </div>
        <div>
          <input
            type="text"
            placeholder="Name"
            value={newProject.name}
            onChange={e => setNewProject({ ...newProject, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Description"
            value={newProject.description}
            onChange={e => setNewProject({ ...newProject, description: e.target.value })}
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newProject.image}
            onChange={e => setNewProject({ ...newProject, image: e.target.value })}
          />
          <button onClick={handleCreateProject}>Add Project</button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
