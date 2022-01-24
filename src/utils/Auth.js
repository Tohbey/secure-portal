import SecureLS from "secure-ls";

var ls = new SecureLS();

export const isAuthenticated = () => ls.get('token');

export const getAuthorizationHeader = () => `${isAuthenticated()}`;

export const removeAuthenticatedState = () => {
    ls.remove('token');
    ls.remove('refresh');
};

export const authenticateUser = (token) => {
    ls.set('token', token);
};