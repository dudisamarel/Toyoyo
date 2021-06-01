const express = require('express')
const { getToy, getToys, deleteToy, updateToy, addToy } = require('./toyController')
const router = express.Router()

router.get('/', getToys)
router.post('/', addToy)
router.get('/:id', getToy)
router.put('/:toy', updateToy)
router.delete('/:id', deleteToy)


module.exports = router