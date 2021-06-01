const initialState = {
    user: null
}

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, user: { ...action.user } }
        case 'ADD_ACTIVITY':
            return { ...state, user: { ...state.user, activities: [action.activity, ...state.user.activities] } }
        case 'SET_PREFS':
            return { ...state, user: { ...state.user,prefs: {...action.prefs}} }
        default:
            return state
    }
}
