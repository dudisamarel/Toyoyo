const toyService = require('./toyService')

module.exports = {
    getToy,
    getToys,
    deleteToy,
    updateToy,
    addToy
}
async function getToys(req, res) {
    try {
        const { price, name, type, inStock, sortBy } = req.query
        const filterBy = {
            price: price || 0,
            name: name || '',
            inStock: inStock || 'All',
            type: type || 'All',
            sortBy: sortBy || 'name'
        }
        const toys = await toyService.query(filterBy)
        res.send(toys)
    }
    catch (err) {
        res.status(404).send(err);
    }
}
async function getToy(req, res) {
    try {
        const { id } = req.params
        const toy = await toyService.getById(id)
        res.send(toy)
    }
    catch (err) {
        res.status(404).send(err);
    }

}
async function updateToy(req, res) {
    try {
        const toy = req.body
        toyService.update(toy).then((updatedToy) => {
            return res.send(updatedToy)
        })

    }
    catch (err) {
        res.status(405).send(err)
    }
}
async function addToy(req, res) {
    try {
        const toyToAdd = req.body
        const savedToy = await toyService.add(toyToAdd)
        res.send(savedToy)
    }
    catch (err) {
        return err
    }
}
async function deleteToy(req, res) {
    try {
        const { id } = req.params
        await toyService.remove(id)
        res.send('Removed Success')
    }
    catch (err) {
        res.status(405).send(err)
    }

}


