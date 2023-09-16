module.exports = (sequelize, Sequelize) =>{
    const Items = sequelize.define("Items", {
        
        username: {
            type: Sequelize.STRING
        },

        cpf: {
            type: Sequelize.INTEGER,
            unique: true,
        },

        council_number: {
            type: Sequelize.INTEGER,
            unique: true,
        },

        address: {
            type: Sequelize.STRING
        },

        medical_specialty: {
            type: Sequelize.STRING
        },

        registraction: {
            type: Sequelize.STRING,
            unique: true,
        },

        password: {
            type: Sequelize.STRING
        },

        description: {
            type: Sequelize.STRING
        },

        quantity: {
            type: Sequelize.INTEGER
        },

        is_flammable: {
            type: Sequelize.BOOLEAN
        }
    });
    return Items;
};