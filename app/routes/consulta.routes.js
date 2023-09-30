module.exports = app => {
    const consultas = require("../controllers/consulta.controller.js");

    var router = require("express").Router();

    router.post("/", consultas.create);

    router.get("/", consultas.findAll);

    router.put("/:id", consultas.update);

    router.delete("/:id", consultas.delete);

    app.use('/api/consultas', router);

};
