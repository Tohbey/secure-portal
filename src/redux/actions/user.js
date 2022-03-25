import {
    GET_CURRENT_USER,
    REQUEST_FAILURE,
    REQUEST,
    GET_USER,
    REGISTER_USER,
    GET_USERS,
    TERMINATE_USER_SUCCESS,
    REQUEST_STOP
} from '../actionTypes/user';

export const request = () => {
    return{
        type: REQUEST
    }
}

export const requestStopLoading = () => {
    return {
        type: REQUEST_STOP
    }
}

export const getUser = (user) => {
    return{
        type: GET_USER, 
        payload: user
    }
}

export const getUsers = (users) => {
    return{
        type: GET_USERS,
        payload: users
    }
}

export const getCurrentUser = (currentUser) => {
    return{
        type: GET_CURRENT_USER,
        payload: currentUser
    }
}

export const terminateUser = () => {
    return{
        type: TERMINATE_USER_SUCCESS
    }
}


export const registerUser = (email) => {
    return{
        type: REGISTER_USER,
        payload: email
    }
}

export const requestFailure = (error) => {
    return{
        type: REQUEST_FAILURE,
        payload: error
    }
}