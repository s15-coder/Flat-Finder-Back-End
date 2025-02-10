const Flat = require("../../models/Flat");

const getAllFlatsHandler = async (req, res) => {
  try {
    const body = req.body;
    if (body.isAdmin) {
      const flats = await Flat.find();
      res.json(flats);
      return;
    }
    const flats = await Flat.find({ ownerId: body.authenticatedUserId });
    res.json(flats);
        
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { getAllFlatsHandler };
