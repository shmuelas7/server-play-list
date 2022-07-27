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

router.post("/createPlayList", async (req, res) => {});
router.post("/deletePlayLiat", async (req, res) => {});
//create play list

router.post("/addSong", async (req, res) => {}); //add song to play list

router.post("/deleteSong", async (req, res) => {}); //delete song from play list

router.get("/getSongs", async (req, res) => {}); //get songs from play list

module.exports = router;
