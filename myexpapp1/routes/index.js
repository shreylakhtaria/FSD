var express = require('express');
var router = express.Router();
var Student = require('../models/Student');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about',function(req,res,next) {
  res.render('about', { title: 'About Us' });
});

router.get('/add-student', function(req, res, next) {
  res.render('add-student', { title: 'Add Student' });
});

router.post('/add-student', function(req, res, ) {
const student = new Student({
    sname: req.body.name,
    semail: req.body.email,
    sphone: req.body.contact
  });
  student.save()
    .then(() => console.log("Student added successfully"))
});


// Display all students
router.get('/display', async function(req, res, next) {
  try {
    const students = await Student.find();
    res.render('display', { students });
  } catch (err) {
    res.status(500).send('Error retrieving students');
  }
});

module.exports = router;
