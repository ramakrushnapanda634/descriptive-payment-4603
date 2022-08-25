const Router = require("express");
const router = Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");

require("dotenv").config();
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (user) {
    return res.status(400).send("User already exists");
  }
  const newUser = new User({
    name,
    email,
    password,
  });
  await newUser.save();
  return res.send("sign up successfully");
});
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user) {
    return res.status(401).send("Invalid username or password");
  }
  const token = jwt.sign(
    {
      email: user.email,

      id: user._id,
    },
    "   SECRET",
    {
      expiresIn: "30 days",
    }
  );
  //return res.send("signin")
  return res.send({ message: "login successfully", token: token });
});
router.post("/verifyotp", (req, res) => {
  const otp = Math.floor(Math.random() * 10000);
  // const { otp } = req.body;
  const { mobileNumber } = req.body;
  User.findOne({ mobileNumber }, (err, user) => {
    if (err) {
      res.status(500).json({
        message: "Internal server error",
      });
    } else if (!user) {
      res.status(404).json({
        message: "User not found",
      });
    } else {
      if (otp == user.otp) {
        res.status(200).json({
          message: "OTP verified successfully",
        });
      } else {
        res.status(400).json({
          message: "OTP not verified",
        });
      }
    }
  });
});
module.exports = router;
