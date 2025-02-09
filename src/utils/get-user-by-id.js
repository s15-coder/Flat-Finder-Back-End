const User = require("../models/User.js");
const getUserById = async (userId) => {
  const user = await User.findById(userId).lean();
  return { ...user, id: userId };
};
module.exports = { getUserById };
