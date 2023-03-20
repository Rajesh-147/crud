import express from "express";
const router = express.Router();
import {
  createStudent,
  getStudent,
  updateStudent,
  deleteStudent,
} from "../Controller/students.js";

router.post("/createStudent", createStudent);

router.get("/getStudent", getStudent);

router.put("/updateStudent", updateStudent);

router.delete("/deleteStudent/:id", deleteStudent);

export default router;
