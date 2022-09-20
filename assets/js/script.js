//Global variables
var count = 20;
var correctAnswers = 0;
var wrongAnswers = 0;


var question1title = "Question #1";
var question1 = "what do you like to eat";
var question2title ="Question #2";
var question2 = "what is your fav color";



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

function askingQuestion(questionNum, question) {
h1.textContent = questionNum;
p1.textContent = question;


}

function presentAnswers() {
var answer1 = document.createElement("button");
answer1.textContent = "Answer1";
document.body.appendChild(answer1);
var answer2 = document.createElement("button");
answer2.textContent = "Answer2";
document.body.appendChild(answer2);
var answer3 = document.createElement("button");
answer3.textContent = "Answer3";
document.body.appendChild(answer3);
var answer4 = document.createElement("button");
answer4.textContent = "Answer4";
document.body.appendChild(answer4);
}




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
  askingQuestion(question1title, question1);
  //present answers();
  presentAnswers();
//if(correct button) {
  //askingQuestion(question2title, question2)
//};

  //if (correct answer) {
  // askingQuestion(++, ++) q2 basically
  // return correct +1 
  //else(not correct) {timer lose 10 seconds; askingQuestions again} return wrong +1


  
  //presented with a question Q1
})
    //a timer starts 
    //presented with a question Q1
    //If Q1 = correct
    //presented with question 2

//
