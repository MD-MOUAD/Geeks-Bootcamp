const express = require("express");
const router = express.Router();

const emojis = ["😀", "🎉", "🌟", "🎈", "👋"];

router.get("/", (req, res) => {
  res.render("form", { emojis });
});

router.post("/greet", (req, res) => {
  const { name, emoji } = req.body;

  if (!name) {
    return res.status(400).send("Please enter your name!");
  }

  if (!emojis.includes(emoji)) {
    return res.status(400).send("Invalid emoji selection!");
  }

  res.render("greeting", { name, emoji });
});

module.exports = router;
