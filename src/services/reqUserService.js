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
}