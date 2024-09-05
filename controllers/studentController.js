const bcrypt = require("bcryptjs");
const Students = require("../models/Students");

const getStudentData = async (req, res) => {
  try {
    const tid = req.body.teacherId;
    const data = await Students.find({ teacherId: tid });

    if (data.length > 0) {
      res.status(200).json({ studentData: data });
    } else {
      res.status(404).json({ message: "No students found for this teacher." });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

const addStudentData = async (req, res) => {
  try {
    const student = new Students(req.body);
    const savedStudent = await student.save();

    res
      .status(201)
      .json({ message: "Student added successfully", student: savedStudent });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

const editStudentData = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updatedStudent = await Students.findByIdAndUpdate(id, updates, {
      new: true,
    });

    if (updatedStudent) {
      res
        .status(200)
        .json({
          message: "Student updated successfully",
          student: updatedStudent,
        });
    } else {
      res.status(404).json({ message: "Student not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

const deleteStudentData = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedStudent = await Students.findByIdAndDelete(id);

    if (deletedStudent) {
      res.status(200).json({ message: "Student deleted successfully" });
    } else {
      res.status(404).json({ message: "Student not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

module.exports = {
  getStudentData,
  addStudentData,
  editStudentData,
  deleteStudentData,
};
