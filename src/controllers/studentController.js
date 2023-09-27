import { pool } from "../db.js";

export const renderStudents = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM student");
  res.render("students", { students: rows });
};

export const createStudents = async (req, res) => {
  const newStudent = req.body;
  await pool.query("INSERT INTO student set ?", [newStudent]);
  res.redirect("/");
};

export const editStudent = async (req, res) => {
  const { id } = req.params;
  const [result] = await pool.query("SELECT * FROM student WHERE id = ?", [
    id,
  ]);
  res.render("students_edit", { student: result[0] });
};

export const updateStudent = async (req, res) => {
  const { id } = req.params;
  const newStudent = req.body;
  await pool.query("UPDATE student SET ? WHERE id = ?", [newStudent, id]);
  res.redirect("/");
};

export const deleteStudent = async (req, res) => {
  const { id } = req.params;
  const result = await pool.query("DELETE FROM student WHERE id = ?", [id]);
  if (result.affectedRows === 1) {
    res.json({ message: "Student deleted" });
  }
  res.redirect("/");
};

