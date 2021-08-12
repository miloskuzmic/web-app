let funnyWords = require("funny-words");
let randomWords = require("random-words");
let oneLinerJoke = require("one-liner-joke");
let figlet = require("figlet");
let cowsay = require("cowsay");

/////////funnyWords and radnomWords used//////
console.log("------Funny and Random words--------");
const randomFunnyText = () => {
  let randomText = randomWords({ exactly: 5, join: " " });
  let funny = funnyWords(randomText);
  console.log(funny + "\n");
};
randomFunnyText();

////// One Liner Joke ////////////
console.log("------One liner joke--------");
let randomJoke = oneLinerJoke.getRandomJoke();
console.log(randomJoke);
let randomJoke1 = oneLinerJoke.getRandomJokeWithTag("stupid");
console.log(randomJoke1);



//// Cow say /////
console.log("------Cow say--------");
let word = randomWords()
let talkingCow = cowsay.say({
  text: word,
  e: "oO",
  T: "U",
});
console.log(talkingCow);

//// Figlet //////////
console.log("------Figlet--------");
let strangeText = () =>{
    let randomWord = randomWords();
    figlet(randomWord, (err, data) => {
  if (err) {
    console.log("Something went wrong....");
    console.dir(err);
    return;
  }
  console.log(data);
})};
strangeText()