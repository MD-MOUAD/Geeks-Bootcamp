const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

const emojis = [
  { emoji: "😀", name: "Grinning Face" },
  { emoji: "🐶", name: "Dog Face" },
  { emoji: "🌮", name: "Taco" },
  { emoji: "🚀", name: "Rocket" },
  { emoji: "🎸", name: "Guitar" },
  { emoji: "🍕", name: "Pizza" },
  { emoji: "🐱", name: "Cat Face" },
  { emoji: "🏀", name: "Basketball" },
  { emoji: "📱", name: "Mobile Phone" },
  { emoji: "🍎", name: "Red Apple" },
  { emoji: "⚽", name: "Soccer Ball" },
  { emoji: "🚗", name: "Automobile" },
];

let leaderboard = [];

function getRandomEmojiWithOptions() {
  const correctEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  const options = [correctEmoji.name];

  while (options.length < 4) {
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    if (!options.includes(randomEmoji.name)) {
      options.push(randomEmoji.name);
    }
  }

  options.sort(() => Math.random() - 0.5);

  return {
    emoji: correctEmoji.emoji,
    correctAnswer: correctEmoji.name,
    options,
  };
}

app.get("/api/emoji", (req, res) => {
  res.json(getRandomEmojiWithOptions());
});

app.post("/api/guess", (req, res) => {
  const { guess, correctAnswer } = req.body;
  const isCorrect = guess === correctAnswer;
  res.json({ isCorrect, correctAnswer });
});

app.post("/api/leaderboard", (req, res) => {
  const { name, score } = req.body;
  leaderboard.push({ name, score, date: new Date().toISOString() });
  leaderboard.sort((a, b) => b.score - a.score);
  leaderboard = leaderboard.slice(0, 10); // Keep top 10
  res.json(leaderboard);
});

app.get("/api/leaderboard", (req, res) => {
  res.json(leaderboard);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
