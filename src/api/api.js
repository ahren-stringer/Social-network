import * as axios from 'axios'

let instance=axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API-KEY":'cf224378-2463-45c8-ae03-2be939c88a12'
    }
})

export let usersAPI={
    getUsers(numberOfPage=1,onOnePage=9){
        return instance.get(`users?page=${numberOfPage}&count=${onOnePage}`)
                        .then(response=>response.data)
    },
    follow(id){
        return instance.post(`follow/${id}`)
                        .then(response=>response.data)
    },
    unfollow(id){
        return instance.delete(`follow/${id}`)
                        .then(response=>response.data)
    },
   
}

export let profileAPI={
    setProfile(userId){
        return instance.get(`profile/`+userId)
    },
    setProfileStatus(userId){
        return instance.get(`profile/status/`+userId)
    },
    updateProfileStatus(status){
        return instance.put(`profile/status/`, {status:status})
    },
    updateAva(ava){
        let formData = new FormData();
        formData.append("image", ava);
        return instance.put(`profile/photo`,  formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        })
    },
}

export let authAPI={
    isAutorised(){
        return instance.get(`auth/me`)
    },
    login(email,password,rememderMe=false){
        return instance.post(`auth/login`, {email,password,rememderMe})
    },
    logout(){
        return instance.delete(`auth/login`)
    },
}