import db from '../config/db.js';

export async function getAllPosts() {
  return db('posts');
}

export async function getPostById(id) {
  return db('posts').where({ id }).first();
}

export async function createPost({ title, content }) {
  return db('posts').insert({ title, content }).returning('*');
}

export async function updatePost(id, { title, content }) {
  return db('posts').where({ id }).update({ title, content }).returning('*');
}

export async function deletePost(id) {
  return db('posts').where({ id }).del();
}
