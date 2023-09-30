const { where } = require("sequelize");
const db = require("../models");
const Doctor = db.doctors;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    
    if (!req.body.name) {
        res.status(400).send({
            message: "O conteúdo não pode ser vazio!"
        });
        return
    }
    
    const doctors = {
        name: req.body.name,
        crm: req.body.crm,
        address: req.body.address,
        especialidade: req.body.especialidade,
        contact: req.body.contact,
        is_flammable: req.body.is_flammable ? req.body.is_flammable : false

     }

     Doctor.create(doctors)
     .then(data => {
         res.send(data);
     })
     .catch(err => {
         res.status(500).send({
             message:
             err.message || "Ocorreu um erro ao armazenar dados do médico."
         })
     })

};

exports.findAll = (req, res) => {
    const name = req.body.name;
    var condition = name ? {name: {[Op.like]: `%${name}%`}} : null;

    Doctor.findAll({where: condition})
    .then(data => {
        res.send(data);
    })
    .catch(err =>{
        res.status(500).send({
            message:
            err.message || "Ocorreu um erro ao listar os médicos."
        })
    });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Doctor.findByPk(id)
    .then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `Não foi possível encontrar o médico id = ${id}.`
        });
        }
    })
    .catch(err => {
        res.status(500).send({
         message: "Ocorreu um erro ao tentar encontrar o médico id = " + id   
        });
    });

};

exports.update = (req, res) => {
    const id = req.params.id;

    Doctor.update(req.body, {
        where: {id: id}
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Os dados foram atualizado com sucesso."
            });
        } else {
            res.send({
              message: `Não foi possível atualizar os dados id=${id}.`  
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Ocorreu um erro ao tentar atualizar os dados id=" + id
        });
    });

};

exports.delete = (req, res) => {
    const id = req.params.id;

    Doctor.destroy({
        where: {id: id}
    })
    .then(num => {
        if (num == 1){
            res.send({
                message: "O item foi excluído com sucesso!"
            });
        } else {
            res.send({
                message: `Não foi possível excluir o item id=${id}.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Ocorreu um erro ao tentar apagar este item id=" + id
        });
    });

};

exports.deleteAll = (req, res) => {
    Doctor.destroy({
        where: {},
        truncate: false
    })
    .then(nums => {
        res.send({ message: `${nums} Informação apagada com sucesso.`});
    })
    .catch(err =>{
        res.status(500).send({
            message:
            err.message || "Houve algum erro ao tentar apagar os dados dos itens."
        });
    });
};

