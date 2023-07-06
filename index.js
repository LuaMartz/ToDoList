const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const taskRoutes = require('./routes/taskRoutes');

const app = express();
const port = 3000;

// Middlewares
app.use(express.json());
app.use('/api/tasks', taskRoutes);

app.get('/',(req,res) => {
    res.send('Hello World')
})

mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });