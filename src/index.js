const fetch = require("node-fetch");

module.exports = {
  dog: async function () {
    let dataAPI = await fetch("https://no-api-key.com/api/v2/animals/dog").then(
      (res) => res.json()
    );

    return dataAPI.image;
  },
  dogfact: async function () {
    let dataAPI = await fetch("https://no-api-key.com/api/v2/animals/dog").then(
      (res) => res.json()
    );

    return dataAPI.fact;
  },
  cat: async function () {
    let dataAPI = await fetch("https://no-api-key.com/api/v2/animals/cat").then(
      (res) => res.json()
    );

    return dataAPI.image;
  },
  catfact: async function () {
    let dataAPI = await fetch("https://no-api-key.com/api/v2/animals/cat").then(
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
      "https://no-api-key.com/api/v2/animals/panda"
    ).then((res) => res.json());

    return dataAPI.image;
  },
  pandafact: async function () {
    let dataAPI = await fetch(
      "https://no-api-key.com/api/v2/animals/panda"
    ).then((res) => res.json());

    return dataAPI.fact;
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
  redpanda: async function () {
    let dataAPI = await fetch(`https://some-random-api.ml/img/red_panda`).then(
      (res) => res.json()
    );

    return dataAPI.link;
  },
  password: function (howmanycaracters = 8) {
    if (typeof howmanycaracters !== "number" && typeof howmanycaracters !== "string") return "Error: Please enter a number or string";
    password = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789*!@#$%^&/().,?[]{}";
    howmanycaracters = parseInt(howmanycaracters);
    for (let i = 0; i < howmanycaracters; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return password;
  },
  fliptext: function (text) {
    if (typeof text !== "string") return "Error: Please enter a string";
    let newtext = text.split("").reverse().join("");
    return newtext;
  },
  binary: function (text) {
    if (typeof text !== "string") return "Error: Please enter a string";
    // Convert text to binary
    let binary = "";
    for (let i = 0; i < text.length; i++) {
      binary += text.charCodeAt(i).toString(2) + " ";
    }
    return binary;
  },
  decodebinary: function (text) {
    if (typeof text !== "string") return "Error: Please enter a string";
    // Convert binary to text
    let binary = text.split(" ");
    let textdecoded = "";
    for (let i = 0; i < binary.length; i++) {
      textdecoded += String.fromCharCode(parseInt(binary[i], 2));
    }
    return textdecoded;
  },
  eightball: function () {
    let answers = [
      "It is certain",
      "It is decidedly so",
      "Without a doubt",
      "Yes, definitely",
      "You may rely on it",
      "As I see it, yes",
      "Most likely",
      "Outlook good",
      "Yes",
      "Signs point to yes",
      "Reply hazy try again",
      "Ask again later",
      "Better not tell you now",
      "Cannot predict now",
      "Concentrate and ask again",
      "Don't count on it",
      "My reply is no",
      "My sources say no",
      "Outlook not so good",
      "Very doubtful",
    ];
    return answers[Math.floor(Math.random() * answers.length)];
  },
  car: async function () {
    let dataAPI = await fetch(`https://no-api-key.com/api/v2/car`).then((res) =>
      res.json()
    );

    return dataAPI.image;
  },
  hug: async function () {
    let dataAPI = await fetch(`https://no-api-key.com/api/v2/hug`).then((res) =>
      res.json()
    );

    return dataAPI.image;
  },
  kiss: async function () {
    let dataAPI = await fetch(`https://no-api-key.com/api/v2/kiss`).then(
      (res) => res.json()
    );

    return dataAPI.image;
  },
  wink: async function () {
    let dataAPI = await fetch(`https://some-random-api.ml/animu/wink`).then(
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
  base64: function (text) {
    if (typeof text !== "string") return "Error: Please enter a string";
    let base64 = Buffer.from(text).toString("base64");
    return base64;
  },
  decodebase64: function (text) {
    if (typeof text !== "string") return "Error: Please enter a string";
    let base64 = Buffer.from(text, "base64").toString("ascii");
    return base64;
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
    // Say a random and fake discord bot token
    // Example Discord Token: Nzk4MjM0MTY3OTkzMDQwOTM2.X_yDgA.PRxc17D0kHZY-gPtjgTCqhQytu4

    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-";
    let token = "";
    for (let i = 0; i < 25; i++) {
      token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    token += ".";
    for (let i = 0; i < 7; i++) {
      token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    token += ".";
    for (let i = 0; i < 28; i++) {
      token += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return token;

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
  version: function () {
   var { version } = require('../package.json');

    return version;
  },
};
