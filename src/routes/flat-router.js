const express = require("express");
const { addFlatHandler } = require("../handlers/Flat/add-flat-handler");
const { isValidToken } = require("../middlewares/is-valid-token");
const { getAllFlatsHandler } = require("../handlers/Flat/get-flats-handler");
const {
  getFlatByIdHandler,
} = require("../handlers/Flat/get-flat-by-id-handler");
const { updateFlatHandler } = require("../handlers/Flat/update-flat-handler");
const { deleteFlatHandler } = require("../handlers/Flat/delete-flat-handler");

const router = express.Router();

// Route to add a new flat
router.post("/flats", isValidToken, addFlatHandler);

// Route to get all flats
router.get("/flats", isValidToken, getAllFlatsHandler);

// Route to get a flat by ID
router.get("/flats/:id", isValidToken, getFlatByIdHandler);

// Route to update a flat
router.patch("/flats/:id", isValidToken, updateFlatHandler);

// Route to delete a flat
router.delete("/flats/:id", isValidToken, deleteFlatHandler);

module.exports = router;
