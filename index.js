const express = require("express"); // l'import ou le chargement de express
const app = express();  // la création d'une instance du serveur express

//Middleware
app.use(express.json());

const equipes = require('./equipes.json');
app.listen(82, ()=>{
    console.log("Bienvenue à node expressJS");
});


app.get('/equipes', (req,res)=>{
    //res.send("<h1 align=center> Hello mes équipes de foot </h1>");
    res.status(200).json(equipes);
});

app.get('/equipes/:id', (req,res)=>{
    const id = parseInt(req.params.id);
    console.log(id);
    const equipe = equipes.find(equipe => equipe.id === id)
    res.status(200).json(equipe);
});

app.post('/equipes', (req,res)=>{
    equipes.push(req.body);
    res.status(200).json(equipes);
});

app.put('/equipes/:id', (req,res)=>{
    const id = parseInt(req.params.id);
    let equipe = equipes.find(equipe => equipe.id === id)
    equipe.name = req.body.name;
    equipe.country = req.body.country;
    res.status(200).json(equipe);
});
