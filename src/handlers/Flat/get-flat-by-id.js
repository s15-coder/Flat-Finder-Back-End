const Flat = require("../../models/Flat.js");

const getFlatById = async (req, res) => {
  const { id } = req.params;
  const { isAdmin, authenticatedUserId } = req.body;
  try {
    let flat;
    if (isAdmin) {
      flat = await Flat.findById(id);
    } else {
      flat = await Flat.findOne({ _id: id, ownerId: authenticatedUserId });
    }
    if (!flat) {
      return res.status(404).json({ message: "Flat not found" });
    }
    res.send(flat);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getFlatById };
