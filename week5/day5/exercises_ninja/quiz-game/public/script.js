let currentQuestionIndex = 0;
let score = 0;
let questions = [];

const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const scoreContainer = document.getElementById("score-container");
const scoreElement = document.getElementById("score");
const highScoresElement = document.getElementById("high-scores");

async function fetchQuestions() {
  try {
    const response = await fetch("/api/questions");
    questions = await response.json();
  } catch (error) {
    console.error("Error fetching questions:", error);
  }
}

async function startQuiz() {
  await fetchQuestions();
  startButton.classList.add("hide");
  questionContainerElement.classList.remove("hide");
  scoreContainer.classList.add("hide");
  currentQuestionIndex = 0;
  score = 0;
  showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  answerButtonsElement.innerHTML = "";

  question.options.forEach((option) => {
    const button = document.createElement("button");
    button.innerText = option;
    button.classList.add("btn");
    button.addEventListener("click", () =>
      selectAnswer(option, question.answer)
    );
    answerButtonsElement.appendChild(button);
  });
}

function selectAnswer(selectedOption, correctAnswer) {
  const buttons = answerButtonsElement.querySelectorAll(".btn");

  buttons.forEach((button) => {
    button.disabled = true;
    if (button.innerText === correctAnswer) {
      button.classList.add("correct");
    } else if (
      button.innerText === selectedOption &&
      selectedOption !== correctAnswer
    ) {
      button.classList.add("incorrect");
    }
  });

  if (selectedOption === correctAnswer) {
    score++;
  }

  nextButton.classList.remove("hide");
}

function showScore() {
  questionContainerElement.classList.add("hide");
  nextButton.classList.add("hide");
  scoreContainer.classList.remove("hide");
  scoreElement.innerText = score;

  const name = prompt("Enter your name for the high score board:");
  if (name) {
    fetch("/api/scores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, score }),
    })
      .then((response) => response.json())
      .then((scores) => {
        highScoresElement.innerHTML = "<h3>High Scores</h3>";
        scores.forEach((score, index) => {
          highScoresElement.innerHTML += `<p>${index + 1}. ${score.name}: ${
            score.score
          }</p>`;
        });
      });
  }
}

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion(questions[currentQuestionIndex]);
    nextButton.classList.add("hide");
  } else {
    showScore();
  }
});

fetch("/api/scores")
  .then((response) => response.json())
  .then((scores) => {
    if (scores.length > 0) {
      highScoresElement.innerHTML = "<h3>High Scores</h3>";
      scores.forEach((score, index) => {
        highScoresElement.innerHTML += `<p>${index + 1}. ${score.name}: ${
          score.score
        }</p>`;
      });
    }
  });
