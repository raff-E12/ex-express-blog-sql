
/** 
 * Configurazione API:
 * @description - Creazione e Importazione dei Controllers.
 */

const connection = require("../Database/Database.js");

function Show_list(req, res){
    const sql = "SELECT * FROM posts";

    connection.query(sql, (error, results) => {
        if (error) return res.status(500).json({msg: "Errore nel Database", code: 500});
        return res.status(200).json({msg: "Ecco la lista completa", code: 200, result: results});
    })
}


module.exports = {
    Show_list,
}