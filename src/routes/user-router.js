const express = require("express");
const User = require("../models/User.js"); // Assuming you have a User model defined

const { registerHandler } = require("../handlers/User/register-handler");

const router = express.Router();

// Route to register
router.post("/users/register", registerHandler);

// Route to login
router.post("/users/login", (req, res) => {
  // Logic to login user
  res.send("Login user");
});

// Middleware to check permissions
function checkPermissions(permissions) {
  return (req, res, next) => {
    // Logic to check user permissions
    // For now, just call next()
    next();
  };
}

// Route to get all users
router.get("/users", checkPermissions(["admin"]), (req, res) => {
  // Logic to get all users
  res.send("Get all users");
});

// Route to get user by ID
router.get("/users/:id", (req, res) => {
  // Logic to get user by ID
  res.send(`Get user with ID ${req.params.id}`);
});

// Route to update user
router.patch(
  "/users",
  checkPermissions(["admin", "account owner"]),
  (req, res) => {
    // Logic to update user
    res.send("Update user");
  }
);

// Route to delete user
router.delete(
  "/users",
  checkPermissions(["admin", "account owner"]),
  (req, res) => {
    // Logic to delete user
    res.send("Delete user");
  }
);
module.exports = router;
