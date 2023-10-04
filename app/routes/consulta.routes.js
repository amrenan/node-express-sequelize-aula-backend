module.exports = app => {
    const consulta = require("../controllers/consulta.controller.js");

    var router = require("express").Router();

    router.post("/", consulta.create);

    router.get("/", consulta.findAll);

    router.put("/:id", consulta.update);

    router.delete("/:id", consulta.delete);

    app.use('/api/consultas', router);


};
