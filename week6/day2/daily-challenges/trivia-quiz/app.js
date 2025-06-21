const express = require("express");
const app = express();
const quizRouter = require("./routes/quiz");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use("/", quizRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Trivia Quiz running at http://localhost:${PORT}/quiz`);
});
