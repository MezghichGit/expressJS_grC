const express = require("express"); // l'import ou le chargement de express
const app = express();  // la création d'une instance du serveur express


const equipes = require('./equipes.json');
app.listen(82, ()=>{
    console.log("Bienvenue à node expressJS");
});

app.get('/equipes', (req,res)=>{
    res.send("<h1 align=center> Hello mes équipes de foot </h1>");
});