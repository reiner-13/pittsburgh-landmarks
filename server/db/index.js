const { Pool } = require("pg");

const pool = new Pool({
    user: process.env.PGUSER,
    host: 'postgres',
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: 5432
});
module.exports = {
    query: (text, params) => pool.query(text, params),
};
