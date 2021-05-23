const chalk = require('chalk')

var readlineSync = require('readline-sync');

var userName = readlineSync.question("What is your name? ")

var score = 0; 

console.log(chalk.cyanBright("Welcome ") + chalk.underline(userName) + chalk.bold(" to DO YOU KNOW Kaustubh"));

console.log("------------------");

console.log(chalk.yellow("Scoring system: You are awarded ") + chalk.bold("+1") + chalk.yellow(" for every correct answer and ") + chalk.bold("-1") + chalk.yellow(" for every incorrect answer.")+ " Let's get started!");


function play(question,answer) {

var userAnswer = readlineSync.question(question);

if (userAnswer.toUpperCase() === answer.toUpperCase()) {

  console.log("You are right! ")
  score = score + 1;
}
 else {

   console.log("You are wrong! ")
   score = score - 1;
 }
 
}

var questionOne = {
   question: "What is Kaustubh's age? ",
   answer: "24"
}

var questionTwo = {
  question: "Which is Kaustubh's fav movie? ",
   answer: "ZNMD"
}

var questionThree = {
  question: "Which is Kaustubh's dream company? ",
  answer: "Microsoft"
} 

var questionFour = {
  question: "Where does Kaustubh work ? ",
  answer: "Packt"
} 


// you can directly insert the above objects in the array below

var questions = [questionOne, questionTwo, questionThree, questionFour];

for (var i = 0; i < questions.length; i++){

  var currentQuestion = questions[i];
  play (currentQuestion.question, currentQuestion.answer)

}

var highScores = [
  {

  name: "Kaustubh ",
  score: "4"
}, {

  name: "Aaron ",
  score: "3"

}
]

console.log("YAY you scored! ", score);

console.log("|Game over, thanks for playing!|")

console.log("------------------");


for (var k = 0; k < highScores.length; k++)
{

  var currentHighScore = highScores[k];

  var c = currentHighScore.score;

 if (score > c) {

  // console.log("YAY you scored! ", score);
  console.log("Congratulations," + userName + "!" + " You have beaten the current high score");

}

else {
// 
}
}


for (var j = 0; j < highScores.length; j++)
{ 
  var currentScore = highScores[j];

  var a = currentScore.name;
  var b = currentScore.score;

   console.log("------------------");

  console.log("Check out the high scores:", a, b);

  // console.log("---------");


}
