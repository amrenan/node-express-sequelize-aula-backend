module.exports = {
    HOST:"localhost",
    USER: "",
    PASSWORD: "",
    DB: "itemsdb",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 3000,
        idle: 10000
    }
};