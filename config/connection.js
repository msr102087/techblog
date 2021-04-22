const Sequelize = require('sequelize');
const mysql = require('mysql');
const connection;

require('dotenv').config();

let sequelize;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password1!',
        database: 'tech_blog',
    });
}

connection.connect();
module.exports = connection;