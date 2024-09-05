
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    teacherId : {
        type: mongoose.Types.ObjectId,
        required: true
    },
  name: {
    type: String,
    required: true,

  },
  subject: {
    type: String,
    required: true,
   
  },
  marks: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Student', StudentSchema);
