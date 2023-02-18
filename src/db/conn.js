const mongoose = require('mongoose');
let connection = mongoose.connect('mongodb://localhost:27017/student_management')

connection.connect((err) =>{
    if(err) throw err;
    console.log(' MongoDB is connected ')

})


module.exports = connection;