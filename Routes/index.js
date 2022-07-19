const express = require("express");
const router = express.Router();

const usersRouter = require("./userRoute");
const songsRoute = require("./songsRoute");
const { authJWT } = require("../middleware/auth");

router.use("/users", usersRouter);
router.use("/songs", authJWT, songsRoute);

module.exports = router;
