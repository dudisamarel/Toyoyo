import axios from "../lib/axios";

const url = 'http://localhost:8000/user';

export const userService = {
    query,
    addActivity,
    setPrefs
}
var currUser;
function query(id = '367i') {
    return axios.get(`${url}/${id}`)
        .then(res => {
            currUser = { ...res.data }
            return res.data
        })
}
function addActivity(activity) {
    currUser = { ...currUser, activities: [activity, ...currUser.activities] }
    return axios.put(`${url}/${currUser._id}`, currUser)
        .then(res => res.data)
}
function setPrefs(prefs) {
    currUser = { ...currUser, prefs: {...prefs} }
    return axios.put(`${url}/${currUser._id}`, currUser)
        .then(res => res.data)
}