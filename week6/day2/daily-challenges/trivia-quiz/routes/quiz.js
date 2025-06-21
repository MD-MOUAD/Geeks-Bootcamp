const express = require("express");
const router = express.Router();

const triviaQuestions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  {
    question: "What is the largest mammal in the world?",
    answer: "Blue whale",
  },
];

let currentQuestionIndex = 0;
let score = 0;

// Start or continue the quiz
router.get("/quiz", (req, res) => {
  if (currentQuestionIndex >= triviaQuestions.length) {
    return res.redirect("/quiz/score");
  }
  res.render("question", {
    question: triviaQuestions[currentQuestionIndex].question,
    questionNumber: currentQuestionIndex + 1,
    totalQuestions: triviaQuestions.length,
  });
});

router.post("/quiz", (req, res) => {
  const userAnswer = req.body.answer.trim();
  const correctAnswer = triviaQuestions[currentQuestionIndex].answer;
  const isCorrect = userAnswer.toLowerCase() === correctAnswer.toLowerCase();

  if (isCorrect) score++;

  res.render("feedback", {
    isCorrect,
    correctAnswer,
    nextQuestion: currentQuestionIndex + 1 < triviaQuestions.length,
  });

  currentQuestionIndex++;
});

router.get("/quiz/score", (req, res) => {
  const finalScore = score;

  currentQuestionIndex = 0;
  score = 0;
  res.render("score", {
    score: finalScore,
    totalQuestions: triviaQuestions.length,
  });
});

module.exports = router;
