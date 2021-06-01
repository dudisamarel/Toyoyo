import { userService } from "../../services/userService.js"


export function loadUser() {
    return (dispatch) => {
        return userService.query()
            .then(user => {
                const action = {
                    type: 'SET_USER',
                    user
                }
                dispatch(action)
                return user;
            })
    }
}
export function addActivity(activity) {
    return (dispatch) => {
        return userService.addActivity(activity)
            .then((activity) => {
                const action = {
                    type: 'ADD_ACTIVITY',
                    activity
                }
                dispatch(action)
            })
    }
}
export function setPrefs(prefs) {
    return (dispatch) => {
        return userService.setPrefs(prefs)
            .then((prefs) => {
                const action = {
                    type: 'SET_PREFS',
                    prefs
                }
                dispatch(action)
            })
    }
}