const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const messageSchema = new Schema({
  content: { type: String, required: true },
  flatId: { type: String, required: true },
  senderId: { type: String, required: true },
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Message", messageSchema);
