const JWT_SECRET = "574dd565e6c0cacd9880f8afede1b59a";
const MAX_LOGIN_ATTEMPTS = 3;
const LOCK_TIME = 1 * 60 * 1000; // 1 minute

module.exports = { JWT_SECRET, MAX_LOGIN_ATTEMPTS, LOCK_TIME };
