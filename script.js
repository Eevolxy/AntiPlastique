const questions = [
    {
        question: "Le plastique biodégradable se décompose aussi rapidement que les matières organiques.",
        answer: false
    },
    {
        question: "Le recyclage du plastique est une solution efficace à 100% contre la pollution.",
        answer: false
    },
    {
        question: "Les microplastiques sont des fragments de plastique de moins de 5 millimètres.",
        answer: true
    },
    {
        question: "La production de plastique à partir de ressources fossiles contribue au changement climatique.",
        answer: true
    },
    {
        question: "Il est possible de recycler tous les types de plastique.",
        answer: false
    }
    // Ajoutez d'autres questions ici
];

let currentQuestionIndex = 0;
let score = 0;
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const resultsContainer = document.getElementById('results-container');
const scoreElement = document.getElementById('score');
const totalQuestionsElement = document.getElementById('total-questions');
const questionContainer = document.getElementById('question-container'); // Ajout de cette ligne

function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;
    } else {
        showResults();
    }
}

function selectAnswer(isTrue) {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        if (isTrue === currentQuestion.answer) {
            score++;
        }
        currentQuestionIndex++;
        loadQuestion();
    }
}

function showResults() {
    questionContainer.classList.add('hidden');
    resultsContainer.classList.remove('hidden');
    scoreElement.textContent = score;
    totalQuestionsElement.textContent = questions.length;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    questionContainer.classList.remove('hidden');
    resultsContainer.classList.add('hidden');
    loadQuestion();
}

loadQuestion();