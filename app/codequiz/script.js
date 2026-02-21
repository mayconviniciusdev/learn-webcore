const appState = {currentQuestionIndex: 0, score: 0};
const elements = {
  startScreen: document.getElementById("start-screen"),
  quizScreen: document.getElementById("quiz-screen"),
  resultScreen: document.getElementById("result-screen"),
  startButton: document.getElementById("start-button"),
  restartButton: document.getElementById("restart-button"),
  questionText: document.querySelector(".quiz-question"),
  optionsContainer: document.querySelector(".quiz-options"),
  progressBar: document.querySelector(".progress-bar"),
  resultTitle: document.querySelector(".result-title"),
  resultPercentage: document.querySelector(".result-percentage"),
  resultDescription: document.querySelector(".result-description")
};

document.addEventListener("DOMContentLoaded", initializeApp);
elements.startButton.addEventListener("click", startQuiz);
elements.restartButton.addEventListener("click", restartQuiz);

function showScreen(screen) {
  const screens = ["start", "quiz", "result"];
  screens.forEach(s => {
    const el = elements[`${s}Screen`];
    el.classList.toggle("hidden", s !== screen);
  });
}

function initializeApp() {showScreen("start");}

function startQuiz() {
  appState.currentQuestionIndex = 0;
  appState.score = 0;

  showScreen("quiz");
  renderQuestion();
}

function renderQuestion() {
  const question = questions[appState.currentQuestionIndex];
  if (!question) return finishQuiz()

  elements.questionText.textContent = question.question;
  elements.optionsContainer.innerHTML = "";

  question.options.forEach((optionText, index) => {
    const div = document.createElement("div");
    div.className = "option";
    div.textContent = optionText;
    div.addEventListener("click", () => handleAnswer(index));
    elements.optionsContainer.appendChild(div);
  });

  updateProgress();
}

function handleAnswer(selectedIndex) {
  const currentQuestion = questions[appState.currentQuestionIndex];

  if (selectedIndex === currentQuestion.answer) {appState.score++;}

  appState.currentQuestionIndex++;
  renderQuestion();
}

function updateProgress() {
  const progress = (appState.currentQuestionIndex / questions.length) * 100;
  elements.progressBar.style.width = `${progress}%`;
}

function finishQuiz() {
  showScreen("result");

  const percentage = Math.floor((appState.score / questions.length) * 100);
  elements.resultPercentage.textContent = `Você teve um aproveitamento de ${percentage}%`;

  elements.resultTitle.textContent = 
  percentage < 40 ? "Precisamos estudar mais!" :
  percentage < 70 ? "Bom progresso!" : "Excelente desempenho!";
  
  elements.resultDescription.textContent = `Acertando ${appState.score} questões de um total de ${questions.length}!`;
  elements.progressBar.style.width = "100%";
}

function restartQuiz() {
  appState.currentQuestionIndex = 0;
  appState.score = 0;

  showScreen("start");
  elements.progressBar.style.width = "0%";
}