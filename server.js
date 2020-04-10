const express = require('express'); // init a server
const connectDB = require('./config/db'); //connection to MongoDatabase
const colors = require('colors'); // coloring the logs

//get server to start
const app = express();
// port server will run on
const PORT = process.env.PORT || 5000;
// specifing port the server will be on or listen to
app.listen(PORT, () => console.log(`Server started on port ${PORT}`.cyan.bold));
// single end point for the API
app.get('/', (req, res) => res.send('API running'));
//connect Databse
connectDB();
