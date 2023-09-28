module.exports = app => {
    const doctors = require("../controllers/paciente.controller");

    var router = require("express").Router();

    router.post("/", doctors.create);

    router.get("/", doctors.findAll);

    router.get("/flammables", doctors.findAllFlammables);

    router.get("/:id", doctors.findOne);

    router.put("/:id", doctors.update);

    router.delete("/:id", doctors.delete);

    router.delete("/:id", doctors.deleteAll);

    app.use('/api/paciente', router);
    

};