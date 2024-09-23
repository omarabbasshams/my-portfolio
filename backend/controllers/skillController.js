const Skill = require('../models/Skill');

exports.getSkills = async (req, res) => {
  const skills = await Skill.find();
  res.json(skills);
};

exports.createSkill = async (req, res) => {
  const newSkill = new Skill(req.body);
  const savedSkill = await newSkill.save();
  res.json(savedSkill);
};

exports.updateSkill = async (req, res) => {
  const updatedSkill = await Skill.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedSkill);
};

exports.deleteSkill = async (req, res) => {
  await Skill.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};
