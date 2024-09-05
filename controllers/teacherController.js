const bcrypt = require('bcryptjs');
const Teacher = require('../models/Teacher');
const jwt = require('jsonwebtoken')

const signup = async (req, res) => {
  const { email, username, password } = req.body;

  try {
  
    let teacher = await Teacher.findOne({ email });
    if (teacher) {
      return res.status(400).json({ msg: 'Teacher already exists' });
    }
   

    teacher = new Teacher({
      email,
      username,
      password
    });

   
    const salt = await bcrypt.genSalt(10);
    teacher.password = await bcrypt.hash(password, salt);

    await teacher.save();

    const payload = {
        teacher : {id : teacher.id}
    }

    const token = jwt.sign(payload , process.env.JWT_TOKEN,{expiresIn : "1h"})

    res.status(201).json({ token  , msg: 'Teacher registered successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

const login = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      let teacher = await Teacher.findOne({ email });
      if (!teacher) {
        return res.status(400).json({ msg: 'Invalid credentials' });
      }
  
      const isMatch = await bcrypt.compare(password, teacher.password);
      if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid credentials' });
      }
  
      const payload = {
        teacher: {
          id: teacher.id
        }
      };
      console.log(teacher);
      
  
      const token = jwt.sign(payload, process.env.JWT_TOKEN, { expiresIn: '1h' });
  
      res.json({ token, msg: 'Teacher logged in successfully',data: teacher , teacherId : teacher.id });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };
  

module.exports = {
  signup,
  login
};
