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
    doctorCrm: req.body.doctorCrm
     
}
    exports.createConsultaForPatient = 
    async (req, res) => {
        try{
            const {date, patientCpf} = req.body;
            const patient = await 
            Consulta.findByPk(patientCpf);

            if (!patient) {
                return
                res.status(404).json({error: 'Paciente não encontrado.'});

            }
        const newConsulta = {
        date: new Date(),
        PatientCpf: patientCpf
        }
        const consulta = await 
        consulta.create(newConsulta);
        return res.json(consulta);
           
    } catch (error) {
        return
        res.status(500).json({ error: 'Erro ao criar consulta médica.'});

    }
    
 };
    
Consulta.create(Consulta) 
     .then(data => {
         res.send(data);
     })
     .catch(err => {
         res.status(500).send({
             message:
             err.message || "Ocorreu um erro ao criar uma consulta."
         })
     });
    
}



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
            err.message || "Ocorreu um erro ao listar as consultas."
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
                message: `Não foi possível encontrar a consulta com o id = ${id}.`
        });
        }
    })
    .catch(err => {
        res.status(500).send({
         message: "Ocorreu um erro ao tentar encontrar a consulta com o id = " + id   
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
                message: "Consulta atualizada com sucesso."
            });
        } else {
            res.send({
              message: `Não foi possível atualizar esta consulta id=${id}.`  
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Ocorreu um erro ao tentar atualizar a consulta id=" + id
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
                message: "Consulta apagada com sucesso!"
            });
        } else {
            res.send({
                message: `Não foi possível apagar os dados da consulta id=${id}.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Ocorreu um erro ao tentar apagar a consulta com o id=" + id
        });
    });





};

