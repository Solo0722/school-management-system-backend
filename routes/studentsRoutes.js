import express from "express";
import { createStudent, deleteStudent, getSingleStudent, getStudents } from "../controllers/students.js";

const studentsRoutes = express.Router();

studentsRoutes.get("/", getStudents);
studentsRoutes.post("/", createStudent);
studentsRoutes.get("/:id", getSingleStudent);
studentsRoutes.delete("/:id", deleteStudent);

export default studentsRoutes;
