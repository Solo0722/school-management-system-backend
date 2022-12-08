import express from "express";
import {
  createStudent,
  deleteStudent,
  getSingleStudent,
  getStudents,
  updateStudent,
} from "../controllers/students.js";

const studentsRoutes = express.Router();

studentsRoutes.get("/", getStudents);
studentsRoutes.post("/", createStudent);
studentsRoutes.get("/:id", getSingleStudent);
studentsRoutes.patch("/:id", updateStudent);
studentsRoutes.delete("/:id", deleteStudent);

export default studentsRoutes;
