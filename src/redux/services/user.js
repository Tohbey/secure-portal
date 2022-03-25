/* eslint-disable react-hooks/rules-of-hooks */
import {
    registerUser,
    request,
    requestFailure,
    getCurrentUser,
    getUser,
    getUsers,
    terminateUser,
    requestStopLoading
} from '../actions/user';
import { UserAPI, CurrentUserAPI, TerminateUserAPI, BASE_URL } from './APIs'
import Client from '../../utils/HTTPClient';
import { getAuthorizationHeader } from '../../utils/Auth';



export const createUser = (user) => async (dispatch) => {
    dispatch(request())

    try {
        const client = new Client(BASE_URL);
        const res = await client.post(UserAPI, user);

        dispatch(requestStopLoading());
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
        const headers = {
            'x-auth-token': getAuthorizationHeader(),
        }
        const client = new Client(BASE_URL, headers);
        const res = await client.get(CurrentUserAPI);

        console.log("Current User ->", res.data);

        dispatch(requestStopLoading());
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
        const headers = {
            'x-aut;h-token': getAuthorizationHeader(),
        }
        const client = new Client(BASE_URL, headers);
        const res = await client.get(UserAPI);

        console.log("Fetch Users ->", res.data);

        dispatch(requestStopLoading());
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
        const headers = {
            'x-auth-token': getAuthorizationHeader(),
        };
        const client = new Client(BASE_URL, headers);
        const res = await client.get(UserAPI + id);

        console.log("Fetch User ->", res.data);

        dispatch(requestStopLoading());
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
        const headers = {
            'x-auth-token': getAuthorizationHeader(),
        };
        const client = new Client(BASE_URL, headers);
        const res = await client.patch(TerminateUserAPI);

        console.log(res)

        dispatch(terminateUser())
    } catch (error) {
        dispatch(requestFailure(error))
        console.log(error)
    }
}