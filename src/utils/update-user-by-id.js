const User = require("../models/User");
const updateUserById = async (id, data) => {
  const updatedUser = await User.findByIdAndUpdate(id, data, {
    new: true,
  }).lean();
  return updatedUser;
};

module.exports = { updateUserById };
