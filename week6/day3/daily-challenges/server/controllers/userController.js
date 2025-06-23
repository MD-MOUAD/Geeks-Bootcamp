import bcrypt from 'bcrypt';
import {
  createUserWithPassword,
  findUserByUsername,
  getUserPasswordHash,
  getAllUsers,
  getUserById,
  updateUserById
} from '../models/userModel.js';

const SALT_ROUNDS = 10;

export const register = async (req, res) => {
  console.log("im here")
  const { email, username, password, first_name, last_name } = req.body;

  try {
    const hash = await bcrypt.hash(password, SALT_ROUNDS);
    const newUser = await createUserWithPassword({ email, username, first_name, last_name }, hash);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: 'Error registering user', error: err.message });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const hashRecord = await getUserPasswordHash(username);
    if (!hashRecord) return res.status(401).json({ message: 'Invalid credentials' });

    const match = await bcrypt.compare(password, hashRecord.password);
    if (!match) return res.status(401).json({ message: 'Invalid credentials' });

    const user = await findUserByUsername(username);
    res.status(200).json({ message: 'Login successful', user });
  } catch (err) {
    res.status(500).json({ message: 'Error logging in', error: err.message });
  }
};

export const getUsers = async (req, res) => {
  const users = await getAllUsers();
  res.json(users);
};

export const getUser = async (req, res) => {
  const user = await getUserById(req.params.id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
};

export const updateUser = async (req, res) => {
  const updated = await updateUserById(req.params.id, req.body);
  res.json(updated[0]);
};
