import express from "express";
import {
  createTeacher,
  deleteTeacher,
  getSingleTeacher,
  getStaff,
  updateTeacher,
} from "../controllers/staff.js";

const staffRoutes = express.Router();

staffRoutes.get("/", getStaff);
staffRoutes.post("/", createTeacher);
staffRoutes.get("/:id", getSingleTeacher);
staffRoutes.patch("/:id", updateTeacher);
staffRoutes.delete("/:id", deleteTeacher);

export default staffRoutes;
