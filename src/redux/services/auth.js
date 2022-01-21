/* eslint-disable react-hooks/rules-of-hooks */
import {
    fetchFailure,
    fetchRequest,
    loginSuccess,
    logoutSuccess,
    verifySuccess,
    secondAuthSuccess,
    resendTokenSuccess,
    recoverySuccess,
    resetPasswordSuccess,
    fetchRequestStopLoading,
    changePasswordSuccess
} from '../actions/auth';
import { AuthAPI, LoginAPI, SecondAuthAPI, changePasswordAPI, verifyAPI, resendOTPAPI, recoverAPI, resetPasswordAPI } from './APIs'
import Client from '../../utils/HTTPClient';
import { useNavigate } from 'react-router-dom';
import { getAuthorizationHeader } from '../../utils/Auth';

const navigate = useNavigate();

export const loginAuth = ({ email, password }) => async (dispatch) => {
    dispatch(fetchRequest())
    try {
        const client = new Client(AuthAPI);
        const res = await client.post(LoginAPI, { email, password });

        const resJson = await res.json();
        console.log("Login ->", resJson);

        dispatch(fetchRequestStopLoading());
        if (resJson.success) {
            dispatch(loginSuccess(resJson.meta.token, resJson.data.questionId));
            navigate('/validation');
        }

    } catch (error) {
        dispatch(fetchFailure(error))
        console.log(error)
    }
}


export const secondAuth = ({ OTPCode, secretAnswer }) => async (dispatch) => {
    dispatch(fetchRequest())
    try {
        const headers = {
            Authorization: getAuthorizationHeader(),
        }
        const client = new Client(AuthAPI, headers);
        const res = await client.post(SecondAuthAPI, { OTPCode, secretAnswer });

        const resJson = await res.json();
        console.log("Second Auth ->", resJson);

        dispatch(fetchRequestStopLoading());
        if (resJson.success) {
            dispatch(secondAuthSuccess(resJson.meta));
            navigate('/home');
        }

    } catch (error) {
        dispatch(fetchFailure(error))
        console.log(error)
    }
}


export const verify = ({ email, OTPCode }) => async (dispatch) => {
    dispatch(fetchRequest())
    try {
        const client = new Client(AuthAPI);
        const res = await client.patch(verifyAPI, { email, OTPCode });

        const resJson = await res.json();
        console.log("Verify ->", resJson);

        dispatch(fetchRequestStopLoading());
        if (resJson.success) {
            dispatch(verifySuccess());
            navigate('/login');
        }

    } catch (error) {
        dispatch(fetchFailure(error))
        console.log(error)
    }
}


export const resendOTP = (email) => async (dispatch) => {
    dispatch(fetchRequest())
    try {
        const client = new Client(AuthAPI);
        const res = await client.patch(resendOTPAPI, { email });

        console.log(res);

        dispatch(resendTokenSuccess())
    } catch (error) {
        dispatch(fetchFailure(error))
        console.log(error)
    }
}


export const recover = (email) => async (dispatch) => {
    dispatch(fetchRequest());
    try {
        const client = new Client(AuthAPI);
        const res = await client.post(recoverAPI, { email });

        const resJson = await res.json();
        console.log("recover ->", resJson);

        dispatch(fetchRequestStopLoading());
        if (resJson.success) {
            dispatch(recoverySuccess());
            navigate('/login');
        }

    } catch (error) {
        dispatch(fetchFailure(error))
        console.log(error)
    }
}

export const changePassword = (oldPassword, newPassword) => async (dispatch) => {
    dispatch(fetchRequest())
    try {
        const client = new Client(AuthAPI);
        const res = await client.patch(changePasswordAPI, { oldPassword, newPassword });

        const resJson = await res.json();
        console.log("change Password ->", resJson);

        dispatch(fetchRequestStopLoading());
        if (resJson.success) {
            dispatch(changePasswordSuccess());
            navigate('/login');
        }

    } catch (error) {
        dispatch(fetchFailure(error))
        console.log(error)
    }
}


export const resetPassword = (email, token, password) => async (dispatch) => {
    dispatch(fetchRequest())
    try {
        const client = new Client(AuthAPI);
        const res = await client.post(resetPasswordAPI, { email, token, password });

        const resJson = await res.json();
        console.log("Reset password ->", resJson);

        dispatch(fetchRequestStopLoading());
        if (resJson.success) {
            dispatch(resetPasswordSuccess());
            navigate('/login');
        }

    } catch (error) {
        dispatch(fetchFailure(error))
        console.log(error)
    }
}


export const logout = () => async (dispatch) => {
    dispatch(fetchRequest())
    try {

        dispatch(logoutSuccess())
    } catch (error) {
        dispatch(fetchFailure(error))
        console.log(error)
    }
}