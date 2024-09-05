const express = require('express');
const router = express.Router();
const { signup } = require('../controllers/teacherController');
const { login } = require('../controllers/teacherController');
const auth = require('../middlewares/auth');

router.post('/signup', signup);
router.post('/login', login);

module.exports = router;
