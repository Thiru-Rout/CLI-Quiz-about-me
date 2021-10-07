var readlineSync = require("readline-sync");
var score = 0;

//welcome message
function welcome() {
  var userName = readlineSync.question("What's your name ?");
  console.log("--------")
  console.log("Welcome! " + userName)
  console.log("--------")
  console.log("--------")
}
welcome();


// Q AND A message
var questions = [{
  question: "1. Do you know Thiru? ",
  answer: "Yes"
},{
  question: "2. Where do I live now? ",
  answer: "Bangalore"
}, {
  question: "3. My favorite sports game would be? ",
  answer: "Cricket"
}, {
  question: "4. My favorite cricketer would be? ",
  answer: "Rohit Sharma"
},
{
  question: "5. Which is my favourite colour? ",
  answer: "Black"
},
{
  question: "6. What is tha name of my bike? ",
  answer: "Duke"
}];

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------");
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

game();


// Scores message
var highScores = [
  {
    name: "Sudhakar",
    score: 5,
  },

  {
    name: "Naveen",
    score: 4,
  },
]

function showScores() {
  console.log("-------------");
  console.log("YAY! You SCORED: ", score , "out of 6");
  console.log('-------------');

  console.log("Check out the high scores, if you should be there ping me and I'll update it.");
  
  console.log('-------------');
  console.log("Higest Scorers:")


  highScores.map(score => console.log(score.name, " : ", score.score))
};
 
showScores()


  