module.exports = (sequelize, Sequelize) =>{
    const Items = sequelize.define("Items", {
        
        /*username indica o nome completo do médico ou enfermeiro */
        name: {
            type: Sequelize.STRING
        },

        cpf: {
            type: Sequelize.INTEGER,
            unique: true,
        },
        /* Council Number indica o número de registo no conselho regional da profissão */
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
        /* Registraction indica a matrícula so usúario no cadastro a contar a partir do número 100.000 até 999.999*/
        registraction: {
            type: Sequelize.STRING,
            unique: true,
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