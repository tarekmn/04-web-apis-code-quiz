//Global variables
var count = 10;
var score = 0;
var i= 0;
var highScoreArray = [];   //need to retrieve from local memory and push to array. Not working
console.log(highScoreArray);


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
  {q: "Inside which HTML element do we put the JavaScript?",
  lista: ["<javascript>", "<script>", "<js>", "<scripting>"],
   a: "<script>" },
  {q: "Which of the following object is the main entry point to all client-side JavaScript features and APIs? color?",
  lista: ["position", "window", "standard", "location"],
   a: "window" },
   {q: "Which of the following can be used to call a JavaScript Code Snippet?",
  lista: ["function", "preprocessor", "triggeringevent", "rmi"],
   a: "function" },
   {q: "Which of the following scoping type does JavaScript use?",
  lista: ["sequential", "segmental", "lexical", "literal"],
   a: "lexical" },
   {q: "What is the result of console.log(p)?",
  lista: ["valueNotfound", "referenceError", "null", "zero"],
   a: "referenceError" },
   {q: "Which of the following is not a framework?",
   lista: ["JavaScript.NET", "JavaScript", "CocoaJS", "jQuery"],
    a: "JavaScript" },

]

//Testers to make sure we are selecting correct key value pairs//
//console.log(questions[0].q);       
//console.log(questions[0].lista[0]);
//console.log(questions[0].a);

function endGame() {
  header.innerHTML = "" ;
  main.innerHTML = "";
  main.textContent= "Game Over! Please save your intials"

  var inputText = document.createElement("input");
  var inputButton = document.createElement("button");
  //var inputLabel = document.createElement("label");
  //inputLabel.textContent = "Your initials";
  inputButton.textContent = "Save"
  main.appendChild(inputText);
  main.appendChild(inputButton);
 // main.appendChild(inputLabel);


inputButton.addEventListener("click", function(event){
  //retrieve what is input text
  console.log(inputText.value);
  //highScoreArray.push(inputText.value);
  localStorage.setItem("initals", inputText.value);
  localStorage.setItem("highScore", score);

  //push that and score to local memory
})

   //end quiz or basically clear everything
      //Text thats thanks for playing
      //Display score and save initials, save to local upon reload
  
}


//function that asks questions[i]
function askingQuestionX () {

  var currentquestion = questions[i];         //built as a blank, not sure if will need

  var questionText = document.createElement("h2");            //creating elements to later append
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
    //console.log(event.target);    to make sure correct event is targeted
    if(event.target.textContent === questions[i].a) {
      console.log("correct answer")
      score++ ;
      scoreEl.textContent = score;

    } else {
        count -= 10;
      console.log("wrong answer");
    }

    i++;
    main.innerHTML = "";

    if(i > questions.length - 1)  {

      endGame() 
    } else { 
      askingQuestionX();
    }

   });

}




//Timer intervals & Updateing the count on page
function setTime() {
  var timerInterval = setInterval(function() {
    count-- ;
    console.log(count);
    if(count === 0 || count < 0) {
      clearInterval(timerInterval);
      count = 0;
      endGame();
    }
    timer.textContent = count;

  }, 1000);
}

//Retrieve high score from local memory and push into array
function retrieveHighScore() {
  var localHighScore = localStorage.getItem("highScore");
  highScoreArray.push(localHighScore);
}


// Start Button that initiates everything

startButton.addEventListener("click", function (){
  header.innerHTML = " "                   //important to clear, innerHTML is a property
  setTime(); //a timer starts 
  askingQuestionX() ;
  retrieveHighScore() ; //Not pushing to the array
  

});