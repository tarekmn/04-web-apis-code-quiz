//Global variables
var count = 20;
var i = 0;   //question #0
var correctAnswers = 0;
var wrongAnswers = 0;

var questions = [
  {q: "what do you like to eat",
   a: "steak" },
  {q: "favorite color",
   a: "blue" }
]

console.log(questions[0].q);
console.log(questions[0].a);




//Selecting elments
var startButton = document.querySelector("#startbutton");
var timer = document.querySelector("#timer");
var h1 = document.querySelector("#h1");
var p1 = document.querySelector("#p1");




// //Question #1
// var question = document.createElement("p");
// question.textContent = "this was made by js, yes or no?" //text
// document.body.appendChild(question);

// console.log(question);

//Question #2 will try to replace current question/new approach

function askingQuestion(i) {
h1.textContent = questions[i].q;
p1.textContent = questions[i].a;
}




// function presentAnswers() {
// var answer1 = document.createElement("button");
// answer1.textContent = "Answer1";
// document.body.appendChild(answer1);
// var answer2 = document.createElement("button");
// answer2.textContent = "Answer2";
// document.body.appendChild(answer2);
// var answer3 = document.createElement("button");
// answer3.textContent = "Answer3";
// document.body.appendChild(answer3);
// var answer4 = document.createElement("button");
// answer4.textContent = "Answer4";
// document.body.appendChild(answer4);
// }




//Timer intervals Updates count on page
function setTime() {
  var timerInterval = setInterval(function () {
    count-- ;

    if(count === 0) {
      clearInterval(timerInterval);
    }
    timer.textContent = count;

  }, 1000);
}


//Start button
    //When clicked: 
startButton.addEventListener("click", function (){
  setTime(); //a timer starts 
  //question1();
  askingQuestion(i);
//randomize answer [array of possible answers?]

//if(correct button) {
  //askingQuestion(question2title, question2)
//};

  //if (correct answer) {
  // askingQuestion(++, ++) q2 basically
  // return correct +1 
  //else(not correct) {timer lose 10 seconds; askingQuestions again} return wrong +1
})
    //a timer starts 
    //presented with a question Q1
    //If Q1 = correct
    //presented with question 2

//
