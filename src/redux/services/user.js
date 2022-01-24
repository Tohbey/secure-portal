/* eslint-disable react-hooks/rules-of-hooks */
import {
    registerUser,
    request,
    requestFailure,
    getCurrentUser,
    getUser,
    getUsers,
    terminateUser,
    RequestStopLoading
} from '../actions/user';
import { UserAPI, currentUserAPI, terminateUserAPI, BASE_URL } from './APIs'
import Client from '../../utils/HTTPClient';



export const createUser = (user) => async (dispatch) => {
    dispatch(request())

    try {
        const client = new Client(BASE_URL);
        const res = await client.post(UserAPI, user);
        console.log(res)

        dispatch(RequestStopLoading());
        if (res.data) {
            dispatch(registerUser(res.data.email));
            console.log("Create User ->", res);
            return null;
        }

        return res.data;
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

        console.log("Current User ->", res.data);

        dispatch(RequestStopLoading());
        if (res.data) {
            dispatch(getCurrentUser(res.data))
        }

        return res.data;
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

        console.log("Fetch Users ->", res.data);

        dispatch(RequestStopLoading());
        if (res.data) {
            dispatch(getUsers(res.data))
        }

        return res.data;
    } catch (error) {
        dispatch(requestFailure(error))
        console.log(error)
    }
}

export const fetchUser = (id) => async (dispatch) => {
    dispatch(request())
    try {
        const client = new Client(BASE_URL);
        const res = await client.get(UserAPI + id);

        console.log("Fetch User ->", res.data);

        dispatch(RequestStopLoading());
        if (res.data) {
            dispatch(getUser(res.data))
        }

        return res.data;
    } catch (error) {
        dispatch(requestFailure(error))
        console.log(error)
    }
}

export const terminate = () => async (dispatch) => {
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