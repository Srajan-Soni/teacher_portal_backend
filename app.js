const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const teacherRoute = require('./routes/teacherRoute');
const studentRoute = require('./routes/studentDataRoute');
const cors = require('cors')
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors())

mongoose.connect('mongodb://localhost:27017/testdb', {

}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));


app.use('/teacher', teacherRoute);
app.use('/teacher',studentRoute );

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
