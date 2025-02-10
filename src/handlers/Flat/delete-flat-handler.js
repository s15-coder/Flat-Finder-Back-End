const Flat = require("../../models/Flat");

const deleteFlatHandler = async (req, res) => {
  const data = req.body;
  const flatId = req.params.id;
  try {
    const deletedFlat = await Flat.findByIdAndDelete(flatId, data, {
      new: true,
    }).lean();
    return res.status(200).json({ deletedFlat });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error deleting flat" });
  }
};

module.exports = { deleteFlatHandler };
