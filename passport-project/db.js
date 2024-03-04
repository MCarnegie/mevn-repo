const mongoose = require('mongoose');

// Replace <password> with your MongoDB Atlas password
const mongoURI = 'mongodb+srv://mcarnegie:marco123@authcluster.4cwrbya.mongodb.net/?retryWrites=true&w=majority&appName=AuthCluster';

  const connectToMongoDB = async (uri) => {
    try {
      await mongoose.connect(uri);
      console.log('Connected to MongoDB Atlas');
    } catch (err) {
      console.error('Error connecting to MongoDB Atlas:', err);
    }
  };

  connectToMongoDB(mongoURI)
  
module.exports = connectToMongoDB;