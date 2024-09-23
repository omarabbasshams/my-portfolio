import React, { useState, useEffect, useContext } from 'react';
import { getSkills, createSkill, updateSkill, deleteSkill } from '../api/api';
import { AuthContext } from '../context/AuthContext';

const AdminSkills = () => {
  const { auth } = useContext(AuthContext);
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState({ name: '', level: 0 });

  useEffect(() => {
    loadSkills();
  }, []);

  const loadSkills = async () => {
    const skills = await getSkills();
    setSkills(skills);
  };

  const handleCreateSkill = async () => {
    await createSkill(newSkill, auth.token);
    setNewSkill({ name: '', level: 0 });
    loadSkills();
  };

  const handleUpdateSkill = async (id) => {
    const updatedSkill = skills.find(s => s._id === id);
    await updateSkill(id, updatedSkill, auth.token);
    loadSkills();
  };

  const handleDeleteSkill = async (id) => {
    await deleteSkill(id, auth.token);
    loadSkills();
  };

  return (
    <div>
      <h1>Manage Skills</h1>
      <div>
        <input
          type="text"
          placeholder="Skill Name"
          value={newSkill.name}
          onChange={e => setNewSkill({ ...newSkill, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Skill Level"
          value={newSkill.level}
          onChange={e => setNewSkill({ ...newSkill, level: e.target.value })}
        />
        <button onClick={handleCreateSkill}>Add Skill</button>
      </div>
      <div>
        {skills.map(skill => (
          <div key={skill._id}>
            <h2>{skill.name}</h2>
            <p>Level: {skill.level}</p>
            <button onClick={() => handleUpdateSkill(skill._id)}>Edit</button>
            <button onClick={() => handleDeleteSkill(skill._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminSkills;
