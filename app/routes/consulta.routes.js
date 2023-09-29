module.exports = app => {
    const consultas = require("../controllers/consulta.controller.js");

    var router = require("express").Router();

    router.post("/consulta", consultas.create);

    router.get("/consulta", consultas.findAll);

    router.put("/:id", consultas.update);

    router.delete("/:id", consultas.delete);

    app.use('/api/consulta', router);

};
