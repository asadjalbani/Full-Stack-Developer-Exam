const express = require('express');
const router = express.Router();
const User = require('../models/users');

router.get('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user in the database based on the provided email
    const user = await User.findOne({ email });

    // If the user is not found or the password is incorrect, return an error response
    if (!user || password !== user.password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // If the user is found and the password is correct, return a success response
    return res.json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
