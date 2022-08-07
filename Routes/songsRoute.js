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

router.post("/PlayList", async (req, res) => {
  try {
    const res = await songsLogic.createPlayList(req.body);
    res.send(res);
  } catch (err) {
    res.status(err.code).send(err.message);
  }
});
router.post("/PlayLiat", async (req, res) => {
  try {
  } catch (err) {}
});
//create play list

router.post("/addSong", async (req, res) => {
  try {
  } catch (err) {}
}); //add song to play list

router.post("/deleteSong/:ID", async (req, res) => {
  try {
  } catch (err) {}
}); //delete song from play list

router.get("/getSongs", async (req, res) => {
  try {
  } catch (err) {}
}); //get songs from play list

module.exports = router;
