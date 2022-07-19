const mongoose = require("mongoose");
const { SchemaTypes } = mongoose;
const songsSchema = new mongoose.Schema({
  name: String,
  songs: [{ type: String, Was_played: Number }],
  userId: {
    type: SchemaTypes.ObjectId,
    ref: "user",
  },
  createDate: {
    type: Date,
    default: Date.now,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

const songsModel = mongoose.model("songs", songsSchema);
module.exports = { songsModel };
