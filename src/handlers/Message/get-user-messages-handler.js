const Message = require("../../models/Message");
const getUserMessagesHandler = async (req, res) => {
  const { flat: id, senderId } = req.params;
  const { authenticatedUserId } = req.body;
  if (senderId !== authenticatedUserId) {
    return res.status(401).json({
      message: "Unauthorized - Only the sender of the message can see",
    });
  }
  const query = { flatId: id, senderId: senderId };
  const messages = await Message.find(query);

  return res.json({ messages });
};

module.exports = { getUserMessagesHandler };
