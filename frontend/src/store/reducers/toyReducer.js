const initialState = {
    toys: []
}

export function toyReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_TOYS':
            return { ...state, toys: action.toys }
        case 'EDIT_TOY':
            return { ...state, toys: state.toys.map(toy => (toy._id === action.toy._id) ? action.toy : toy) }
        case 'ADD_TOY':
            return { ...state, toys: [action.toy , ...state.toys] }
        case 'REMOVE_TOY':
            return { ...state, toys: state.toys.filter(toy => toy._id !== action.toyId) }
        case 'SET_FILTER':
            return { ...state, filterBy: action.filterBy }
        case 'SAVE_USER':
            return { ...state, user: { ...action.user }, toys: [] }
        default:
            return state
    }
}