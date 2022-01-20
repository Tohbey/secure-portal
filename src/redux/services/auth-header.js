export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('x-auth-token'));

    if (user && user.accessToken) {
        return { Authorization: 'x-auth-token ' + user.accessToken };
    } else {
        return {};
    }
}