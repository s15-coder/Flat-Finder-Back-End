const { deleteUserById } = require("../../utils/delete-user-by-id");
const { getUserById } = require("../../utils/get-user-by-id");

const deleteUserHandler = async (req, res) => {
  const userData = req.body.userData;
  const authenticatedUserId = req.body.authenticatedUserId;
  const authenticatedUser = await getUserById(authenticatedUserId);
  const userToUpdateId = req.params.id;
  if (!authenticatedUser) {
    return res.status(401).json({ message: "unable to delete the user" });
  }
  if (!authenticatedUser.isAdmin && authenticatedUserId !== req.params.id) {
    return res
      .status(401)
      .json({ message: "unable to delete the user due to unauthorized" });
  }
  const deletedUser = await deleteUserById(userToUpdateId, userData);

  if (!deletedUser) {
    return res.status(500).json({ message: "unable to delete the user" });
  }

  res.json({ deletedUser, statusCode: 200 });
};

module.exports = { deleteUserHandler };
