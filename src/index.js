const fetch = require("node-fetch");

module.exports = {
  dog: async function () {
    let dataAPI = await fetch("https://no-api-key.com/api/v1/animals/dog").then(
      (res) => res.json()
    );

    return dataAPI.image;
  },
  dogfact: async function () {
    let dataAPI = await fetch("https://no-api-key.com/api/v1/animals/dog").then(
      (res) => res.json()
    );

    return dataAPI.fact;
  },
  cat: async function () {
    let dataAPI = await fetch("https://no-api-key.com/api/v1/animals/cat").then(
      (res) => res.json()
    );

    return dataAPI.image;
  },
  catfact: async function () {
    let dataAPI = await fetch("https://no-api-key.com/api/v1/animals/cat").then(
      (res) => res.json()
    );

    return dataAPI.fact;
  },
  bear: async function () {
    let dataAPI = await fetch(
      "https://no-api-key.com/api/v2/animals/bear"
    ).then((res) => res.json());

    return dataAPI.image;
  },
  bearfact: async function () {
    let dataAPI = await fetch(
      "https://no-api-key.com/api/v2/animals/bear"
    ).then((res) => res.json());

    return dataAPI.fact;
  },
  panda: async function () {
    let dataAPI = await fetch(
      "https://no-api-key.com/api/v1/animals/panda"
    ).then((res) => res.json());

    return dataAPI.image;
  },
  pandafact: async function () {
    let dataAPI = await fetch(
      "https://no-api-key.com/api/v1/animals/panda"
    ).then((res) => res.json());

    return dataAPI.fact;
  },
  password: async function (howmanycaracters) {
    const newnumber = howmanycaracters || 8;

    if (isNaN(newnumber)) return `${howmanycaracters} is not a number`;

    if (howmanycaracters >= 500) return "Max number possible is 500";

    if (howmanycaracters < 1) return "Min number possible is 2";

    let dataAPI = await fetch(
      `https://no-api-key.com/api/v1/password?length=${howmanycaracters || 8}`
    ).then((res) => res.json());

    return dataAPI.password;
  },
  fliptext: async function (text) {
    let dataAPI = await fetch(
      `https://no-api-key.com/api/v1/flip-text?text=${text.replace(" ", "%20")}`
    ).then((res) => res.json());

    return dataAPI.message;
  },
  binary: async function (text) {
    let dataAPI = await fetch(
      `https://no-api-key.com/api/v1/binary?text=${text.replace(" ", "%20")}`
    ).then((res) => res.json());

    return dataAPI.binary;
  },
  decodebinary: async function (text) {
    let dataAPI = await fetch(
      `https://no-api-key.com/api/v1/binary-text?binary=${text.replace(
        " ",
        "%20"
      )}`
    ).then((res) => res.json());

    return dataAPI.text;
  },
  eightball: async function () {
    let dataAPI = await fetch(`https://no-api-key.com/api/v1/magic8ball`).then(
      (res) => res.json()
    );

    return dataAPI.response;
  },
  car: async function () {
    let dataAPI = await fetch(`https://no-api-key.com/api/v1/car`).then((res) =>
      res.json()
    );

    return dataAPI.image;
  },
  hug: async function () {
    let dataAPI = await fetch(`https://no-api-key.com/api/v1/hug`).then((res) =>
      res.json()
    );

    return dataAPI.image;
  },
  kiss: async function () {
    let dataAPI = await fetch(`https://no-api-key.com/api/v1/kiss`).then(
      (res) => res.json()
    );

    return dataAPI.image;
  },
  fox: async function () {
    let dataAPI = await fetch(`https://some-random-api.ml/img/fox`).then(
      (res) => res.json()
    );

    return dataAPI.link;
  },
  foxfact: async function () {
    let dataAPI = await fetch(`https://some-random-api.ml/facts/fox`).then(
      (res) => res.json()
    );

    return dataAPI.fact;
  },
  bird: async function () {
    let dataAPI = await fetch(`https://some-random-api.ml/img/birb`).then(
      (res) => res.json()
    );

    return dataAPI.link;
  },
  birdfact: async function () {
    let dataAPI = await fetch(`https://some-random-api.ml/facts/bird`).then(
      (res) => res.json()
    );

    return dataAPI.fact;
  },
  koala: async function () {
    let dataAPI = await fetch(`https://some-random-api.ml/img/koala`).then(
      (res) => res.json()
    );

    return dataAPI.link;
  },
  koalafact: async function () {
    let dataAPI = await fetch(`https://some-random-api.ml/facts/koala`).then(
      (res) => res.json()
    );

    return dataAPI.fact;
  },
  wink: async function () {
    let dataAPI = await fetch(`https://some-random-api.ml/animu/wink`).then(
      (res) => res.json()
    );

    return dataAPI.link;
  },
  chatbot: async function (question) {
    if (!question)
      return "Please put some phrase or text to chat with the bot, for more information you can consult: https://www.npmjs.com/package/discord-utilities-js";

    let dataAPI = await fetch(
      `https://some-random-api.ml/chatbot?message=${question.replace(
        " ",
        "%20"
      )}&key=XiQqC62nXixDmJbScA055WIhF`
    ).then((res) => res.json());

    if (dataAPI.error) return dataAPI.error;

    if (!dataAPI.response) return "An error has occurred";

    return dataAPI.response;
  },
  redpanda: async function () {
    let dataAPI = await fetch(`https://some-random-api.ml/img/red_panda`).then(
      (res) => res.json()
    );

    return dataAPI.link;
  },
  pokedex: async function (pokemon) {
    if (!pokemon)
      return "Please enter the pokemon you want me to search, for more information you can consult: https://www.npmjs.com/package/discord-utilities-js";

    let dataAPI = await fetch(
      `https://some-random-api.ml/pokedex?pokemon=${pokemon.replace(
        " ",
        "%20"
      )}`
    ).then((res) => res.json());

    if (dataAPI.error) return dataAPI.error;

    if (!dataAPI.name) return "An error has occurred";

    return dataAPI;
  },
  base64: async function (text) {
    let dataAPI = await fetch(
      `https://some-random-api.ml/base64?encode=${text.replace(" ", "%20")}`
    ).then((res) => res.json());

    return dataAPI.base64;
  },
  decodebase64: async function (text) {
    let dataAPI = await fetch(
      `https://some-random-api.ml/base64?decode=${text.replace(" ", "%20")}`
    ).then((res) => res.json());

    return dataAPI.text;
  },
  meme: async function () {
    let dataAPI = await fetch(`https://some-random-api.ml/meme`).then((res) =>
      res.json()
    );

    return dataAPI.image;
  },
  color: async function (color) {
    function isColor(sNum) {
      return (
        typeof sNum === "string" &&
        sNum.length === 6 &&
        !isNaN(parseInt(sNum, 16))
      );
    }

    const newcolor = color.replace("#", "");

    if (!color) return "Please enter a hexadecimal color";

    if (!isColor(newcolor)) return "Please enter a valid hexadecimal color";

    return `https://api.alexflipnote.dev/colour/image/${newcolor}`;
  },
  gradientcolor: async function (color) {
    function isColor(sNum) {
      return (
        typeof sNum === "string" &&
        sNum.length === 6 &&
        !isNaN(parseInt(sNum, 16))
      );
    }

    const newcolor = color.replace("#", "");

    if (!color) return "Please enter a hexadecimal color";

    if (!isColor(newcolor)) return "Please enter a valid hexadecimal color";

    return `https://api.alexflipnote.dev/colour/image/gradient/${newcolor}`;
  },
  pat: async function () {
    let dataAPI = await fetch(`https://some-random-api.ml/animu/pat`).then(
      (res) => res.json()
    );

    return dataAPI.link;
  },
  gay: async function (image) {
    if (!image)
      return "You must put the link of an image that you want to edit, for more information you can read: https://www.npmjs.com/package/discord-utilities-js";

    return `https://some-random-api.ml/canvas/gay?avatar=${image}`;
  },
  glass: async function (image) {
    if (!image)
      return "You must put the link of an image that you want to edit, for more information you can read: https://www.npmjs.com/package/discord-utilities-js";

    return `https://some-random-api.ml/canvas/glass?avatar=${image}`;
  },
  wasted: async function (image) {
    if (!image)
      return "You must put the link of an image that you want to edit, for more information you can read: https://www.npmjs.com/package/discord-utilities-js";

    return `https://some-random-api.ml/canvas/wasted?avatar=${image}`;
  },
  triggered: async function (image) {
    if (!image)
      return "You must put the link of an image that you want to edit, for more information you can read: https://www.npmjs.com/package/discord-utilities-js";

    return `https://some-random-api.ml/canvas/triggered?avatar=${image}`;
  },
  pixelate: async function (image) {
    if (!image)
      return "You must put the link of an image that you want to edit, for more information you can read: https://www.npmjs.com/package/discord-utilities-js";

    return `https://some-random-api.ml/canvas/pixelate?avatar=${image}`;
  },
  youtubecomment: async function (comment, username, image) {
    if (!comment)
      return "You must put a message that you want to go out, for more information you can read: https://www.npmjs.com/package/discord-utilities-js";
    if (!username)
      return "You must put a username that you want to go out, for more information you can read: https://www.npmjs.com/package/discord-utilities-js";
    if (!image)
      return "You must put the link of an image that you want to edit, for more information you can read: https://www.npmjs.com/package/discord-utilities-js";

    const newcomment = comment.replace(" ", "%20");
    const newusername = username.replace(" ", "%20");

    return `https://some-random-api.ml/canvas/youtube-comment?comment=${newcomment}&username=${newusername}&avatar=${image}`;
  },
  discordbottoken: async function () {
    let dataAPI = await fetch(`https://some-random-api.ml/bottoken`).then(
      (res) => res.json()
    );

    return dataAPI.token;
  },
  sepia: async function (image) {
    if (!image)
      return "You must put the link of an image that you want to edit, for more information you can read: https://www.npmjs.com/package/discord-utilities-js";

    return `https://some-random-api.ml/canvas/sepia?avatar=${image}`;
  },
  invert: async function (image) {
    if (!image)
      return "You must put the link of an image that you want to edit, for more information you can read: https://www.npmjs.com/package/discord-utilities-js";

    return `https://some-random-api.ml/canvas/invert?avatar=${image}`;
  },
  grayscale: async function (image) {
    if (!image)
      return "You must put the link of an image that you want to edit, for more information you can read: https://www.npmjs.com/package/discord-utilities-js";

    return `https://some-random-api.ml/canvas/greyscale?avatar=${image}`;
  },
  eightball: function () {
    const answers = [ "It is certain", "Without a doubt", "Definitely", "Most likely", "Outlook good", "Yes!", "Try again", "Reply hazy", "Can't predict", "No!", "Unlikely", "Sources say no", "Very doubtful" ];

    const response = answers[Math.round((answers.length - 1) * Math.random())];

    return response;
  },
  version: function () {
   var { version } = require('../package.json');

    return version;
  },
};
