import axios from 'axios';

const API_URL = ""

class AuthService {
    login(email, password) {
        return axios
            .post(API_URL + "login", { email, password })
            .then((response) => {
                if (response.data) {
                    localStorage.setItem("user", JSON.stringify(response.data))
                }

                return response.data
            })
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(body) {
        return axios.post(API_URL + "user",{body});
    }
}

export default new AuthService();