const { songsModel } = require("../models/songs");

async function create(data) {
  return await songsModel.create(data);
}
async function read(filter, proj) {
  return await songsModel.find(filter, proj);
}

async function update(filter, newData) {
  return await songsModel.findOneAndUpdate(filter, newData, { new: true });
}
async function del(filter) {
  return await update(filter, { isActive: false });
}

module.exports = { create, read, update, del };
