const express = require ("express");
const cors = require ("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
}

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({extended: true}));

const db = require("./app/models");
db.sequelize.sync()
    .then(() => {
        console.log("Banco Conectado!");
    })
    .catch((err)=>{
        console.log("Falha ao acessar o banco de dados: "+ err.message);
    });

require("./app/routes/paciente.routes")(app);
require("./app/routes/medico.routes")(app);
require("./app/routes/consulta.routes")(app);

app.get("/",(req,res)=>{
    res.json ({message: "Hello, Word!"})
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>{
    console.log(`Server funcionando na porta ${PORT}.`);

});
