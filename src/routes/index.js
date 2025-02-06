const express = require("express");
const flatRouter = require("./flat-router");
const messageRouter = require("./message-router");
const userRouter = require("./user-router");

const router = express.Router();

router.use(flatRouter);
router.use(messageRouter);
router.use(userRouter);

module.exports = router;
