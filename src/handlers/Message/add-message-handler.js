const Message = require("../../models/Message");
const addMessagesHandler = async (req, res) => {
  const flatId = req.params.id;
  const senderId = req.body.authenticatedUserId;
  const { content } = req.body;

  try {
    const newMessage = new Message({
      content,
      senderId,
      flatId,
    });
    await newMessage.save();
    return res
      .status(200)
      .json({ message: "Message added successfully", newMessage });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { addMessagesHandler };
