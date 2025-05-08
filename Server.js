/**
 * @description - Iniziazione del server in Express
 */

const express = require("express");
const connection = require("./Database/Database.js");

const app = express();
const port = 4000;

app.use(express.json());

app.get("/", (req, res) => {
    return res.status(200).json({msg: "Benvenuto nell' API !!", code: 200});
})

app.get("/list", (req, res) =>{
    const sql = "SELECT * FROM posts";

    connection.query(sql, (error, results) => {
        if (error) return res.status(500).json({msg: "Errore nel Database", code: 500});
        return res.status(200).json({msg: "Ecco la lista completa", code: 200, result: results});
    })
})

app.listen(port, () => {return console.log(`>> Ecco il server in esecuzione: http://localhost:${port || 4000}/`)})