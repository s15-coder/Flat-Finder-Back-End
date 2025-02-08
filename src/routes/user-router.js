const express = require("express");
const User = require("../models/User.js");

// Handlers
const { registerHandler } = require("../handlers/User/register-handler");
const { loginHandler } = require("../handlers/User/login-handler");
const { getUsersHandler } = require("../handlers/User/get-users-handler");

// Middlewares
const { checkIsAdmin } = require("../middlewares/is-admin.js");

const router = express.Router();

// Route to register
router.post("/users/register", registerHandler);

// Route to login
router.post("/users/login", loginHandler);

// Route to get x users
router.get("/users", checkIsAdmin, getUsersHandler);

// Route to get user by ID
router.get("/users/:id", (req, res) => {
  // Logic to get user by ID
  res.send(`Get user with ID ${req.params.id}`);
});

// Route to update user
router.patch(
  "/users",
  // checkPermissions(["admin", "account owner"]),
  (req, res) => {
    // Logic to update user
    res.send("Update user");
  }
);

// Route to delete user
router.delete(
  "/users",
  // checkPermissions(["admin", "account owner"]),
  (req, res) => {
    // Logic to delete user
    res.send("Delete user");
  }
);
module.exports = router;
