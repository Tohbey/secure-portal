import {
    registerUser,
    request,
    requestFailure,
    getCurrentUser,
    getUser,
    getUsers,
    terminateUser
} from '../actions/user';
import axios from 'axios';
import { UserAPI, currentUserAPI, terminateUserAPI } from './APIs'

export const createUser = (user) => async (dispatch) => {
    dispatch(request())
    try {
        const res = await axios.post(UserAPI,  user );

        console.log(res.data)
        let email = res.data.email;
        console.log(email);

        dispatch(registerUser(email))
    } catch (error) {
        dispatch(requestFailure(error))
        console.log(error.response.data.msg)
    }
}


export const fetchCurrentUser = () => async (dispatch) => {
    dispatch(request())
    try {
        const res = await axios.get(currentUserAPI);

        console.log(res);
       
        dispatch(getCurrentUser(res.data))
    } catch (error) {
        dispatch(requestFailure(error))
        console.log(error)
    }
}

export const fetchUsers = () => async (dispatch) => {
    dispatch(request())
    try {
        const res = await axios.get(UserAPI);

        console.log(res)

        dispatch(getUsers(res.data))
    } catch (error) {
        dispatch(requestFailure(error))
        console.log(error)
    }
}

export const fetchUser = (id) => async (dispatch) => {
    dispatch(request())
    try {
        const res = await axios.get(UserAPI+"/"+id);

        console.log(res)

        dispatch(getUser(res.data))
    } catch (error) {
        dispatch(requestFailure(error))
        console.log(error)
    }
}

export const terminate = () => async (dispatch) =>{
    dispatch(request())
    try {
        const res = await axios.get(terminateUserAPI);

        console.log(res)

        dispatch(terminateUser())
    } catch (error) {
        dispatch(requestFailure(error))
        console.log(error)
    } 
}