import { toyService } from "../../services/toyService.js"


export async function loadToys(filterBy) {
    return toyService.query(filterBy)
        .then(toys => {
            const action = {
                type: 'SET_TOYS',
                toys
            }
            return action
        })
}

export async function removeToy(toyId) {
        return toyService.remove(toyId)
            .then(() => {
                const action = {
                    type: 'REMOVE_TOY',
                    toyId
                }
                return action
            })
}
export function addToy(toy) {
    return (dispatch) => {
        return toyService.save(toy)
            .then(toy => {
                const action = {
                    type: 'ADD_TOY',
                    toy
                }
                dispatch(action)
            })
    }
}
export function editToy(toy) {
    return (dispatch) => {
        return toyService.save(toy)
            .then(toy => {
                const action = {
                    type: 'EDIT_TOY',
                    toy
                }
                dispatch(action)
            })
    }
}
export function setFilter(filterBy) {
    return (dispatch) => {
        const action = {
            type: 'SET_FILTER',
            filterBy
        }
        dispatch(action)
    }
}