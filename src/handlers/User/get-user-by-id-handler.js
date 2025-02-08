const User = require("../../models/User.js");
const getUserByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
module.exports = { getUserByIdHandler };
