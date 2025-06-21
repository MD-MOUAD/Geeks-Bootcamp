const express = require("express");
const app = express();
const greetingRouter = require("./routes/greeting");
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use("/", greetingRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Emoji Greeting App running at http://localhost:${PORT}`);
});
