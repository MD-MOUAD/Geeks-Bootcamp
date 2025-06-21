import express from 'express';
import { fetchPosts } from './data/dataService.js';

const app = express();

app.get('/api/posts', async (req, res) => {
  try {
    const posts = await fetchPosts();
    console.log('Data successfully retrieved from JSONPlaceholder');
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching posts' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`CRUD API running on port ${PORT}`);
});
