console.log('this works');

// make a list of words for each variable
let nouns = ["heart", "rainbow", "ocean"];
let verbs = ["look", "make", "continue"];
let adjectives = ["good", "different", "possible"];

// pick a random element from each array
let noun = nouns[Math.floor(Math.random() * nouns.length)]
console.log(noun)
let verb = verbs[Math.floor(Math.random() * verbs.length)]
let adjective = adjectives[Math.floor(Math.random() * adjectives.length)]

console.log(
  `My ${noun} leaps ${adjective} when I ${verb} a rainbow in the sky.`
)