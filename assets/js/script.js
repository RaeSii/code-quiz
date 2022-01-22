var startButton = document.getElementById('start-btn');
var questionEl = document.getElementById('question-container');
var timerId = document.getElementById('time');


function startQuiz() {
    var startScreenEl = document.getElementById('start-screen');
    startScreenEl.setAttribute("class", "hide");
    questionEl.setAttribute("style", "display:block");
    timerId = setInterval(clockTick, 500);
    timerEl.textContent = time;
    nextQuestion();
}

function nextQuestion() {

}

function selectAnswer() {

}
startButton.addEventListener('click', startQuiz)

var question = [
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