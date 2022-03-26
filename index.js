const express = require("express");
const req = require("express/lib/request");
const { get } = require("express/lib/response");
const res = require("express/lib/response");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.use(express.urlencoded());

// variavel para receber dados //
let message = "";



const pokedex = [
    {
    id: 1,
    nome: "Blastoise",
    tipo: "Water",
    categoia: "Shellfish",
    detalhes: "",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png"
},

{
    id: 2,
    nome: "Metapod",
    tipo: "Bug",
    categoia: "Cocoon",
    detalhes: "",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png"
},
{
    id: 3,
    nome: "Arbok",
    tipo: "Poison",
    categoia: "Cobra",
    detalhes: "",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png"
}
]


// app.get("/", function(req, res){
//     res.send("Olá Mundo")
// });

app.get("/", (req, res) => {
    res.render("index", {pokedex,message});
});

app.get("/cadastro", (req, res) => {
    res.render("cadastro", {pokedex});

});

app.post("/cadastro", (req, res) => {
    const pokemon = req.body;
    pokedex.push(pokemon);
    message = "Parabéns, seu Pokemon foi cadastrado com sucesso!";
    setTimeout(() => {
        message = "";
      }, 1000);

    res.redirect("/")

});

app.get("/detalhes", (req, res) => {
    res.render("detalhes", {pokedex});

});





app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));
