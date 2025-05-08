
/** 
 * Configurazione API:
 * @description - Creazione dei seguenti Middleware.
 */

// Gestione dello stato "404".
function Measure_routes(req, res, next) {
    return res.status(404).json({msg: "Rotta inesistente, Riprova!!", code: 404});
    next();
}

module.exports ={
    Measure_routes
}