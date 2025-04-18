const questions = [
    {
        question: "À votre avis, combien de tonnes de plastique sont produites chaque années dans le monde ?",
        explanation: "En 2019, la production mondiale de plastique a atteint environ 460 millions de tonnes, un chiffre qui continue malheureusement de croître.",
        answers : [
            { text: "394 millions", correct: false },
            { text: "411 millions", correct: false },
            { text: "460 millions", correct: true }
        ]
    },
    {
        question: "Combien de tonne de déchets sont générés chaque année, selon vous ?",
        explanation: "Selon les estimations de la Banque Mondiale, le monde génère plus de 350 millions de tonnes de déchets plastiques chaque année.",
        answers: [
            { text: "350 millions", correct: true },
            { text: "420 millions", correct: false },
            { text: "320 millions", correct: false }
        ]
    },
    {
        question: "Des millions de tonnes de plastiques finissent dans l'océan chaque année. Vous savez combien ?",
        explanation: "On estime qu'environ 11 millions de tonnes de plastique se déversent dans les océans chaque année, causant des dommages considérables aux écosystèmes marins.",
        answers: [
            { text: "9 millions", correct: false },
            { text: "11 millions", correct: true },
            { text: "13 millions", correct: false },
            { text: "15 millions", correct: false }
        ]
    },
    {
        question: "La plastique, ça se recycle... mais seulement à :",
        explanation: "Seulement environ 9% de tout le plastique jamais produit a été recyclé. Un pourcentage alarmant qui souligne l'urgence de réduire notre consommation et d'améliorer les systèmes de recyclage.",
        answers: [
            { text: "9%", correct: true },
            { text: "10%", correct: false },
            { text: "12%", correct: false },
            { text: "15%", correct: false }
        ]
    },
    {
        question: "Des milliers d'animaux marins sont victimes de la pollution dans les océans. Combien à votre avis ?",
        explanation: "Plus de 100 000 animaux marins meurent chaque année à cause de la pollution plastique, par ingestion, étranglement ou blessures.",
        answers: [
            { text: " Plus de 75 000", correct: false },
            { text: "Plus de 83 000", correct: false },
            { text: "Plus de 100 000", correct: true }
        ]
    },
    {
        question: "Combien d'années prend une bouteille en plastique pour se décomposer ?",
        explanation: "Une bouteille en plastique peut mettre jusqu'à 450 ans, voire plus, pour se décomposer complètement dans l'environnement.",
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
const popupContainer = document.getElementById('popup-container');
const popupText = document.getElementById('popup-text');
const closePopupBtn = document.getElementById('close-popup');
const answerResult = document.getElementById('answer-result');
const result = document.getElementById("result");

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
            answerResult.style.color = "green";
            answerResult.textContent = "Bonne réponse !";
        } else {
            answerResult.style.color = "red";
            answerResult.textContent = "Mauvaise réponse...";
        }
        popupText.textContent = questions[currentQuestionIndex].explanation;
        popupContainer.style.display = 'flex';
        currentQuestionIndex++;
    }
}

function closePopup() {
    popupContainer.style.display = 'none';
    loadQuestion();
}

closePopupBtn.addEventListener('click', closePopup);

function showResults() {
    questionContainer.classList.add('hidden');
    resultsContainer.classList.remove('hidden');

    if (score < 3) {
        result.innerText = "C’est un début ! Chaque petite prise de conscience est un pas vers un monde plus durable 🌍💡";
    } else if (score >= 3 && score <= 5) {
        result.innerText = "Pas mal ! Tu es sur la bonne voie pour devenir un.e vrai.e éco-citoyen.ne 🌿✨";
    } else {
        result.innerText = "Bravo ! Ta conscience écologique est au top 💚 Continue à inspirer les autres ! 🌎♻️";
    }

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