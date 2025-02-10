const getAllMessagesHandler = async (req, res) => {
  return res.json({ message: "Get all messages for the flat" });
};

module.exports = { getAllMessagesHandler };
