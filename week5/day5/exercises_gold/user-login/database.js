const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./user-login.db");

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        role TEXT DEFAULT 'user',
        login_attempts INTEGER DEFAULT 0,
        locked BOOLEAN DEFAULT 0
    )`);
});

module.exports = db;
