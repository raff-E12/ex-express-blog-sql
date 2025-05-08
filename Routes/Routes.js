
/** 
 * Configurazione API:
 * @description - Definizione e Stabilimento delle Rotte.
 */

const express = require("express");
const routes = express.Router();
const { Show_list } = require("../Controllers/Controllers.js");

routes.get("/posts", Show_list);

module.exports = routes;