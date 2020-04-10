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

// Init Middleware
app.use(express.json({ extended: false })); // access object.data sent via the req route ie req.body must come b4 routes

//Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));
