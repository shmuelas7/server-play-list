const axios = require("axios");
const songsController = require("../DL/controller/songsController");

async function search(search) {
  console.log(search);
  //   let data = "";

  //   let config = {
  //     method: "get",
  //     url: "https://simple-youtube-search.p.rapidapi.com/search?query=justin&safesearch=false",
  //     headers: {
  //       "X-RapidAPI-Key": "4394a47c55msh4527f37a71bd108p1eafe5jsnd8b00091672b",
  //       "X-RapidAPI-Host": "simple-youtube-search.p.rapidapi.com",
  //     },
  //     data: data,
  //   };

  //   axios(config)
  //     .then((response) => {
  //       console.log(JSON.stringify(response.data));
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

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

// search("justin");
module.exports = { search };
