import { Router } from "express";
import {
  getEmployees,
  createEmployees,
  deleteEmployees,
  putEmployees,
  getEmployee,
} from "../controllers/employees.controller.js";
const router = Router();

router.get("/employees", getEmployees);
router.get("/employee/:id", getEmployee);
router.post("/employees", createEmployees);
router.patch("/employees/:id", putEmployees);
router.delete("/employees/:id", deleteEmployees);

export default router;
