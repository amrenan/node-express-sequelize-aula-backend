module.exports = (sequelize, Sequelize) =>{
    const Patient = sequelize.define("patients", {
        
        
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
    return Patient;
};

