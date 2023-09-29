const { consultas } = require(".");

module.exports = (sequelize, Sequelize) =>{

    const Patient = require('./paciente.model');
    const Doctor = require('./medico.models');
    
    
    const Consulta = sequelize.define("consultas", {
        date: {
            type: Sequelize.DATE,
            aloowNull: false,
        },

        hour: {
            type: Sequelize.INTEGER,
        },
        
        
        
    });
    
Consulta.belongsTo (Patient,{foreignKey: 'patientsId'});
Consulta.belongsTo (Doctor, {foreignKey: 'doctorsId'});

module.exports = Consulta;
};

