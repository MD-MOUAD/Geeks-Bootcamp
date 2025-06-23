import * as Post from '../models/postModel.js';

export async function getAll(req, res) {
  const posts = await Post.getAllPosts();
  res.json(posts);
}

export async function getOne(req, res) {
  const post = await Post.getPostById(req.params.id);
  if (!post) return res.status(404).send("Post not found");
  res.json(post);
}

export async function create(req, res) {
  const { title, content } = req.body;
  if (!title || !content) return res.status(400).send("Missing fields");
  const [newPost] = await Post.createPost({ title, content });
  res.status(201).json(newPost);
}

export async function update(req, res) {
  const { title, content } = req.body;
  const [updated] = await Post.updatePost(req.params.id, { title, content });
  if (!updated) return res.status(404).send("Post not found");
  res.json(updated);
}

export async function remove(req, res) {
  const deleted = await Post.deletePost(req.params.id);
  if (!deleted) return res.status(404).send("Post not found");
  res.sendStatus(204);
}
