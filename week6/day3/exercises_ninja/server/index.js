const express = require("express");
const app = express();
const quizRoutes = require("./routes/quizRoutes");
const path = require("path");

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use("/api/quiz", quizRoutes);

app.listen(3000, () =>
  console.log("Quiz app running on http://localhost:3000")
);
