const fs = require("fs");

const dadosAtuais = JSON.parse(fs.readFileSync("fantasmas.json"));
const novoDado = {id: '3', nome: 'Oni'}

fs.writeFileSync("fantasmas.json", JSON.stringify([...dadosAtuais, novoDado]));

console.log(JSON.parse(fs.readFileSync("fantasmas.json")));