const express = require("express");
const router = express.Router();

const songsLogic = require("../BL/songsLogic");

router.get("/search/:name", async (req, res) => {
  try {
    const songs = await songsLogic.search(req.params.name);
    console.log(
      "🚀 ~ file: songsRoute.js ~ line 9 ~ router.get ~ songs",
      songs
    );
    res.send(songs);
  } catch (err) {
    console.log(err);
    res.status(err.code).send(err.message);
  }
});

module.exports = router;
