
const { consultas } = require(".");

module.exports = (sequelize, Sequelize) =>{
    
    const Consulta = sequelize.define("consultas", {

        date: {
            type: Sequelize.DATE,
                        
        },

        hour: {
            type: Sequelize.STRING,
            
        },

        
        doctorCrm: {
            type: Sequelize.STRING(6),
            unique: true,
                   
            references: {
              model: require("./medico.models.js"),
              key: 'crm'
            }
        },



       /* doctorCrm: {
            type: Sequelize.STRING(6),
            references: {

            primaryKey: true,
            }
        },*/

        patientCpf: {
            type: Sequelize.STRING(11),
            references: {
              model: require("./paciente.model"),
              key: 'cpf'
            },
        },
        


        
        
        
    });
    
    
    return Consulta;

};

