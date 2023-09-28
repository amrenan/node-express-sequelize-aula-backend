module.exports = app => {
    const paciente = require("../controllers/paciente.controller");

    var router = require("express").Router();

    router.post("/", paciente.create);

    router.get("/", paciente.findAll);

    router.get("/flammables", paciente.findAllFlammables);

    router.get("/:id", paciente.findOne);

    router.put("/:id", paciente.update);

    router.delete("/:id", paciente.delete);

    router.delete("/:id", paciente.deleteAll);

    app.use('/api/paciente', router);
    

};