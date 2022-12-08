import mongoose from "mongoose";
import TeacherInfo from "../models/teacher.js";

export const getStaff = async (req, res) => {
  try {
    const staff = await TeacherInfo.find();

    res.status(200).json(staff);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createTeacher = async (req, res) => {
  const teacher = req.body;
  const newTeacher = new TeacherInfo(teacher);
  try {
    await newTeacher.save();

    res.status(201).json(newTeacher);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getSingleTeacher = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No teacher with that ID");

  try {
    const teacher = await TeacherInfo.findById(id);
    res.status(200).json(teacher);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateTeacher = async (req, res) => {
  const { id } = req.params;
  const teacher = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No student with that ID");

  try {
    const updatedTeacher = await TeacherInfo.findByIdAndUpdate(id, teacher, {
      new: true,
    });
    res.status(200).json(updatedTeacher);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteTeacher = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No teacher with that ID");

  try {
    await TeacherInfo.findByIdAndDelete(id);
    res.status(200).json(teacher);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
