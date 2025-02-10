const Flat = require("../../models/Flat");
const addFlatHandler = async (req, res) => {
  try {
    const flatData = req.body;
    const newFlat = new Flat({
      ...flatData,
      ownerId: req.body.authenticatedUserId,
    });
    await newFlat.save();
    res.status(201).json(newFlat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { addFlatHandler };
