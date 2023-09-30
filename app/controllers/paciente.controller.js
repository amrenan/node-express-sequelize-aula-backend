const { where } = require("sequelize");
const db = require("../models");
const Patient = db.patients;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    
    if (!req.body.name) {
        res.status(400).send({
            message: "O conteúdo não pode ser vazio!"
        });
        return
    }
    
    const patients = {
        name: req.body.name,
        cpf: req.body.cpf,
        address: req.body.address,
        cns: req.body.cns,
        contact: req.body.contact,
        description: req.body.description,
        is_flammable: req.body.is_flammable ? req.body.is_flammable : false

     }

     Patient.create(patients)
     .then(data => {
         res.send(data);
     })
     .catch(err => {
         res.status(500).send({
             message:
             err.message || "Ocorreu um erro ao salvar os dados do paciente."
         })
     })

};

exports.findAll = (req, res) => {
    const name = req.body.name;
    var condition = name ? {name: {[Op.like]: `%${name}%`}} : null;

    Patient.findAll({where: condition})
    .then(data => {
        res.send(data);
    })
    .catch(err =>{
        res.status(500).send({
            message:
            err.message || "Ocorreu um erro ao listar os pacientes."
        })
    });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Patient.findByPk(id)
    .then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `Não foi possível encontrar o paciente com o id = ${id}.`
        });
        }
    })
    .catch(err => {
        res.status(500).send({
         message: "Ocorreu um erro ao tentar encontrar o paciente com o id = " + id   
        });
    });

};

exports.update = (req, res) => {
    const id = req.params.id;

    Patient.update(req.body, {
        where: {id: id}
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "O dados do paciente foram atualizados com sucesso."
            });
        } else {
            res.send({
              message: `Não foi possível atualizar os dados do paciente com id=${id}.`  
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Ocorreu um erro ao tentar atualizar os dados do paciente com o id=" + id
        });
    });

};

exports.delete = (req, res) => {
    const id = req.params.id;

    Patient.destroy({
        where: {id: id}
    })
    .then(num => {
        if (num == 1){
            res.send({
                message: "O dados do paciente foram apagados com sucesso!"
            });
        } else {
            res.send({
                message: `Não foi possível apagar os dados do paciente com o id=${id}.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Ocorreu um erro ao tentar apagar os dados do paciente com o id=" + id
        });
    });

};

exports.deleteAll = (req, res) => {
    Patient.destroy({
        where: {},
        truncate: false
    })
    .then(nums => {
        res.send({ message: `${nums} Dados apagados com sucesso.`});
    })
    .catch(err =>{
        res.status(500).send({
            message:
            err.message || "Houve algum erro ao tentar apagar todos os dados."
        });
    });


    Patient.findAll({
        include:{
            model: doctors,
            as: 'doctors',
        },
    })
    .then((patients) => {
        console.log(db.patients);
    })
    .catch((err ) =>{
        console.err("Erro ao recuperar os pacientes: ", err);
    });

};