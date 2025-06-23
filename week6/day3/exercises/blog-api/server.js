import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import postRoutes from './server/routes/postRoutes.js';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.static(path.join(__dirname, 'server/public')));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "server/public/index.html"));
});

app.use('/posts', postRoutes);

app.use((req, res) => res.status(404).send("Not Found"));
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Server Error");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
