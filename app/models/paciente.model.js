const { HasMany } = require("sequelize");
const Consulta = require("./consulta.models");
const { patients, consultas } = require(".");

module.exports = (sequelize, Sequelize) =>{

    const Patient = sequelize.define("patients", {
        
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        cpf: {
            type: Sequelize.STRING(11),
            unique: true,
            primaryKey: true
        },
        
        address: {
            type: Sequelize.STRING,
            allowNull: false
        },

        cns: {
            type: Sequelize.STRING(12),
            allowNull: false
        },

        contact: {
            type: Sequelize.STRING(11)
        },
        
        description: {
            type: Sequelize.STRING,
            
        }
    });
  
    return Patient;
    
    
};

