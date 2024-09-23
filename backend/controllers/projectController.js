const Project = require('../models/Project');

exports.getProjects = async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
};

exports.createProject = async (req, res) => {
  const newProject = new Project(req.body);
  const savedProject = await newProject.save();
  res.json(savedProject);
};

exports.updateProject = async (req, res) => {
  const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedProject);
};

exports.deleteProject = async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};
