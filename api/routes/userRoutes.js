const express = require("express");
const router = express.Router();
const {
  registerUser,
  login,
  logout,
  getUserProfile,
  forgotPassword,
  resetPassword,
} = require("../controllers/userController");
const { fileUpload } = require("../utils/fileUpload");
const protect = require("../middlewares/authMiddleware");

router.get("/", (req, res) => {
  res.send("Welcome to Chef Connect!"); // or any other desired response
});

router.post("/register", fileUpload.single("file"), registerUser);
router.post("/login", login);
router.post("/logout", logout);
router.get("/profile", protect, getUserProfile);
router.post("/forgotpassword", forgotPassword);
router.put("/resetpassword/:resetToken", resetPassword);

module.exports = router;
