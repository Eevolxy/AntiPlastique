const questions = [
    {
        question: "À votre avis, combien de tonnes de plastique sont produites chaque années dans le monde ?",
        answers : [
            { text: "394 millions", correct: false },
            { text: "411 millions", correct: false },
            { text: "460 millions", correct: true }
        ]
    },
    {
        question: "Combien de tonne de déchets sont générés chaque année, selon vous ?",
        answers: [
            { text: "350 millions", correct: true },
            { text: "420 millions", correct: false },
            { text: "320 millions", correct: false }
        ]
    },
    {
        question: "Des millions de tonnes de plastiques finissent dans l'océan chaque année. Vous savez combien ?",
        answers: [
            { text: "9 millions", correct: false },
            { text: "11 millions", correct: true },
            { text: "13 millions", correct: false },
            { text: "15 millions", correct: false }
        ]
    },
    {
        question: "La plastique, ça se recycle... mais seulement à :",
        answers: [
            { text: "9%", correct: true },
            { text: "10%", correct: false },
            { text: "12%", correct: false },
            { text: "15%", correct: false }
        ]
    },
    {
        question: "Des milliers d'animaux marins sont victimes de la pollution dans les océans. Combien à votre avis ?",
        answers: [
            { text: " Plus de 75 000", correct: false },
            { text: "Plus de 83 000", correct: false },
            { text: "Plus de 100 000", correct: true }
        ]
    },
    {
        question: "Combien d'années prend une bouteille en plastique pour se décomposer ?",
        answers: [
            { text: "500 ans", correct: false },
            { text: "450 ans", correct: true },
            { text: "400 ans", correct: false }
        ]
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

        answerButtonsElement.innerHTML = '';

        currentQuestion.answers.forEach(answer => {
            const button = document.createElement('button');
            button.textContent = answer.text;
            button.classList.add('answer-btn');
            button.addEventListener('click', () => selectAnswer(answer.correct));
            answerButtonsElement.appendChild(button);
        })
    } else {
        showResults();
    }
}

function selectAnswer(isCorrect) {
    if (currentQuestionIndex < questions.length) {
        if (isCorrect) {
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