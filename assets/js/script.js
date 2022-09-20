//Global variables
var count = 10;
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
   a: "blue" },
   {q: "favorite car",
  lista: ["accord", "lambo", "escalade", "minivan"],
   a: "lambo" },

]

//Testers to make sure we are selecting correct key value pairs//
//console.log(questions[0].q);       
//console.log(questions[0].lista[0]);
//console.log(questions[0].a);




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

    if(i > questions.length - 1 || count === 0)  {
      //end quiz or basically clear everything
      //Text thats thanks for playing
      //Display score and save initials, save to local upon reload
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
    }
    timer.textContent = count;

  }, 1000);
}


// Start Button that initiates everything

startButton.addEventListener("click", function (){
  header.innerHTML = " "                   //important to clear, innerHTML is a property
  setTime(); //a timer starts 
  askingQuestionX() 

});