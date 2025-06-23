let currentQuestion;

async function loadQuestion() {
  const res = await fetch("/api/quiz/next");
  const data = await res.json();

  if (data.done) {
    document.getElementById(
      "quiz-container"
    ).innerHTML = `<h2>Quiz Complete!</h2><p>Score: ${data.score}</p>`;
    return;
  }

  currentQuestion = data.question;
  document.getElementById("question").textContent = currentQuestion.question;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  currentQuestion.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.textContent = opt.option;
    btn.onclick = () => submitAnswer(opt.id);
    optionsDiv.appendChild(btn);
  });
}

async function submitAnswer(optionId) {
  const res = await fetch("/api/quiz/answer", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      questionId: currentQuestion.id,
      selectedOptionId: optionId,
    }),
  });

  const result = await res.json();
  const feedback = result.correct ? "Correct!" : "Wrong!";
  document.getElementById("feedback").textContent = feedback;
  setTimeout(() => {
    document.getElementById("feedback").textContent = "";
    loadQuestion();
  }, 1000);
}

loadQuestion();
