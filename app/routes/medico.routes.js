module.exports = app => {
    const doctors = require("../controllers/medico.controller.js");

    var router = require("express").Router();

    router.post("/", doctors.create);

    router.get("/", doctors.findAll);

    router.get("/:id", doctors.findOne);

    router.put("/:id", doctors.update);

    router.delete("/:id", doctors.delete);

    router.delete("/:id", doctors.deleteAll);

    app.use('/api/medico', router);
    

};