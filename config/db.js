const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');
const colors = require('colors'); // coloring the logs

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.error('MongoDB connected....'.yellow.underline);
  } catch (err) {
    console.log(err.message);
    // exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
