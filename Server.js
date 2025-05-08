
const express = require("express");

const app = express();
const port = 4000;

app.use(express.json());

app.get("/", (req, res) => {
    return res.status(200).json({msg: "Benvenuto nell' API !!", code: 200});
})

app.listen(port, () => {return console.log(`>> Ecco il server in esecuzione: http://localhost:${port || 4000}/`)})