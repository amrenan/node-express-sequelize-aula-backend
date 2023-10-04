const pacienteModel = require("./paciente.model");

module.exports = (sequelize, Sequelize) =>{
    const Doctor = sequelize.define("doctors", {
        
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },

        crm: {
            type: Sequelize.STRING(6),
            unique: true,
            primaryKey: true,
            
        },
        
        address: {
            type: Sequelize.STRING,
            allowNull: false
            
        },

        especialidade: {
            type: Sequelize.STRING,
            allowNull: false
        },

        contact: {
            type: Sequelize.STRING(11),
            allowNull: false,
        }
    });
    return Doctor;
};

