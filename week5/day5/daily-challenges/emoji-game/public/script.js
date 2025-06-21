let currentScore = 0;
let currentEmoji = {};
let timer;
let timeLeft = 10;
let gameActive = true;

const emojiDisplay = document.getElementById("emoji-display");
const optionsContainer = document.getElementById("options-container");
const feedbackElement = document.getElementById("feedback");
const scoreElement = document.getElementById("score");
const timeLeftElement = document.getElementById("time-left");
const timerElement = document.getElementById("timer");
const nextButton = document.getElementById("next-btn");
const gameOverElement = document.getElementById("game-over");
const finalScoreElement = document.getElementById("final-score");
const saveScoreButton = document.getElementById("save-score");
const playerNameInput = document.getElementById("player-name");
const leaderboardList = document.getElementById("leaderboard-list");

fetchLeaderboard();
loadNewEmoji();

nextButton.addEventListener("click", loadNewEmoji);
saveScoreButton.addEventListener("click", saveScore);

function startTimer() {
  clearInterval(timer);
  timeLeft = 10;
  updateTimerDisplay();

  timer = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();

    if (timeLeft <= 0) {
      clearInterval(timer);
      handleTimeOut();
    }
  }, 1000);
}

function updateTimerDisplay() {
  timeLeftElement.textContent = timeLeft;
}

function handleTimeOut() {
  feedbackElement.textContent = `Time's up! The correct answer was: ${currentEmoji.correctAnswer}`;
  disableOptions();
  gameActive = false;
  nextButton.classList.remove("hide");
}

async function loadNewEmoji() {
  if (!gameActive) return;

  feedbackElement.textContent = "";
  nextButton.classList.add("hide");
  timerElement.classList.remove("hide");

  try {
    const response = await fetch("/api/emoji");
    currentEmoji = await response.json();
    displayEmoji(currentEmoji);
    startTimer();
  } catch (error) {
    console.error("Error loading emoji:", error);
    feedbackElement.textContent = "Error loading emoji. Please try again.";
  }
}

function displayEmoji(emojiData) {
  emojiDisplay.textContent = emojiData.emoji;
  optionsContainer.innerHTML = "";

  emojiData.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.className = "option-btn";
    button.addEventListener("click", () =>
      handleGuess(option, emojiData.correctAnswer)
    );
    optionsContainer.appendChild(button);
  });
}

async function handleGuess(guess, correctAnswer) {
  clearInterval(timer);

  try {
    const response = await fetch("/api/guess", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emoji: currentEmoji.emoji,
        guess,
        correctAnswer,
      }),
    });

    const result = await response.json();

    if (result.isCorrect) {
      currentScore++;
      scoreElement.textContent = currentScore;
      feedbackElement.textContent = "Correct! 🎉";
    } else {
      feedbackElement.textContent = `Wrong! The correct answer was: ${result.correctAnswer}`;
    }

    highlightOptions(guess, result.correctAnswer);
    nextButton.classList.remove("hide");
  } catch (error) {
    console.error("Error submitting guess:", error);
    feedbackElement.textContent = "Error submitting guess. Please try again.";
  }
}

function highlightOptions(selectedOption, correctAnswer) {
  const buttons = optionsContainer.querySelectorAll(".option-btn");

  buttons.forEach((button) => {
    button.disabled = true;
    if (button.textContent === correctAnswer) {
      button.classList.add("correct");
    } else if (
      button.textContent === selectedOption &&
      selectedOption !== correctAnswer
    ) {
      button.classList.add("incorrect");
    }
  });
}

function disableOptions() {
  const buttons = optionsContainer.querySelectorAll(".option-btn");
  buttons.forEach((button) => {
    button.disabled = true;
  });
}

async function saveScore() {
  const name = playerNameInput.value.trim();
  if (!name) {
    alert("Please enter your name");
    return;
  }

  try {
    const response = await fetch("/api/leaderboard", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, score: currentScore }),
    });

    const updatedLeaderboard = await response.json();
    updateLeaderboard(updatedLeaderboard);
    resetGame();
  } catch (error) {
    console.error("Error saving score:", error);
    alert("Error saving score. Please try again.");
  }
}

function resetGame() {
  currentScore = 0;
  scoreElement.textContent = "0";
  gameOverElement.classList.add("hide");
  gameActive = true;
  loadNewEmoji();
}

async function fetchLeaderboard() {
  try {
    const response = await fetch("/api/leaderboard");
    const leaderboard = await response.json();
    updateLeaderboard(leaderboard);
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
  }
}

function updateLeaderboard(leaderboard) {
  leaderboardList.innerHTML = "";

  if (leaderboard.length === 0) {
    leaderboardList.innerHTML = "<p>No scores yet. Be the first!</p>";
    return;
  }

  leaderboard.forEach((entry, index) => {
    const item = document.createElement("div");
    item.className = "leaderboard-item";
    item.innerHTML = `
            <span>${index + 1}. ${entry.name}</span>
            <span>${entry.score}</span>
        `;
    leaderboardList.appendChild(item);
  });
}
