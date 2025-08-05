const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    sname: String,
    semail: String,
    sphone: Number
})

var studentModel = mongoose.model('student', StudentSchema);

module.exports = studentModel;