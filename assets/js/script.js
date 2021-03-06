var startButton = document.getElementById('start-btn');
var questionEl = document.getElementById('question-container');
var newQuestion = document.getElementById('question');
var answerButton1 = document.getElementById('answer1');
var answerButton2 = document.getElementById('answer2');
var answerButton3 = document.getElementById('answer3');
var answerButton4 = document.getElementById('answer4');
var controls = document.querySelector('.controls');
controls.setAttribute("style", "display:none");
var timerEl = document.getElementById('timer');
var timerID;
var time = 75;
var currentQuestion = 0;
var score;
var scoreText = document.getElementById('score');
var saveButton = document.getElementById('save-btn');
var highScoresButton = document.getElementById('highscores');
var resultsEl = document.getElementById('results');
var clear = document.getElementById('clear');
var goBackButton = document.getElementById('go-back');
var outcomeEl = document.getElementById('#outcome');

answerButton1.addEventListener('click', selectAnswer)
answerButton2.addEventListener('click', selectAnswer)
answerButton3.addEventListener('click', selectAnswer)
answerButton4.addEventListener('click', selectAnswer)
function startQuiz() {
    startButton.setAttribute("class", "hide");
    clear.setAttribute("class", "hide");
    goBackButton.setAttribute("class", "hide")
    questionEl.setAttribute("style", "display:block");
    outcome.setAttribute("style", "display:block");
    resultsEl.setAttribute("style", "display:none");
    timerID = setInterval(clockTick, 1000);
    score = 0;
    nextQuestion();
}
function clockTick() {
    timerEl.textContent = "Time Left: " + time;
    if (time > 0) {
        time--
    } else {
        endQuiz()
    }
}

function selectAnswer() {
    var userAnswer = this.getAttribute('data-value')
    console.log(userAnswer)
    if (userAnswer == questionBank[currentQuestion].correct) {
        outcome.textContent = 'You are right!'
        score += 10;
    } else {
        time -= 5;
        outcome.textContent = 'You are wrong!'
    }
    if (currentQuestion < questionBank.length - 1) {
        currentQuestion++
        nextQuestion()
    }
    else {
        endQuiz()
    }
}
startButton.addEventListener('click', startQuiz)

var questionBank = [
    {
        question: "Commonly used data DO NOT include:",
        answers: [
            'strings', 'booleans', 'alerts', 'numbers'
        ],
        correct: 1
    },

    {
        question: "Condtion with an if else statement is enclosed with:",
        answers: [
            'quotes', 'curly brackets', 'parenthesis', 'square brackets'
        ],
        correct: 1
    },

    {
        question: "Arrays in JavaScript can be used to store:",
        answers: [
            'numbers and strings', 'other Arrays', 'booleans', 'all of the above'
        ],
        correct: 3
    },
    {
        question: "String values must be enclosed within _______ when being assigned to variables",
        answers: [
            'commas', 'curly brackets', 'quotes', 'parenthesis'
        ],
        correct: 0
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            'For Loop', 'JaveScript', 'Terminal/Bash', 'Console Log'
        ],
        correct: 3
    }
];
function endQuiz() {
    clearInterval(timerID)
    questionEl.setAttribute("style", "display:none");
    clear.setAttribute("class", "hide");
    outcome.setAttribute("style", "display:none")
    resultsEl.setAttribute("style", "display:none");
    controls.setAttribute("style", "display:block");
    score = score + time;
    scoreText.innerText ="Your current Score is: "+ score
}
function nextQuestion() {
    newQuestion.textContent = questionBank[currentQuestion].question
    answerButton1.textContent = questionBank[currentQuestion].answers[0]
    answerButton2.textContent = questionBank[currentQuestion].answers[1]
    answerButton3.textContent = questionBank[currentQuestion].answers[2]
    answerButton4.textContent = questionBank[currentQuestion].answers[3]
}
saveButton.addEventListener('click', saveScore)

function saveScore() {
    var highScores = JSON.parse(localStorage.getItem('results')) || [];
    var userId = document.getElementById('userid').value;
    var newScore = {name:userId, score:score}
    highScores.push(newScore)
    highScores.sort((a,b) => b.score - a.score);
    highScores.splice(8);
    localStorage.setItem('results', JSON.stringify(highScores))
    highScoresList()
};

highScoresButton.addEventListener('click', highScoresList);

function highScoresList() {
    controls.setAttribute("style", "display:none");
    resultsEl.setAttribute("style", "display:block");
    clear.setAttribute("style", "display:block");
    goBackButton.setAttribute("style", "display:block");
    var highScoresList = JSON.parse(localStorage.getItem("results")) || [];
    var htmlCode ="<ul>"
    for(let i=0;i<highScoresList.length;i++){
        htmlCode += ` <li><h3> ${highScoresList[i].name} --- ${highScoresList[i].score}</h3></li>`
    }
    htmlCode += "</ul>"

    resultsEl.innerHTML = htmlCode
       
};

clear.addEventListener('click', clearScores)

function clearScores() {
    localStorage.clear()
    window.location.reload();
};

goBackButton.addEventListener('click', goBack);

function goBack() {
    window.location.reload();
};