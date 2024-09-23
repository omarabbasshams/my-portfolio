const express = require('express');
const path = require('path');
const cors = require('cors');  // Add cors import
const connectDB = require('./config/db');
const projectRoutes = require('./routes/projectRoutes');
const skillRoutes = require('./routes/skillRoutes');
const authRoutes = require('./routes/authRoutes');
const bodyParser = require('body-parser');
const auth = require('./middleware/auth');

const app = express();

// Connect to the database
connectDB();

// Enable CORS
app.use(cors());  // Allow requests from any origin

// Middleware
app.use(bodyParser.json());

// API Routes
app.use('/api/projects', auth, projectRoutes);
app.use('/api/skills', auth, skillRoutes);
app.use('/api/auth', authRoutes);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
