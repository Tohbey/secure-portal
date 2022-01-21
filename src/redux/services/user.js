import {
    registerUser,
    request,
    requestFailure,
    getCurrentUser,
    getUser,
    getUsers,
    terminateUser
} from '../actions/user';
import { UserAPI, currentUserAPI, terminateUserAPI, BASE_URL } from './APIs'
import Client from '../../utils/HTTPClient';

export const createUser = (user) => async (dispatch) => {
    dispatch(request())
    try {
        const client = new Client(BASE_URL);
        const res = await client.post(UserAPI,  user);

        dispatch(registerUser(res.data.email))
    } catch (error) {
        dispatch(requestFailure(error))
        console.log(error)
    }
}


export const fetchCurrentUser = () => async (dispatch) => {
    dispatch(request())
    try {
        const client = new Client(BASE_URL);
        const res = await client.get(currentUserAPI);

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
        const client = new Client(BASE_URL);
        const res = await client.get(UserAPI);

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
        const client = new Client(BASE_URL);
        const res = await client.get(UserAPI+id);

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
        const client = new Client(BASE_URL);
        const res = await client.patch(terminateUserAPI);

        console.log(res)

        dispatch(terminateUser())
    } catch (error) {
        dispatch(requestFailure(error))
        console.log(error)
    } 
}