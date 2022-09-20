//Global variables
var count = 120;
var score = 0;
var i= 0;

//Selecting elments
var startButton = document.querySelector("#startbutton");
var timer = document.querySelector("#timer");
var header = document.querySelector("header");
var main = document.querySelector("main");
var scoreEl = document.querySelector("#scoreid");
//var h1 = document.querySelector("#h1");
//var p1 = document.querySelector("#p1");


//Questions in an array of objects
var questions = [
  {q: "what do you like to eat?",
  lista: ["steak", "apple", "burger", "beer"],
   a: "steak" },
  {q: "favorite color?",
  lista: ["red", "orange", "blue", "green"],
   a: "blue" }
]

console.log(questions[0].q);
console.log(questions[0].lista[0]);
console.log(questions[0].a);



// //var buttons = document.querySelectorAll("button"); array
//correctButton.setAttribute("data-correct", "yes");
//key thing is we can set attribute on any DOM element

function askingQuestionX () {

 //for (var i = 0; i < questions.length; i++){
  var currentquestion = questions[i];
  //var section = document.createElement("sections")
  var questionText = document.createElement("h2");
  var answerTextUl = document.createElement("ul");
  var answerTextLi1 = document.createElement("button");
  var answerTextLi2 = document.createElement("button");
  var answerTextLi3 = document.createElement("button");
  var answerTextLi4 = document.createElement("button");

  questionText.textContent = questions[i].q;
  answerTextLi1.textContent = questions[i].lista[0];
  answerTextLi2.textContent = questions[i].lista[1];
  answerTextLi3.textContent = questions[i].lista[2];
  answerTextLi4.textContent = questions[i].lista[3];

  main.appendChild(questionText);
  main.appendChild(answerTextUl);
  answerTextUl.appendChild(answerTextLi1);
  answerTextUl.appendChild(answerTextLi2);
  answerTextUl.appendChild(answerTextLi3);
  answerTextUl.appendChild(answerTextLi4);

  answerTextUl.addEventListener("click", function (event){
    console.log(event.target);
    // console.log(questions[i].a);
    if(event.target.textContent === questions[i].a) {
      console.log("correct answer")
      score++ ;
      console.log(score);
      scoreEl.textContent = score;

    } else {
      count -= 10;
    }
    i++;
    main.innerHTML = "";

    if(i > questions.length - 1) {
      //end quiz
      //Text thats thanks for playing
      //Display score and save initials, save to local upon reload
    } else { 
      askingQuestionX();
    }

   });

}

// for (var i = 0; i <  buttons.length; i++){
// buttons[i].addEventListener("click", function(event){}
//console.log("click"))
// }




//Timer intervals Updates count on page
function setTime() {
  var timerInterval = setInterval(function() {
    count-- ;
    console.log(count);
    if(count === 0) {
      clearInterval(timerInterval);
    }
    timer.textContent = count;

  }, 1000);
}


//Start button
    //When clicked: 
startButton.addEventListener("click", function (){
  header.innerHTML = " "                   //important to clear, innerHTML is a property
  setTime(); //a timer starts 
  //question1();
  //askingQuestion(i);
  //i++

  askingQuestionX()

})
    //a timer starts 
    //presented with a question Q1
    //If Q1 = correct
    //presented with question 2

//

//even listeners for when user selects option
//if correct answer etc etc