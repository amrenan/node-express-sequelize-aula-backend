module.exports = (sequelize, Sequelize) =>{
    const Doctor = sequelize.define("doctors", {
        
        
        name: {
            type: Sequelize.STRING,
        },

        crm: {
            type: Sequelize.INTEGER,
            unique: true,
        },
        
        address: {
            type: Sequelize.STRING,
            
        },

        especialidade: {
            type: Sequelize.STRING,
        },

        contact: {
            type: Sequelize.STRING,
        },
        

        is_flammable: {
            type: Sequelize.BOOLEAN
        }
    });
    return Doctor;
};