import * as axios from 'axios';

let instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        'API-KEY': '546a49ed-2d23-4b98-acb4-6997b0044e93'
    }
})

export let setNewUsers = (currentPage, pageSize) => {
    return instance.get("users?page=" + currentPage + "&count=" + pageSize + "")
    .then(response => { return response.data })
}

export let authMe = () => {
    return instance.get("auth/me").then(response => { return response.data})  
}

export let followUserAPI = (userID) =>{
    return instance.post('follow/' + userID).then(response => { return response.data})
}

export let unfollowUserAPI = (userID) =>{
    return instance.delete('follow/' + userID).then(response => { return response.data})
}
