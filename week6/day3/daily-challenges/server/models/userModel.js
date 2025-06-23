import db from '../config/db.js';

export const createUserWithPassword = async (userData, hashedPassword) => {
  return await db.transaction(async trx => {
    const [user] = await trx('users')
      .insert({
        email: userData.email,
        username: userData.username,
        first_name: userData.first_name,
        last_name: userData.last_name
      })
      .returning('*');

    await trx('hashpwd').insert({
      username: userData.username,
      password: hashedPassword
    });

    return user;
  });
};

export const findUserByUsername = username =>
  db('users').where({ username }).first();

export const getUserPasswordHash = username =>
  db('hashpwd').where({ username }).first();

export const getAllUsers = () =>
  db('users').select('*');

export const getUserById = id =>
  db('users').where({ id }).first();

export const updateUserById = (id, userData) =>
  db('users').where({ id }).update(userData).returning('*');
