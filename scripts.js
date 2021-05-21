//create all elememts
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var qImg = document.getElementById("qImg");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var progress = document.getElementById("progress");
var scoreDiv = document.getElementById("scoreContainer");
var nameInput;

nameInput = prompt(" Gilakas'la, angwaxtlas? (welcome, what is your name?)", "Name");
  document.getElementById("nameInput").innerHTML = nameInput;



//create questions
let questions = [
  {
    question: "Eagle",
    imgSrc: "imgs/eagle.jpeg",
    choiceA: "Tsis kwani",
    choiceB: "kix ha laga",
    choiceC: "Kwikw",
  correct: "C"
},
{
  question: "Blue jay",
  imgSrc: "imgs/blueJay.jpeg",
  choiceA: "Dix dix aleetl",
  choiceB: "Kwis kwis",
  choiceC: "Ga ga'o",
correct: "B"
},
{
  question: "Raven",
  imgSrc: "imgs/raven.jpeg",
  choiceA: "Kwa akwamta",
  choiceB: "Kwa yux",
  choiceC: "Gwa wina",
correct: "C"
},
{
  question: "Owl",
  imgSrc: "imgs/owl.jpeg",
  choiceA: "Dix dix aleetl",
  choiceB: "Tsis kwani",
  choiceC: "Kwa yux",
correct: "A"
},
{
  question: "Crow?",
  imgSrc: "imgs/crow.jpeg",
  choiceA: "Kwis kwis",
  choiceB: "Kix ha la ga",
  choiceC: "Gwa wina",
correct: "B"
},
{
  question: "Chicken?",
  imgSrc: "imgs/chick.jpeg",
  choiceA: "Kwikw",
  choiceB: "Ga ga'o",
  choiceC: "Tsis kwani",
correct: "B"
},
{
  question: "Seagull?",
  imgSrc: "imgs/seagull.jpeg",
  choiceA: "Kwis kwis",
  choiceB: "Ga ga'o",
  choiceC: "Tsi kwa",
correct: "C"
},
{
  question: "Squirrel?",
  imgSrc: "imgs/squirell.jpeg",
  choiceA: "Mus mus",
  choiceB: "Ta minas",
  choiceC: "Tsa'wi",
correct: "B"
},
{
  question: "Dog?",
  imgSrc: "imgs/dog.jpeg",
  choiceA: "Watsi",
  choiceB: "Gila",
  choiceC: "Ba'di",
correct: "A"
},
{
  question: "Pig?",
  imgSrc: "imgs/pig.jpeg",
  choiceA: "Xwam di",
  choiceB: "Ha mumu",
  choiceC: "Gwa su",
correct: "C"
},
{
  question: "Butterfly?",
  imgSrc: "imgs/butterfly.jpeg",
  choiceA: "Watsi",
  choiceB: "Ta minas",
  choiceC: "Ha mumu",
correct: "C"
},
{
  question: "Mouse?",
  imgSrc: "imgs/mouse.jpeg",
  choiceA: "Gwa su",
  choiceB: "Giga yatsaga",
  choiceC: "Kix halaga",
correct: "B"
},
];

//create variables, one for the starting question and one for the last
const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let score = 0

// render a question
function renderQuestion(){
   let q = questions[runningQuestion];

    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }
    else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }
    else{
        // end the quiz and show the score
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";

    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);

    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "imgs/5.png" :
              (scorePerCent >= 60) ? "imgs/4.png" :
              (scorePerCent >= 40) ? "imgs/3.png" :
              (scorePerCent >= 20) ? "imgs/2.png" :
              "imgs/1.png";

    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}
