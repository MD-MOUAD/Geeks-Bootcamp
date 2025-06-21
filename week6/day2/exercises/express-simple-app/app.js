const express = require("express");
const app = express();
const indexRouter = require("./routes/index");

app.use("/", indexRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
