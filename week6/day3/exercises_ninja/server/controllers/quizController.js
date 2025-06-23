const Question = require("../models/questionModel");

let score = 0;
let current = 0;

exports.getNextQuestion = async (req, res) => {
  const all = await Question.getAllQuestions();
  if (current >= all.length) {
    return res.json({ done: true, score });
  }
  const next = await Question.getQuestionWithOptions(all[current].id);
  res.json({ done: false, question: next });
};

exports.submitAnswer = async (req, res) => {
  const { questionId, selectedOptionId } = req.body;
  const question = await Question.getAllQuestions();
  const currentQuestion = question.find((q) => q.id === questionId);
  const isCorrect = currentQuestion.correct_answer_id === selectedOptionId;
  if (isCorrect) score++;
  current++;
  res.json({ correct: isCorrect });
};
