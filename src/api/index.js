import axios from "axios";

const config = {
    baseUrl: "https://api.hnpwa.com/v0"
}

function fetchList(pathname) {
    return axios.get(`${config.baseUrl}/${pathname}/1.json`);
}
function fetchUser(username) {
    return axios.get(`${config.baseUrl}/user/${username}.json`)
}
function fetchItem(id) {
    return axios.get(`${config.baseUrl}/item/${id}.json`)
}

export { fetchList, fetchUser, fetchItem }

