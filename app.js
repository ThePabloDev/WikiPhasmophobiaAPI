const express = require("express");
const rotaFantasma = require("./rotas/fantasma");

const app = express();
app.use(express.json())

app.use('/fantasmas', rotaFantasma);
const port = 8000;

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
});