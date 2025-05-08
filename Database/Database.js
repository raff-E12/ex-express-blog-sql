
/** 
 * Configurazione API:
 * @description - Communicazione con il DataBase.
 */

const mysql = require("mysql2");

const connection_database = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database:"db_blog"
})

connection_database.connect((err) => {
    if (err) throw err;
    console.log(">> Connessione MySQL pronta...")
})

module.exports = connection_database;