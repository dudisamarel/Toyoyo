
const dbService = require('../db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    getById,
    update,
    add,
    remove
}

async function query(filterBy) {
    const criteria = _buildCriteria(filterBy)
    try {
        //QUERY
        const collection = await dbService.getCollection('toy')
        var toys = await collection.find(criteria).toArray()
        toys = toys.map(toy => {
            toy.createdAt = ObjectId(toy._id).getTimestamp()
            return toy
        })
        //SORTBY
        if (filterBy.sortBy === 'name')
            toys.sort((a, b) => {
                if (a.name < b.name) { return -1; }
                if (a.name > b.name) { return 1; }
                return 0;
            })
        else if (filterBy.sortBy === 'price')
            toys.sort((a, b) => a.price - b.price)
        return toys
    }
    catch (err) {
        throw err;
    }
}
async function getById(toyId) {
    try {
        const collection = await dbService.getCollection('toy')
        const toy = await collection.findOne({ '_id': ObjectId(toyId) })

        return toy

    }
    catch {
        return 'No Toy'
    }
}
async function remove(toyId) {
    try {
        const collection = await dbService.getCollection('toy')
        await collection.deleteOne({ '_id': ObjectId(toyId) })
    }
    catch {
        return 'No Toy'
    }
}

async function update(toy) {
    try {
        const { name, price, type, inStock } = toy;
        const toyToUpdate = {
            name,
            price,
            type,
            inStock
        }
        const collection = await dbService.getCollection('toy')
        await collection.updateOne({ '_id': ObjectId(toy._id) }, { $set: toyToUpdate })
        return toyToUpdate;
    } catch (err) {
        throw err
    }
}

async function add(toy) {
    try {
        const { name, price, type, inStock } = toy;
        const toyToAdd = {
            name,
            price,
            type,
            inStock
        }
        const collection = await dbService.getCollection('toy')
        await collection.insertOne(toyToAdd)
        return toyToAdd
    } catch (err) {
        throw err
    }
}


function _buildCriteria(filterBy) {
    const criteria = {}
    if (filterBy.name) {
        criteria.name = { $regex: filterBy.name, $options: 'i' }
    }
    if (filterBy.type !== 'All') {
        criteria.type = { $eq: filterBy.type }
    }
    if (filterBy.inStock !== 'All') {
        const inStockCriteria = filterBy.inStock === 'true'
        criteria.inStock = inStockCriteria

    }
    if (filterBy.price) {
        criteria.price = { $gte: filterBy.price * 1 }
    }
    return criteria
}



