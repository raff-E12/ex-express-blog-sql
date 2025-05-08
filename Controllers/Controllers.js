
/** 
 * Configurazione API:
 * @description - Creazione e Importazione dei Controllers.
 */

const connection = require("../Database/Database.js");

function Show_list(req, res){
    const keyword = "SELECT * FROM posts";
    connection.query(keyword, (error, results) => {
        if (error) return res.status(500).json({msg: "Errore nel Database", code: 500});
        return res.status(200).json({msg: "Ecco la lista completa", code: 200, result: results});
    })
}

function Delete_Post(req, res) {
    // console.log(req.params.id);
    let id = String(req.params.id).slice(1, 2);
    const keyword = "DELETE FROM posts WHERE id = ?";
     connection.query(keyword, [id], (error, results) => {
        if (error) return res.status(500).json({msg: "Errore nel Database", code: 500});
        // console.log(results);
        if (results.affectedRows === 0) return res.status(404).json({msg: "ID non trovato, inserisci un altro campo per continuare", code: 404});
        return res.status(200).json({msg: "Il Post è stato eliminato", code: 200});
    })
}

function Search_Post(req, res) {
    let id = String(req.params.id).slice(1, 2);
    console.log(id);
    const keyword = "SELECT * FROM posts WHERE id = ?";
     connection.query(keyword, [id], (error, results) => {
        if (error) return res.status(500).json({msg: "Errore nel Database", code: 500});
        if (results.length === 0) return res.status(404).json({msg: "La Ricerca non è andata a Buon Fine.", code: 404});
        return res.status(200).json({msg: "Il Post è stato trovato", code: 200, result: results});
    })
}

module.exports = {
    Show_list,
    Delete_Post,
    Search_Post
}