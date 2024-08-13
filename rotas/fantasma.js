const { Router } = require("express");
const { getFantasmas, getFantasma, postFantasma } = require("../controladores/fantasma")

const router = Router();

router.get('/', getFantasmas)

router.get('/:id', getFantasma)


router.post('/', postFantasma);

router.patch('/', (req, res) => {
    res.send('Você fez uma requisicao do tipo patch')
});

router.delete('/', (req, res) => {
    res.send('Você fez uma requisicao do tipo delete')
});

module.exports = router;