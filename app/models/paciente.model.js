module.exports = (sequelize, Sequelize) =>{
    const paciente = sequelize.define("paciente", {
        
        
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        cpf: {
            type: Sequelize.INTEGER,
            uallowNull: false
        },
        
        address: {
            type: Sequelize.STRING,
            allowNull: false
        },

        cns: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        contact: {
            type: Sequelize.INTEGER
        },
        
        description: {
            type: Sequelize.STRING,
            
        },

        is_flammable: {
            type: Sequelize.BOOLEAN
        }
    });
    return paciente;
};

