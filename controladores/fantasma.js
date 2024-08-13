const { getTodosFantasmas, getFantasmaPorId, insereFantasma } = require("../servicos/fantasma");

function getFantasmas(req, res) {

    try {
        const fantasmas = getTodosFantasmas()
        res.send(fantasmas)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
};

function getFantasma(req, res) {

    try {
        const id = req.params.id
        const fantasma = getFantasmaPorId(id)
        res.send(fantasma)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
};

function postFantasma(req, res) {
    try {
        const fantasmaNovo = req.body
        insereFantasma(fantasmaNovo)
        res.send("Fantasma Inserido com sucesso")
        res.status(201)
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getFantasmas,
    getFantasma,
    postFantasma
}