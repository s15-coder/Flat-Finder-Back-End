const User = require("../../models/User.js");

const getUsersHandler = async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getUsersHandler };
