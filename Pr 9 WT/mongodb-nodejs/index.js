const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

const app = express();
app.listen(4000, () => {
  console.log('Listening on port 4000');
});

app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

mongoose.connect('mongodb://0.0.0.0:27017/student', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const studentSchema = new mongoose.Schema({
  name: String,
  email: String
});

const Student = mongoose.model('Student', studentSchema);

// Create a new student
app.post('/student', (req, res) => {
  let student = new Student(req.body);
  student.save()
    .then(doc => {
      res.send(doc);
      console.log(doc);
    })
    .catch(err => console.log(err));
});

// Retrieve all students
app.get('/student', (req, res) => {
  Student.find({})
    .then(docs => {
      console.log(docs);
      res.json(docs);
    })
    .catch(err => console.log(err));
});

// Update a student by ID
app.post('/student/update', (req, res) => {
  const { id, name, email } = req.body;

  // Convert id to ObjectId
  const mongoose = require('mongoose');
  const ObjectId = mongoose.Types.ObjectId;
  const objectId = new ObjectId(id);

  Student.findByIdAndUpdate(objectId, { name, email }, { new: true })
    .then(updatedStudent => {
      if (!updatedStudent) {
        res.status(404).send('Student not found');
      } else {
        res.json(updatedStudent);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Error updating student data');
    });
});

// Delete a student by ID
app.post('/student/delete', (req, res) => {
  const { id } = req.body;

  // Convert id to ObjectId
  const mongoose = require('mongoose');
  const ObjectId = mongoose.Types.ObjectId;
  const objectId = new ObjectId(id);

  Student.findByIdAndDelete(objectId)
    .then(deletedStudent => {
      if (!deletedStudent) {
        res.status(404).send('Student not found');
      } else {
        res.json(deletedStudent);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Error deleting student data');
    });
});