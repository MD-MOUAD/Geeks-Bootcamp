const express = require("express");
const app = express();
const postsRouter = require("./routes/posts");

app.use(express.json());

app.use("/posts", postsRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Blog API running at http://localhost:${PORT}`);
});
