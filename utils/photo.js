const axios = require("axios");

async function imgurUpload(encodedFiles) {
  const links = [];
  for (let i of encodedFiles) {
    await axios
      .post("https://api.imgur.com/3/upload", {
        image: i,
        type: "base64",
        Authorization: process.env.imgurid
      })
      .then((result) => {
        console.log(result);
        console.log("imge res link", result.data.data.link);
        links.push(result.data.data.link);
      })
      .catch((err) => {
        console.log("imgurUpload error：", err);
      });
  }
  return links;
}

module.exports = { imgurUpload };
