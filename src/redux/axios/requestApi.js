import * as axios from 'axios';

let instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        'API-KEY': '546a49ed-2d23-4b98-acb4-6997b0044e93'
    }
})

export const userAPI = {
    setNewUsers(currentPage, pageSize) {
        return instance.get("users?page=" + currentPage + "&count=" + pageSize + "")
            .then(response => { return response.data })
    },
    follow(userID) {
        return instance.post('follow/' + userID)
    },
    unfollow(userID) {
        return instance.delete('follow/' + userID)
    },
    setCurrentUserPage(userID) {
        return instance.get("profile/"+userID)
    }
}

export const currentUserData =  {
    authMe() {
        return instance.get("auth/me").then(response => { return response })
    },
    getStatus(userID) {
        return instance.get("/profile/status/"+ userID).then(response => { return response })
    },
    setStatusCurrentUser(statusString) {
        return instance.put("profile/status", {status: statusString  }).then(response => { return response })
    },
    login(email, password, rememberMe = false) {
        debugger
        return instance.post("auth/login", {email, password, rememberMe})
    },
    logout() {
        return instance.delete("auth/login")
    }
}