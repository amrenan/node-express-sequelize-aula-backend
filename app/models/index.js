const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD,{
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.patients = require("./paciente.model.js")(sequelize,Sequelize);
db.doctors = require("./medico.models.js")(sequelize,Sequelize);
db.consultas = require("./consulta.models.js")(sequelize,Sequelize);

db.doctors.belongsToMany(db.patients, { through: db.consultas })
db.patients.belongsToMany(db.doctors, { through: db.consultas })

module.exports = db;