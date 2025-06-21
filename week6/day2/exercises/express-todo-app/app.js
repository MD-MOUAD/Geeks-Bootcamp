const express = require("express");
const app = express();
const todosRouter = require("./routes/todos");

app.use(express.json());
app.use("/todos", todosRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Todo API running on http://localhost:${PORT}`);
});
