module.exports = app => {
    const patients = require("../controllers/paciente.controller.js");

    var router = require("express").Router();

    router.post("/", patients.create);

    router.get("/", patients.findAll);

    router.get("/:id", patients.findOne);

    router.put("/:id", patients.update);

    router.delete("/:id", patients.delete);

    router.delete("/:id", patients.deleteAll);

    app.use('/api/paciente', router);
    

};