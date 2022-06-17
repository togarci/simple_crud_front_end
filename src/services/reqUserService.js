import axios from 'axios';

export class reqUserService {
    constructor () {}

    getListUsers(params) {
        const url = `${process.env.VUE_APP_ROOT_URL}/users`;
        return axios.get(url, {
            params: params
        }).then(response => response.data);
    }

    getUser() {

    }

    saveUser(data) {
        const url = `${process.env.VUE_APP_ROOT_URL}/users`;
        return axios.post(url, data).then(response => response.data);
    }
    
    deleteUser(id) {
        const url = `${process.env.VUE_APP_ROOT_URL}/users/${id}`;
        return axios.delete(url).then(response => response.data);
    }
}