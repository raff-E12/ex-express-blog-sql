
/** 
 * Configurazione API:
 * @description - Definizione e Stabilimento delle Rotte.
 */

const express = require("express");
const routes = express.Router();
const { Show_list, Delete_Post, Search_Post } = require("../Controllers/Controllers.js");

// Chiamata Get
routes.get("/posts", Show_list);

// Chiamata Delete
routes.delete("/posts/:id", Delete_Post);

// Chiamata Post
routes.post("/posts/:id", Search_Post);

module.exports = routes;