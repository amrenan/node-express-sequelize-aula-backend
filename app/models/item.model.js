module.exports = (sequelize, Sequelize) =>{
    const Items = sequelize.define("Items", {
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        quantity: {
            type: Sequelize.INTEGER
        },
        is_flammanble: {
            type: Sequelize.BOOLEAN
        }
    });
    return Items;
};