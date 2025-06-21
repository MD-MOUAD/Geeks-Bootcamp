const express = require("express");
const router = express.Router();

let posts = [
  {
    id: 1,
    title: "First Post",
    content: "Hello, world!",
    timestamp: new Date(),
  },
  {
    id: 2,
    title: "Second Post",
    content: "Express.js is cool!",
    timestamp: new Date(),
  },
];

// GET all blog posts
router.get("/", (req, res) => {
  res.json(posts);
});

// Get a specific post by ID
router.get("/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }

  res.json(post);
});

// Create a new blog post
router.post("/", (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: "Title and content are required" });
  }

  const newPost = {
    id: posts.length + 1,
    title,
    content,
    timestamp: new Date(),
  };

  posts.push(newPost);
  res.status(201).json(newPost);
});

// Update a blog post by ID
router.put("/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const { title, content } = req.body;
  const postIndex = posts.findIndex((p) => p.id === postId);

  if (postIndex === -1) {
    return res.status(404).json({ error: "Post not found" });
  }

  if (!title && !content) {
    return res
      .status(400)
      .json({ error: "At least one field (title or content) is required" });
  }

  posts[postIndex] = {
    ...posts[postIndex],
    title: title || posts[postIndex].title,
    content: content || posts[postIndex].content,
    timestamp: new Date(),
  };

  res.json(posts[postIndex]);
});

// Delete a blog post by ID
router.delete("/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const initialLength = posts.length;
  posts = posts.filter((p) => p.id !== postId);

  if (posts.length === initialLength) {
    return res.status(404).json({ error: "Post not found" });
  }

  res.status(204).send();
});

module.exports = router;
