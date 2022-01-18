import axios from 'axios';
import {User, currentUser} from './APIs'


class UserService {
    register(data) {
        return axios
            .post(User, { data })
            .then((response) => {
                console.log(response);
                return response.data
            })
    }

    getCurrentUser(){
        return axios
            .get(currentUser)
            .then((response) => {
                console.log(response)
            })
    }

}

export default new UserService();