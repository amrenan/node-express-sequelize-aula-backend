const { where } = require("sequelize");
const db = require("../models");
const Consulta = db.consultas;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    
    if (!req.body.date) {
        res.status(400).send({
            message: "O conteúdo não pode ser vazio!"
        });
        return
    }

  const consultas = {
    date: req.body.date,
    hour: req.body.hour,
    is_flammable: req.body.is_flammable ? req.body.is_flammable : false
}


Consulta.create(consultas)
     .then(data => {
         res.send(data);
     })
     .catch(err => {
         res.status(500).send({
             message:
             err.message || "Ocorreu um erro ao criar um item."
         })
     })


}; 

exports.findAll = (req, res) => {
    const name = req.body.name;
    var condition = name ? {name: {[Op.like]: `%${name}%`}} : null;

    Consulta.findAll({where: condition})
    .then(data => {
        res.send(data);
    })
    .catch(err =>{
        res.status(500).send({
            message:
            err.message || "Ocorreu um erro ao listar os itens."
        })
    });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Consulta.findByPk(id)
    .then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `Não foi possível encontrar um item com o id = ${id}.`
        });
        }
    })
    .catch(err => {
        res.status(500).send({
         message: "Ocorreu um erro ao tentar encontrar um item com o id = " + id   
        });
    });

};

exports.update = (req, res) => {
    const id = req.params.id;

    Consulta.update(req.body, {
        where: {id: id}
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "O item foi atualizado de maneira bem sucedida."
            });
        } else {
            res.send({
              message: `Não foi possível atualizar o item com id=${id}.`  
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Ocorreu um erro ao tentar atualizar um item com o id=" + id
        });
    });

};

exports.delete = (req, res) => {
    const id = req.params.id;

    Consulta.destroy({
        where: {id: id}
    })
    .then(num => {
        if (num == 1){
            res.send({
                message: "O item foi apagado com sucesso!"
            });
        } else {
            res.send({
                message: `Não foi possível apagar o item com o id=${id}.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Ocorreu um erro ao tentar apagar o item com o id=" + id
        });
    });

};
