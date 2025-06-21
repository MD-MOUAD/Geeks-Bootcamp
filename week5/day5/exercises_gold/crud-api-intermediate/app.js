import express from "express";
import axios from "axios";

const app = express();
app.use(express.json());

const API_URL = "https://jsonplaceholder.typicode.com/posts";

app.get("/api/posts", async (req, res) => {
  try {
    const response = await axios.get(API_URL);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching posts" });
  }
});

app.get("/api/posts/:id", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}/${req.params.id}`);
    if (!response.data)
      return res.status(404).json({ message: "Post not found" });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching post" });
  }
});

app.post("/api/posts", async (req, res) => {
  try {
    const response = await axios.post(API_URL, req.body);
    res.status(201).json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error creating post" });
  }
});

app.put("/api/posts/:id", async (req, res) => {
  try {
    const response = await axios.put(`${API_URL}/${req.params.id}`, req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error updating post" });
  }
});

app.delete("/api/posts/:id", async (req, res) => {
  try {
    await axios.delete(`${API_URL}/${req.params.id}`);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Error deleting post" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`CRUD API running on port ${PORT}`);
});
