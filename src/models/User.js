const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  birthDate: { type: Date, required: true },
  isAdmin: { type: Boolean, default: false },
  favouriteFlats: [{ type: mongoose.Schema.Types.ObjectId, ref: "Flat" }],
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
