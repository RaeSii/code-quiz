var startButton = document.getElementById('start-btn');
var questionEl = document.getElementById('question-container');
var newQuestion = document.getElementById('question');
var answerButton1 = document.getElementById('answer1');
var answerButton2 = document.getElementById('answer2');
var answerButton3 = document.getElementById('answer3');
var answerButton4 = document.getElementById('answer4');
var timerEl = document.getElementById('timer');
var timerID;
var time = 45;
var currentQuestion = 0
function startQuiz() {
    var startScreenEl = document.getElementById('start-screen');
    startScreenEl.setAttribute("class", "hide");
    questionEl.setAttribute("style", "display:block");
    timerID = setInterval(clockTick, 500);
    
    nextQuestion();
}
function clockTick(){
    timerEl.textContent = "Time Left: "+time;
    if (time > 0) {
        time--
    } else{
        endQuiz()
    }
}

function selectAnswer() {

}
startButton.addEventListener('click', startQuiz)

var questionBank = [
    {
        question: "1Commonly used data DO NOT include:",
        answers: [
            'strings','booleans', 'alerts', 'numbers'
        ],
        correct: 2
    },

    {
        question: "2Commonly used data DO NOT include:",
        answers: [
            'strings','booleans', 'alerts', 'numbers'
        ],
        correct: 2
    },

    {
        question: "3Commonly used data DO NOT include:",
        answers: [
            'strings','booleans', 'alerts', 'numbers'
        ],
        correct: 2
    },
    {
        question: "4Commonly used data DO NOT include:",
        answers: [
            'strings','booleans', 'alerts', 'numbers'
        ],
        correct: 2
    },
    {
        question: "5Commonly used data DO NOT include:",
        answers: [
            'strings','booleans', 'alerts', 'numbers'
        ],
        correct: 2
    }
];
function endQuiz(){
    clearInterval (timerID)
}
function nextQuestion() {
    newQuestion.textContent = questionBank [currentQuestion].question
    answerButton1.textContent = questionBank [currentQuestion].answers[0]
    answerButton2.textContent = questionBank [currentQuestion].answers[1]
    answerButton3.textContent = questionBank [currentQuestion].answers[2]
    answerButton4.textContent = questionBank [currentQuestion].answers[3]
    }