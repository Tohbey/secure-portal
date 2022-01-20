import {
    registerSuccess,
    request,
    requestFailure,
    fetchCurrentUser,
    fetchUser,
    fetchUsers,
    terminateUser
} from '../actions/user';
import axios from 'axios';
import { UserAPI, currentUserAPI, terminateUserAPI } from './APIs'

export const createUser = (user) => async (dispatch) => {
    dispatch(request())
    try {
        const res = await axios.post(UserAPI, { user });

        console.log(res)

        dispatch(registerSuccess())
    } catch (error) {
        dispatch(requestFailure(error))
        console.log(error)
    }
}


export const currentUser = () => async (dispatch) => {
    dispatch(request())
    try {
        const res = await axios.get(currentUserAPI);

        console.log(res)

        dispatch(fetchCurrentUser())
    } catch (error) {
        dispatch(requestFailure(error))
        console.log(error)
    }
}

export const getUsers = () => async (dispatch) => {
    dispatch(request())
    try {
        const res = await axios.get(UserAPI);

        console.log(res)

        dispatch(fetchUsers())
    } catch (error) {
        dispatch(requestFailure(error))
        console.log(error)
    }
}

export const getUser = (id) => async (dispatch) => {
    dispatch(request())
    try {
        const res = await axios.get(UserAPI+"/"+id);

        console.log(res)

        dispatch(fetchUser(id))
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