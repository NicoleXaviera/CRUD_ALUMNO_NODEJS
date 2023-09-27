import { Router } from "express";
import {
  createStudents,
  deleteStudent,
  editStudent,
  renderStudents,
  updateStudent,
} from "../controllers/studentController.js";
const router = Router();

router.get("/", renderStudents);
router.post("/add", createStudents);
router.get("/update/:id", editStudent);
router.post("/update/:id", updateStudent);
router.get("/delete/:id", deleteStudent);

export default router;

