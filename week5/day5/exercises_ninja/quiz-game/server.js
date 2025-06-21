const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

const questions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    id: 3,
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4",
  },
];

let scores = [];

// API Routes
app.get("/api/questions", (req, res) => {
  res.json(questions);
});

app.post("/api/scores", (req, res) => {
  const { name, score } = req.body;
  scores.push({ name, score });
  scores.sort((a, b) => b.score - a.score);
  scores = scores.slice(0, 10);
  res.json(scores);
});

app.get("/api/scores", (req, res) => {
  res.json(scores);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
