
/** 
 * Configurazione API:
 * @description - Definizione e Stabilimento delle Rotte.
 */

const express = require("express");
const routes = express.Router();
const { Show_list, Delete_Post, Search_Post } = require("../Controllers/Controllers.js");

// Chiamata per la Lista dei post
routes.get("/posts", Show_list);

// Chiamata Delete di un post
routes.delete("/posts/id", Delete_Post);

// Chiamata Ricerca
routes.get("/posts/id", Search_Post);

module.exports = routes;