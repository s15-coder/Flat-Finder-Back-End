const { updateUserById } = require("../../utils/update-user-by-id");
const { getUserById } = require("../../utils/get-user-by-id");

const updateUserHandler = async (req, res) => {
  const userData = req.body.userData;
  const authenticatedUserId = req.body.authenticatedUserId;
  const authenticatedUser = await getUserById(authenticatedUserId);
  const userToUpdateId = req.params.id;
  if (!authenticatedUser) {
    return res.status(401).json({ message: "unable to update the user" });
  }
  if (!authenticatedUser.isAdmin && authenticatedUserId !== req.params.id) {
    return res
      .status(401)
      .json({ message: "unable to update the user due to unauthorized" });
  }
  const updatedUser = await updateUserById(userToUpdateId, userData);

  if (!updatedUser) {
    return res.status(500).json({ message: "unable to update the user" });
  }

  res.json({ updatedUser, statusCode: 200 });
};

module.exports = { updateUserHandler };
