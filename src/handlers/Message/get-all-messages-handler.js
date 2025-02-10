const Message = require("../../models/Message");
const getAllMessagesHandler = async (req, res) => {
  const { id } = req.params;
  const messages = await Message.find({
    flatId: id,
    ownerId: req.body.authenticatedUserId,
  });

  return res.json({ messages });
};

module.exports = { getAllMessagesHandler };
