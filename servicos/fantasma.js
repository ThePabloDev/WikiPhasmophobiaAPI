const fs = require("fs")

function getTodosFantasmas() {
    return JSON.parse( fs.readFileSync( "fantasmas.json" ) )

}

function getFantasmaPorId(id) {
    const fantasmas = JSON.parse(fs.readFileSync("fantasmas.json"))

    const fantasmaFiltrado = fantasmas.filter( fantasma => fantasma.id ===id )[0]
    return fantasmaFiltrado
}

function insereFantasma(fantasmaNovo) {
    const fantasmas = JSON.parse(fs.readFileSync("fantasmas.json"))

    const novaListaDeFantasmas = [ ...fantasmas, fantasmaNovo ]

    fs.writeFileSync("fantasmas.json", JSON.stringify(novaListaDeFantasmas))
}

module.exports ={
    getTodosFantasmas,
    getFantasmaPorId,
    insereFantasma
}