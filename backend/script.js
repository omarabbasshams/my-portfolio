// import necessary modules
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/User'); // Assuming User.js is in the same directory as this script
const connectDB = require('./config/db'); // Assuming db.js is in the same directory as this script

// function to create a user
const createUser = async () => {
  try {
    // connect to the database
    await connectDB();

    // hash the password before saving
    const hashedPassword = await bcrypt.hash('12345678', 10); // Replace 'yourpassword' with the actual password

    // create a new user instance
    const newUser = new User({
      username: 'admin', // Replace with the desired username
      password: hashedPassword, // Store the hashed password
    });

    // save the user to the database
    await newUser.save();

    console.log('User created successfully');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

// run the createUser function
createUser();
