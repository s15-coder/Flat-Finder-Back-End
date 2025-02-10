const express = require("express");

const { isValidToken } = require("../middlewares/is-valid-token");

const {
  getAllMessagesHandler,
} = require("../handlers/Message/get-all-messages-handler");
const {
  getUserMessagesHandler,
} = require("../handlers/Message/get-user-messages-handler");
const {
  addMessagesHandler,
} = require("../handlers/Message/add-message-handler");

const router = express.Router();

// Add a new message to a flat
router.post("/flats/:id/messages", isValidToken, addMessagesHandler);

// Get all messages for a flat (flat owner only)
router.get("/flats/:id/messages", isValidToken, getAllMessagesHandler);

// Get messages from a specific sender in a flat (sender only)
router.get(
  "/flats/:id/messages/:senderId",
  isValidToken,
  getUserMessagesHandler
);

module.exports = router;
