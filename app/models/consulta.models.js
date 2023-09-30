module.exports = (sequelize, Sequelize) =>{
    
    const Consulta = sequelize.define("consultas", {

        date: {
            type: Sequelize.DATE,
            
        },

        hour: {
            type: Sequelize.STRING,
        },


        
        
        
    });
    
    return Consulta;

};

