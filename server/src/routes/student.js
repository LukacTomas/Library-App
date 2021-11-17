import express from "express";
import {
  addStudent,
  getStudents,
  updateStudent,
  deleteStudent,
  getStudent,
} from "../controllers/Student/index.js";
import { makeCallback } from "../express-callback/makeCallback.js";
const router = express.Router();

router.get("/", makeCallback(getStudents));
router.get("/:_id", makeCallback(getStudent));
router.post("/", makeCallback(addStudent));
router.put("/", makeCallback(updateStudent));
router.delete("/", makeCallback(deleteStudent));

export default router;
