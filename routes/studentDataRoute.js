const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const { getStudentData, addStudentData, editStudentData, deleteStudentData } = require('../controllers/studentController');

router.post('/getStudents',getStudentData);
router.post('/addStudent',addStudentData );
router.put('/editStudent/:id',editStudentData );
router.delete('/deleteStudent/:id',deleteStudentData)


module.exports = router;
