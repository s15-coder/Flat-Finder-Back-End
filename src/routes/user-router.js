const express = require("express");

// Handlers
const { registerHandler } = require("../handlers/User/register-handler");
const { loginHandler } = require("../handlers/User/login-handler");
const { getUsersHandler } = require("../handlers/User/get-users-handler");
const {
  getUserByIdHandler,
} = require("../handlers/User/get-user-by-id-handler");

// Middlewares
const { checkIsAdmin } = require("../middlewares/is-admin.js");
const { isValidToken } = require("../middlewares/is-valid-token.js");
const {
  updateUserHandler,
} = require("../handlers/User/update-user-handler.js");

const router = express.Router();

// Route to register
router.post("/users/register", registerHandler);

// Route to login
router.post("/users/login", loginHandler);

// Route to get x users
router.get("/users", checkIsAdmin, getUsersHandler);

// Route to get user by ID
router.get("/users/:id", checkIsAdmin, getUserByIdHandler);

// Route to update user
router.patch("/users/:id", isValidToken, updateUserHandler);

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
