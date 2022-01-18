import axios from 'axios';
import { Login, SecondAuth, changePassword, verify } from './APIs'

class AuthService {
    login(email, password) {
        return axios
            .post(Login, { email, password })
            .then((response) => {
                console.log(response);
                return response.data
            })
    }

    secondAuth(OTPCode, secretAnswer) {
       return axios
            .post(SecondAuth, { OTPCode, secretAnswer })
            .then((response) => {
                console.log(response)
            })
    }

    verifyUser(email, OTPCode) {
        return axios
             .post(verify, { email, OTPCode })
             .then((response) => {
                 console.log(response)
             })
     }

    changePassword(body){
        return axios
        .post(changePassword, {body})
        .then((response) => {
            console.log(response)
        })
    }

    logout() {
        localStorage.removeItem("x-auth-token");
    }
}

export default new AuthService();