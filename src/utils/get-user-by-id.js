const User = require("../models/User.js");
const getUserById = async (userId) => {
  const user = await User.findById(userId);
  return user;
};
module.exports = { getUserById };
