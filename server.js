const express = requere("express");
const cors = requere("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
}

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.get("/",(req,res)=>{
    res.json({message: 'Hello, Word!'})
});

const PORT = process.env.PORT || 8080;
app.çisten(PORT, ()=>{
    console.log(`Server funcionando na porta ${PORT}.`);

});
