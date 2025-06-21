import express from "express";
const app = express();
app.use(express.json());

let posts = [
  { id: 1, title: "First Post", content: "This is my first blog post" },
  { id: 2, title: "Second Post", content: "This is another post." },
];

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.get("/posts/:id", (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).send("Post not found");
  res.json(post);
});

app.post("/posts", (req, res) => {
  const post = {
    id: posts.length + 1,
    title: req.body.title,
    content: req.body.content,
  };
  posts.push(post);
  res.status(201).json(post);
});

app.put("/posts/:id", (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).send("Post not found");

  post.title = req.body.title || post.title;
  post.content = req.body.content || post.content;
  res.json(post);
});

app.delete("/posts/:id", (req, res) => {
  posts = posts.filter((p) => p.id !== parseInt(req.params.id));
  res.status(204).send();
});

app.use((req, res) => {
  res.status(404).send("Route not found");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Blog API running on port ${PORT}`);
});
