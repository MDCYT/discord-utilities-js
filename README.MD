
# Discord Utilities js

  
>
>
> An npm with multiple functionalities that can be used from discord bots to any type of project.
>
>

  

# Installation

  

```

$ npm install --save discord-utilities-js

```

  

## HOW TO USE

  

```js

const utils = require('discord-utilities-js')

```

## Ways to use

 - [Animals](#animals)
 - [Interactions](#interactions)
 - [EditImages](#editimages)
 - [Others](#others)

### Animals

#### DOGS

```js

// returns images of dogs

let dog = await utils.dog()

console.log(dog)

//Output => "https://no-api-key.com/image/dog/71507.png"

// returns facts about dogs

let dogfact = await utils.dogfact()

console.log(dogfact)

//Output => "A dog's sense of smell is reduced by up to 40 percent when he's overheated and panting."

```

#### CATS

 ```js

// return images of cats

let cat = await utils.cat()

console.log(cat)

//Output => "https://no-api-key.com/image/cat/52107.png"

// returns facts about cats

let catfact = await utils.catfact()

console.log(catfact)

//Output => "Without a specific nutrient, cats can go blind."

```

#### BEARS

```js


// returns images of bear

let bear = await utils.bear()

console.log(bear)

//Output => "https://no-api-key.com/image/bear/18293.png"

// returns facts about bear

let bearfact = await utils.bearfact()
  
console.log(bearfact)

//Output => "American black bears tend to avoid brown bears."

```

#### PANDAS

 ```js

// returns images of panda

let panda = await utils.panda()

console.log(panda)

//Output => "https://no-api-key.com/image/panda/35922.png"

// returns facts about panda

let pandafact = await utils.pandafact()

console.log(pandafact)

//Output => "Adult pandas only have a few predators."

```

#### FOXS

 ```js

// returns images of fox

let fox = await utils.fox()

console.log(fox)

//Output => "https://i.imgur.com/MesVJT9.jpg"

// returns facts about fox

let foxfact = await utils.foxfact()

console.log(foxfact)

//Output => "Because of their awesome fur, Arctic foxes can withstand temperatures as low as negative-70 degrees Celsius. That’s when the poor fellas start shivering."

```

#### BIRDS

```js

// returns images of bird

let bird = await utils.bird()

console.log(bird)

//Output => "https://i.some-random-api.ml/mdV4VtAXAF.png"

// returns facts about bird

let birdfact = await utils.birdfact()

console.log(birdfact)

//Output => "In the movie The Birds (1963), the scene where actress Tippi Hedren is attacked took a week to shoot. The birds were attached to her clothes by long nylon threads so they could not fly away."

```

#### KOALAS

 ```js

// returns images of koala

let koala = await utils.koala()

console.log(koala)

//Output => "https://i.some-random-api.ml/CMuROI3paA.jpg"

// returns facts about koala

let koalafact = await utils.koalafact()

console.log(koalafact)

//Output => "They live and sleep in the eucalyptus trees. It's hot, light and dry here."

```
#### RED PANDAS

```js

// returns images of redpanda

let redpanda = await utils.redpanda()

console.log(redpanda)

//Output => "https://i.imgur.com/bp0VZGh.jpg"


```

### Interactions

#### HUGS

```js

// Show a hugging gif

let hug = await utils.hug()

console.log(hug)

//Output => "https://no-api-key.com/image/hug/88745.gif"

```

#### KISS

```js

// Show a kissing gif

let kiss = await utils.kiss()

console.log(kiss)

//Output => "https://no-api-key.com/image/kiss/61879.gif"

```

#### WINKS

```js

// Show a winking gif

let wink = await utils.wink()

console.log(wink)

//Output => "https://i.some-random-api.ml/Sp31pB0jEJ.gif"

```

#### PATS

```js

// Show a patting gif

let pat = await utils.pat()

console.log(pat)

//Output => "https://i.some-random-api.ml/z0YcUK7gnv.gif"

```

### EditImages

#### GAY

```js

// Puts a rainbow filter on the image

const image = "https://portalmybot.com/assets/img/logo/portal-logo.png" 

let gay = await utils.gay(image)

console.log(gay)

//Output => "https://some-random-api.ml/canvas/gay?avatar=https://portalmybot.com/assets/img/logo/portal-logo.png"

```

#### GLASS

```js

// Puts a glass filter on the image

const image = "https://portalmybot.com/assets/img/logo/portal-logo.png" 

let glass = await utils.glass(image)

console.log(glass)

//Output => "https://some-random-api.ml/canvas/glass?avatar=https://portalmybot.com/assets/img/logo/portal-logo.png"

```

#### WASTED

```js

// Puts a wasted of GTAV filter on the image

const image = "https://portalmybot.com/assets/img/logo/portal-logo.png" 

let wasted = await utils.wasted(image)

console.log(wasted)

//Output => "https://some-random-api.ml/canvas/wasted?avatar=https://portalmybot.com/assets/img/logo/portal-logo.png"

```

#### TRIGGERED

```js

// Puts a triggered filter on the image

const image = "https://portalmybot.com/assets/img/logo/portal-logo.png" 

let triggered = await utils.triggered(image)

console.log(triggered)

//Output => "https://some-random-api.ml/canvas/triggered?avatar=https://portalmybot.com/assets/img/logo/portal-logo.png"

```

#### PIXELATE

```js

// Puts a pixelate filter on the image

const image = "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/855/public/media/image/2019/01/fondo-hd-3.jpg?itok=SHp5qvEm" 

let pixelate = await utils.pixelate(image)

console.log(pixelate)

//Output => "https://some-random-api.ml/canvas/triggered?avatar=https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/855/public/media/image/2019/01/fondo-hd-3.jpg?itok=SHp5qvEm"

```


#### SEPIA

```js

// Puts a sepia filter on the image

const image = "https://discordapp.com/assets/322c936a8c8be1b803cd94861bdfa868.png" 

let sepia = await utils.sepia(image)

console.log(sepia)

//Output => "https://some-random-api.ml/canvas/sepia?avatar=https://discordapp.com/assets/322c936a8c8be1b803cd94861bdfa868.png"

```

#### INVERT

```js

// Puts a invert filter on the image

const image = "https://discordapp.com/assets/322c936a8c8be1b803cd94861bdfa868.png" 

let invert = await utils.invert(image)

console.log(invert)

//Output => "https://some-random-api.ml/canvas/invert?avatar=https://discordapp.com/assets/322c936a8c8be1b803cd94861bdfa868.png"

```

#### GRAYSCALE

```js

// Puts a grayscale filter on the image

const image = "https://discordapp.com/assets/322c936a8c8be1b803cd94861bdfa868.png" 

let grayscale = await utils.grayscale(image)

console.log(grayscale)

//Output => "https://some-random-api.ml/canvas/greyscale?avatar=https://discordapp.com/assets/322c936a8c8be1b803cd94861bdfa868.png"

```


#### YOUTUBECOMMENT

```js

// Create an image as if it were a Youtube comment

const comment = "Hello World"
const username = "Discord"
const image = "https://discordapp.com/assets/322c936a8c8be1b803cd94861bdfa868.png" 

let youtubecomment = await utils.youtubecomment(comment, username, image)

console.log(youtubecomment)

//Output => "https://some-random-api.ml/canvas/youtube-comment?comment=Hello%20World&username=Discord&avatar=https://discordapp.com/assets/322c936a8c8be1b803cd94861bdfa868.png"

```


### Others

#### PASSWORD

```js

// It returns a password with the amount of 
// characters that you put in it, 
// if you don't put any, it will 
// be one with 8 characters by default.

// Without putting an argument

let password = await utils.password()

console.log(password)

//Output => "217D_;@B"

//Putting an argument

const characters = "12"

let password = await utils.password(characters)

console.log(password)

//Output => "hKd|*12^4:2K"

```

#### FLIPTEXT

```js

// Flip the text you put

const text = "Hello World" 

let fliptext = await utils.fliptext(text)

console.log(fliptext)

//Output => "dlroW olleH"

```

#### BINARY

```js

// Convert text to binary

const text = "Hello World" 

let binary = await utils.binary(text)

console.log(binary)

//Output => "01001000 01100101 01101100 01101100 01101111 00100000 01010111 01101111 01110010 01101100 01100100"

```

#### DECODE BINARY

```js

// Convert binary to text

const text = "01001000 01100101 01101100 01101100 01101111 00100000 01010111 01101111 01110010 01101100 01100100" 

let decodebinary = await utils.decodebinary(text)

console.log(decodebinary)

//Output => "Hello World"

```

#### BASE64

```js

// Convert text to base64

const text = "Hello World" 

let base64 = await utils.base64(text)

console.log(base64)

//Output => "SGVsbG8gV29ybGQ="

```

#### DECODE BASE64

```js

// Convert base64 to text

const text = "SGVsbG8gV29ybGQ=" 

let decodebase64 = await utils.decodebase64(text)

console.log(decodebase64)

//Output => "Hello World"

```

#### EIGHT BALL

```js

// Show you a random answer

let eightball = await utils.eightball()

console.log(eightball)

//Output => "My reply is no"

```

#### CARS

```js

// It shows you a random image of a car

let car = await utils.car()

console.log(car)

//Output => "https://no-api-key.com/image/car/68958.png"

```

#### POKEDEX

```js

// It shows you information about the pokemon you are looking for

const pokemon = "pikachu"

let pokedex = await utils.pokedex(pokemon)

console.log(pokedex)
```
```json
{
   "name":"pikachu",
   "id":"025",
   "type":[
      "Electric"
   ],
   "species":[
      "Mouse",
      "Pokémon"
   ],
   "abilities":[
      "Static",
      "Lightning Rod"
   ],
   "height":"0.4 m (1′04″)",
   "weight":"6.0 kg (13.2 lbs)",
   "base_experience":"112",
   "gender":[
      "50% male",
      "50% female"
   ],
   "egg_groups":[
      "Fairy",
      "Field"
   ],
   "stats":{
      "hp":"35",
      "attack":"55",
      "defense":"40",
      "sp_atk":"50",
      "sp_def":"50",
      "speed":"90",
      "total":"320"
   },
   "family":{
      "evolutionStage":2,
      "evolutionLine":[
         "Pichu",
         "Pikachu",
         "Raichu",
         "Raichu"
      ]
   },
   "sprites":{
      "normal":"http://i.some-random-api.ml/pokemon/pikachu.png",
      "animated":"http://i.some-random-api.ml/pokemon/pikachu.gif"
   },
   "description":"When several of these Pokémon gather, their electricity could build and cause lightning storms.",
   "generation":"1"
}

```

#### CHATBOT

```js

// ChatBot

const text = "Hello World" 

let chatbot = await utils.chatbot(text)

console.log(chatbot)

//Output => "Who are you?"

```

#### MEME

```js

// Show a random meme


let meme = await utils.meme()

console.log(meme)

//Output => "https://i.some-random-api.ml/WgLubDy5Q1.png"

```

#### DISCORDBOTTOKEN

```js

// Show a randomly generated bot token (None of these tokens are for decoration or other purposes)

let token = await utils.discordbottoken()

console.log(token)

//Output => "MzU3MjY1MTc4NTcwNDIyMTU2.UP6nwD.2eLKGYh3DgqARmIWANhzbb0yyii"

```

#### COLOR

```js

// Returns an image with the color set

const thecolor = "#00ff00"

let color = await utils.color(thecolor)

console.log(color)

//Output => "https://api.alexflipnote.dev/colour/image/00ff00"

```

#### GRADIENTCOLOR

```js

// Returns an image with the color gradient of the color you have set

const thecolor = "#00ff00"

let gradientcolor = await utils.gradientcolor(thecolor)

console.log(gradientcolor)

//Output => "https://api.alexflipnote.dev/colour/image/gradient/00ff00"

```