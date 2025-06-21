const bcrypt = require("bcrypt");

const validPassword = (password) =>
  /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password);

const hashPassword = async (password) => await bcrypt.hash(password, 10);
const comparePasswords = async (password, hash) =>
  await bcrypt.compare(password, hash);

module.exports = {
  validPassword,
  hashPassword,
  comparePasswords,
};
