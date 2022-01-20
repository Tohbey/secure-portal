import {
    FETCH_USER,
    REQUEST_FAILURE,
    REQUEST,
    FETCH_USERS,
    REGISTER_SUCCESS,
    FETCH_CURRENT_USER,
    TERMINATE_USER_SUCCESS
} from '../actionTypes/user';

export const request = () => {
    return{
        type: REQUEST
    }
}

export const fetchUser = (id) => {
    return{
        type: FETCH_USER, 
        payload: id
    }
}

export const fetchUsers = () => {
    return{
        type: FETCH_USERS
    }
}

export const fetchCurrentUser = () => {
    return{
        type: FETCH_CURRENT_USER
    }
}

export const terminateUser = () => {
    return{
        type: TERMINATE_USER_SUCCESS
    }
}


export const registerSuccess = () => {
    return{
        type: REGISTER_SUCCESS
    }
}

export const requestFailure = (error) => {
    return{
        type: REQUEST_FAILURE,
        payload: error
    }
}