
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
   
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Teacher', TeacherSchema);
