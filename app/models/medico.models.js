module.exports = (sequelize, Sequelize) =>{
    const paciente = sequelize.define("paciente", {
        
        
        name: {
            type: Sequelize.STRING
        },

        crm: {
            type: Sequelize.INTEGER,
            unique: true,
        },
        
        address: {
            type: Sequelize.STRING,
            
        },

        especialidade: {
            type: Sequelize.STRING
        },

        contact: {
            type: Sequelize.INTEGER
        },
        

        is_flammable: {
            type: Sequelize.BOOLEAN
        }
    });
    return paciente;
};