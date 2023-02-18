const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

mongoose.connect('mongodb://localhost:27017/student_management'
// , {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true
// }
)
  .then(() => {
    console.log('MongoDB is connected');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });
