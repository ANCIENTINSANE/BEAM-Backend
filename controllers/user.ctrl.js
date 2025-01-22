const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const userCtrl = {

  // Login Function
  login: asyncHandler(async (req, res) => {
    const { userid, password } = req.body;
    const { usertype } = req.params;  // Extract role from params
    
    // Find user by userid and usertype
    const user = await User.findOne({ userid, usertype });
    if (!user) {
      res.status(404).json({ message: "Invalid UserID or usertype" });
      return;
    }

    // Validate password
    if (user.password !== password) {
      res.status(400).json({ message: "Incorrect Password" });
      return;
    }

    // Generate JWT
    const token = jwt.sign(
      { id: user._id, userid: user.userid, usertype },
      process.env.JWT_SECRET || "SECRET_KEY",
      { expiresIn: "1h" }
    );

    // Respond with token
    res.json({ token, message: "Login Successful" });
  }),

  // Add User Function
  addUser: asyncHandler(async (req, res) => {
    const { userid, password, usertype, name, email } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ userid });
    if (existingUser) {
      res.status(400).json({ message: "UserID already exists" });
      return;
    }

    // Create new user
    const newUser = new User({
      userid,
      password,
      usertype,
      name,
      email,
    });

    await newUser.save();
    res.status(201).json({ message: "User created successfully", user: newUser });
  }),
};

module.exports = userCtrl;