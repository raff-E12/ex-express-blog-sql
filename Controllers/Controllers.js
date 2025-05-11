
/** 
 * Configurazione API:
 * @description - Creazione e Importazione dei Controllers.
 */

const connection = require("../Database/Database.js");

function Show_list(req, res){
    const keyword = "SELECT tb1.title, tb1.content, tb1.image, tb2.label FROM posts AS tb1 INNER JOIN tags AS tb2 ON tb1.id = tb2.id";
    connection.query(keyword, (error, results) => {
        if (error) return res.status(500).json({msg: "Errore nel Database", code: 500});
        return res.status(200).json({msg: "Ecco la lista completa", code: 200, result: results});
    })
}

function Delete_Post(req, res) {
    // console.log(req.params.id);
    let id = String(req.params.id);
    const keyword = "DELETE FROM posts WHERE id = ?";
     connection.query(keyword, [id], (error, results) => {
        if (error) return res.status(500).json({msg: "Errore nel Database", code: 500});
        // console.log(results);
        if (results.affectedRows === 0) return res.status(404).json({msg: "ID non trovato, inserisci un altro campo per continuare", code: 404});
        return res.status(200).json({msg: "Il Post è stato eliminato", code: 200});
    })
}

function Search_Post(req, res) {
    let id = String(req.params.id);
    console.log(id);
    const keyword = "SELECT * FROM posts WHERE id = ?";
    const keyword_1 = "SELECT tb1.label FROM tags AS tb1 INNER JOIN post_tag AS tb2 ON tb1.id = tb2.tag_id WHERE tb2.tag_id = ?";
     connection.query(keyword, [id], (error, results) => {
        if (error) return res.status(500).json({msg: "Errore nel Database", code: 500});
        if (results.length === 0) return res.status(404).json({msg: "La Ricerca non è andata a Buon Fine.", code: 404});
        let query_result = results[0];
        // console.log(query_result);
        connection.query(keyword_1, [id], (error, results) => {
            if (error) return res.status(500).json({msg: "Errore nel Database", code: 500});
            if (results.length === 0) return res.status(200).json({msg: "Ecco il Risultato", code: 200, result: query_result});
            let tags_index = String(Object.values(results[0]));
            // console.log(tags_index)
            query_result = {...query_result, tags: tags_index};
            return res.status(200).json({msg: "Ecco il Risultato", code: 200, result: query_result})
        })
    })
}

module.exports = {
    Show_list,
    Delete_Post,
    Search_Post
}