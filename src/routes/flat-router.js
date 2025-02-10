const express = require("express");
const { addFlatHandler } = require("../handlers/Flat/add-flat-handler");
const { isValidToken } = require("../middlewares/is-valid-token");

const router = express.Router();

// Route to add a new flat
router.post("/flats", isValidToken, addFlatHandler);

// // Route to get all flats
// router.get("/flats", (req, res) => {
//   // Implement your logic to get all flats
//   res.send("Get all flats");
// });

// // Route to update a flat
// router.patch("/flats", checkPermissions("flat owner"), (req, res) => {
//   // Implement your logic to update a flat
//   res.send("Update flat");
// });

// // Route to delete a flat
// router.delete("/flats", checkPermissions("flat owner"), (req, res) => {
//   // Implement your logic to delete a flat
//   res.send("Delete flat");
// });

// // Route to get a flat by ID
// router.get("/flats/:id", (req, res) => {
//   // Implement your logic to get a flat by ID
//   res.send(`Get flat with ID ${req.params.id}`);
// });

module.exports = router;
