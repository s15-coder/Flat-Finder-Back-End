const User = require("../models/User");
const deleteUserById = async (id, data) => {
  const deletedUser = await User.findByIdAndDelete(id, data, {
    new: true,
  }).lean();
  return deletedUser;
};

module.exports = { deleteUserById };
