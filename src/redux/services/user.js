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
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();


export const createUser = (user) => async (dispatch) => {
    dispatch(request())
    try {
        const client = new Client(BASE_URL);
        const res = await client.post(UserAPI, user);

        const resJson = await res.json();
        console.log("Create User ->", resJson);

        dispatch(RequestStopLoading());
        if (resJson.success) {
            dispatch(registerUser(resJson.data.email));
            navigate('/verify');
        }

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

        const resJson = await res.json();
        console.log("Current User ->", resJson);

        dispatch(RequestStopLoading());
        if (resJson.success) {
            dispatch(getCurrentUser(resJson.data))
        }

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

        const resJson = await res.json();
        console.log("Fetch Users ->", resJson);

        dispatch(RequestStopLoading());
        if (resJson.success) {
            dispatch(getUsers(resJson.data))
        }

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

        const resJson = await res.json();
        console.log("Fetch User ->", resJson);

        dispatch(RequestStopLoading());
        if (resJson.success) {
            dispatch(getUser(resJson.data))
        }

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