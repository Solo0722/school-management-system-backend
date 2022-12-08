import mongoose from "mongoose";
import StudentInfo from "../models/student.js";

export const getStudents = async (req, res) => {
  try {
    const students = await StudentInfo.find();

    res.status(200).json(students);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createStudent = async (req, res) => {
  const student = req.body;
  const newStudent = new StudentInfo(student);
  try {
    await newStudent.save();

    res.status(201).json(newStudent);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getSingleStudent = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No student with that ID");

  try {
    const student = await StudentInfo.findById(id);
    res.status(200).json(student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateStudent = async (req, res) => {
  const { id } = req.params;
  const student = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No student with that ID");

  try {
    const updatedStudent = await StudentInfo.findByIdAndUpdate(id, student, {
      new: true,
    });
    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteStudent = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No student with that ID");

  try {
    await StudentInfo.findByIdAndDelete(id);
    res.status(200).json(student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
