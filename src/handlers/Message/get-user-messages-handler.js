const getUserMessagesHandler = async (req, res) => {
  res.json({ message: "Get all messages for the flat" });
};

module.exports = { getUserMessagesHandler };
