const mongoose = require('mongoose');
const mongoURI = 'mongodb://127.0.0.1:27017/expresse';
const connectToDatabase = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,      
      useUnifiedTopology: true,   
    });
    console.log('Connected to MongoDB!');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
  }
};
connectToDatabase();