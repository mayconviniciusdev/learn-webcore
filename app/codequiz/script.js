const appState = {currentQuestionIndex: 0, score: 0};
const elements = {
  startScreen: document.getElementById("start-screen"),
  quizScreen: document.getElementById("quiz-screen"),
  resultScreen: document.getElementById("result-screen"),
  startButton: document.getElementById("start-button"),
  restartButton: document.getElementById("restart-button"),
  question: document.querySelector(".quiz-question"),
  options: document.querySelector(".quiz-options"),
  progressBar: document.querySelector(".progress-bar"),
  resultTitle: document.querySelector(".result-title"),
  resultPercentage: document.querySelector(".result-percentage"),
  resultDescription: document.querySelector(".result-description")
};

elements.startButton.addEventListener("click", startQuiz);
elements.restartButton.addEventListener("click", restartQuiz);

function startQuiz() {
  elements.startScreen.classList.add("hidden");
  elements.quizScreen.classList.remove("hidden");
  renderQuestion();
}

function renderQuestion() {
  const question = questions[appState.currentQuestionIndex];

  if (!question) {
    finishQuiz();
    return;
  }

  elements.question.textContent = question.question;
  elements.options.innerHTML = "";

  question.options.forEach((option, index) => {
    const div = document.createElement("div");
    div.classList.add("option");
    div.textContent = option;
    div.addEventListener("click", () => handleAnswer(index));
    elements.options.appendChild(div);
  });

  updateProgress();
}

function handleAnswer(selectedIndex) {
  const question = questions[appState.currentQuestionIndex];

  if (selectedIndex === question.answer) {
    appState.score++;
  }

  appState.currentQuestionIndex++;
  renderQuestion();
}

function updateProgress() {
  const progress =
    (appState.currentQuestionIndex / questions.length) * 100;
  elements.progressBar.style.width = `${progress}%`;
}

function finishQuiz() {
  elements.quizScreen.classList.add("hidden");
  elements.resultScreen.classList.remove("hidden");

  const percentage = Math.floor(
    (appState.score / questions.length) * 100
  );

  elements.resultPercentage.textContent = `Você teve um aproveitamento de ${percentage}%`;

  if (percentage < 40) {
    elements.resultTitle.textContent = "Precisamos estudar mais!";
  } else if (percentage < 70) {
    elements.resultTitle.textContent = "Bom progresso!";
  } else {
    elements.resultTitle.textContent = "Excelente desempenho!";
  }

  elements.resultDescription.textContent =
    `Acertando ${appState.score} questões de um total de ${questions.length}!`;

  elements.progressBar.style.width = "100%";
}

function restartQuiz() {
  appState.currentQuestionIndex = 0;
  appState.score = 0;

  elements.resultScreen.classList.add("hidden");
  elements.startScreen.classList.remove("hidden");
  elements.progressBar.style.width = "0%";
}