const express = require("express");
const router = express.Router();
const userModel = require("../models/users.js");

router.post("/register", async (req, res) => {
  const { fullName, email, password } = req.body;

  if (!fullName || !email || !password) {
    res.status(400).send("Please fill all the fields.");
    return;
  }

  try {
    const preuser = await userModel.findOne({ email: email });
    if (preuser) {
      res.status(409).send("This email is already registered.");
    } else {
      const adduser = new userModel({
        fullName: fullName,
        email: email,
        password: password,
      });
      await adduser.save();
      res.status(201).json(adduser);
    }
  } catch (error) {
    res.status(500).send("Registration failed. Please try again.");
  }
});

module.exports = router;
