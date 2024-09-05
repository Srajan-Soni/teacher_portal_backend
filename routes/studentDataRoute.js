const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const { getStudentData, addStudentData, editStudentData, deleteStudentData } = require('../controllers/studentController');

router.post('/getStudents',auth,getStudentData);
router.post('/addStudent',auth,addStudentData );
router.put('/editStudent/:id',auth,editStudentData );
router.delete('/deleteStudent/:id',auth,deleteStudentData)


module.exports = router;
