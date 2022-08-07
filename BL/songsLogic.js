const axios = require("axios");
const songsController = require("../DL/controller/songsController");

async function search(search) {
  console.log(search);
  try {
    const { data } = await axios.get(
      `https://simple-youtube-search.p.rapidapi.com/search?query=${search}&safesearch=false`,
      {
        headers: {
          "X-RapidAPI-Key":
            "4394a47c55msh4527f37a71bd108p1eafe5jsnd8b00091672b",
          "X-RapidAPI-Host": "simple-youtube-search.p.rapidapi.com",
        },
      }
    );
    console.log("🚀 ~ file: songsLogic.js ~ line 39 ~ .then ~ res", data);
    // console.log(response.data);
    return data;
  } catch (error) {
    console.log({ error });
    throw { code: 401, message: " שם משתמש או סיסמה לא נכונים" };
  }
}

async function createPlayList(name) {
  const checkExist = songsController.read(name);
  if (checkExist) {
    throw { code: 404, message: " פלאי ליסט קיים" };
  }
  songsController.create(name);
  return "נוצר פלאי ליסט חדש";
}

// search("justin");
module.exports = { search, createPlayList };
