const chalk = require('chalk')

var readlineSync = require('readline-sync');

var userName = readlineSync.question("What is your name? ")

var score = 0;

console.log(chalk.cyanBright("\nWelcome ") + chalk.underline(userName) + chalk.bold(" to DO YOU KNOW Kaustubh\n"));

console.log("------------------");

console.log(chalk.yellow("Scoring system: You are awarded ") + chalk.bold("+1") + chalk.yellow(" for every correct answer and ") + chalk.bold("0") + chalk.yellow(" for every incorrect answer.") + " Let's get started!");

// console.log("\nThere are 2 levels to the game. Answer 2 questions correct out of 4 to go to the next level\n")


function play(question, answer) {

  var userAnswer = readlineSync.question(question);

  console.log("\nYou chose option ", userAnswer);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {

    console.log("\nYou are right! \n")
    score = score + 1;
  } else {

    console.log("\nYou are wrong! \n")
  }

}



var questionOne = {
  question: `What is Kaustubh's age?\n 
   a) 23
   b) 25
   c) 24 \n`,
  answer: "c"
}

var questionTwo = {
  question: `Which is Kaustubh's fav movie? \n 
  a) ZNMD
  b) 3 idiots
  c) Swades\n`,
  answer: "a"
}

var questionThree = {
  question: `Which is Kaustubh's dream company? \n 
  a) Google
  b) Microsoft
  c) Amazon\n`,
  answer: "b"
}

var questionFour = {
  question: `Where does Kaustubh work ? \n 
  a) Packt
  b) Apress
  c) Manning\n`,
  answer: "a"
}

var questionFive = {
  question: `Which is Kaustubh's favorite sport ? \n 
  a) Football
  b) Golf
  c) Cricked\n`,
  answer: "c"
}

var questionSix = {
  question: `Would Kaustubh be able to crack neoG interviews ? \n 
  a) Yes
  b) No
  c) Maybe\n`,
  answer: "a"
}


// you can directly insert the above objects in the array below

var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix];

for (var i = 0; i < questions.length; i++) {

  play(questions[i].question, questions[i].answer)

}

var highScores = [{

  name: "Kaustubh ",
  score: "6"
}, {

  name: "Aaron ",
  score: "5"

}]


console.log("YAY you scored! ", score);

console.log("\n|Game over, thanks for playing!|")

console.log("------------------------------------------------");


for (var k = 0; k < highScores.length; k++) {

  var currentHighScore = highScores[k];


  if (score > currentHighScore.score) {

    // console.log("YAY you scored! ", score);
    console.log("\nCongratulations," + userName + "!" + " You have beaten the current high score");

  } else {
    // 
  }
}

 console.log("\nCheck out the high scores: \n");
 
// console.log("------------------");

for (var j = 0; j < highScores.length; j++) {
  var currentScore = highScores[j];


  console.log(currentScore.name,currentScore.score);

  // console.log("---------");


}

