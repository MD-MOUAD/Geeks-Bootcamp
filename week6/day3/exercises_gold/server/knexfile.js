module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      user: "user",
      password: "123456",
      database: "my_db",
    },
    migrations: {
      directory: "./migrations",
    },
    seeds: {
      directory: "./seeds",
    },
  },
};
