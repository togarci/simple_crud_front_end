import axios from 'axios';

export class reqUserService {
    constructor () {}

    getListUsers(params) {
        const url = `${process.env.VUE_APP_ROOT_URL}/users`;
        return axios.get(url, {
            params: params
        }).then(response => response.data);
    }

    getUser(id) {
        const url = `${process.env.VUE_APP_ROOT_URL}/users/${id}`;
        return axios.get(url).then(response => response.data);
    }
    
    postUser(data) {
        const url = `${process.env.VUE_APP_ROOT_URL}/users`;
        return axios.post(url, data).then(response => response.data);
    }
    
    putUser(id, data) {
        const url = `${process.env.VUE_APP_ROOT_URL}/users/${id}`;
        return axios.put(url, data).then(response => response.data);
    }
    
    deleteUser(id) {
        const url = `${process.env.VUE_APP_ROOT_URL}/users/${id}`;
        return axios.delete(url).then(response => response.data);
    }
}