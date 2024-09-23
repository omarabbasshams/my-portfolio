import React, { useState, useEffect, useContext, useCallback } from 'react';
import { getProjects, createProject, updateProject, deleteProject } from '../api/api';
import { AuthContext } from '../context/AuthContext';

const AdminProjects = () => {
  const { auth } = useContext(AuthContext);
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({ name: '', description: '', image: '' });

  // useCallback to memoize the function so it doesn't change between renders unless auth.token changes
  const loadProjects = useCallback(async () => {
    const projects = await getProjects(auth.token);
    setProjects(projects);
  }, [auth.token]);

  useEffect(() => {
    loadProjects();
  }, [loadProjects]);

  const handleCreateProject = async () => {
    await createProject(newProject, auth.token);
    setNewProject({ name: '', description: '', image: '' });
    loadProjects();
  };

  const handleUpdateProject = async (id) => {
    const updatedProject = projects.find(p => p._id === id);
    await updateProject(id, updatedProject, auth.token);
    loadProjects();
  };

  const handleDeleteProject = async (id) => {
    await deleteProject(id, auth.token);
    loadProjects();
  };

  return (
    <div>
      <h1>Manage Projects</h1>
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
      <div>
        {projects.map(project => (
          <div key={project._id}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <button onClick={() => handleUpdateProject(project._id)}>Edit</button>
            <button onClick={() => handleDeleteProject(project._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminProjects;
