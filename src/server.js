require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const router = require("./routes/index.js");

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use("/api", router);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_DB_URI);

const db = mongoose.connection;
db.on("error", () => {
  console.log("MongoDB connection failed");
});

db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello, FlatFinder!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
