const Flat = require("../../models/Flat");
const updateFlatHandler = (req, res) => {
  const {
    city,
    streetName,
    streetNumber,
    areaSize,
    hasAc,
    yearBuilt,
    rentPrice,
    dateAvailable,
    ownerId,
  } = req.body;
  const flatId = req.params.id;
  try {
    const updatedFlat = Flat.findByIdAndUpdate(
      flatId,
      {
        city,
        streetName,
        streetNumber,
        areaSize,
        hasAc,
        yearBuilt,
        rentPrice,
        dateAvailable,
      },
      {
        new: true,
      }
    ).lean();
    console.log();
    return res.status(200).json({
      updated: updatedFlat._update,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error updating flat" });
  }
};

module.exports = { updateFlatHandler };
