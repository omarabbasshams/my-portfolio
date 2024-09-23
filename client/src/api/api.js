import axios from 'axios';

export const getProjects = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  const res = await axios.get('/api/projects', config);
  return res.data;
};

export const createProject = async (project, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  };
  const res = await axios.post('/api/projects', project, config);
  return res.data;
};

export const updateProject = async (id, project, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  };
  const res = await axios.put(`/api/projects/${id}`, project, config);
  return res.data;
};

export const deleteProject = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  const res = await axios.delete(`/api/projects/${id}`, config);
  return res.data;
};

// Skills API functions
export const getSkills = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  const res = await axios.get('/api/skills', config);
  return res.data;
};

export const createSkill = async (skill, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  };
  const res = await axios.post('/api/skills', skill, config);
  return res.data;
};

export const updateSkill = async (id, skill, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  };
  const res = await axios.put(`/api/skills/${id}`, skill, config);
  return res.data;
};

export const deleteSkill = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  const res = await axios.delete(`/api/skills/${id}`, config);
  return res.data;
};
