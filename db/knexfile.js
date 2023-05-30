// Update with your config settings.
require("dotenv").config({
  path: "../.env",
});
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

module.exports = {
  development: {
    client: "pg",
    connection: {
      user: process.env.DB_USER || "user",
      database: process.env.DB_NAME || "remainder",
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: { directory: "./data/seeds" },
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: { directory: "./data/seeds" },
  },
};

// module.exports = {
//   development: {
//     client: 'postgresql',
//     connection: {
//       host: 'localhost',
//       port: 5432,
//       database: 'greenfield',
//       user: 'user',
//       password: 'user'
//     },
//     migrations: {
//       directory: './db/migrations'
//     },
//     seeds: {
//       directory: './db/seeds'
//     }
//   },
//   staging: {
//     client: 'postgresql',
//     connection: {
//       database: 'greenfield',
//       user: 'user',
//       password: 'user'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   },
//   production: {
//     client: 'postgresql',
//     connection: {
//       database: 'greenfield',
//       user: 'user',
//       password: 'user'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   }
// };
