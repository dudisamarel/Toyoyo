import axios from 'axios'
const BASE_URL = (process.env.NODE_ENV === 'development') ? '//localhost:3030/api/toy' : '/api/toy';

export const toyService = {
    query,
    save,
    remove,
    getById,
}

function query(filterBy) {
    return axios.get(BASE_URL, { params: filterBy })
        .then(res => res.data)
}
function save(toy) {
    if (toy._id) {
        return axios.put(`${BASE_URL}/${toy._id}`, toy)
            .then(res => res.data)
    }
    else {
        return axios.post(BASE_URL, toy)
            .then(res => res.data)
    }
}
function remove(toyId) {
    return axios.delete(`${BASE_URL}/${toyId}`)
        .then(res => res.data)
}
function getById(id) {
    return axios.get(`${BASE_URL}/${id}`)
        .then(res => res.data)
}

