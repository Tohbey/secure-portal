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
import { getAuthorizationHeader } from '../../utils/Auth';


export const loginAuth = ({ email, password }) => async (dispatch) => {
    dispatch(fetchRequest())
    try {
        const client = new Client(AuthAPI);
        const res = await client.post(LoginAPI, { email, password });

        console.log("Login ->", res);

        dispatch(fetchRequestStopLoading());
        if (res.data) {
            dispatch(loginSuccess(res.meta.token, res.data.questionId));
        }

        return res.data;
    } catch (error) {
        dispatch(fetchFailure(error))
        console.log(error)
    }
}


export const secondAuth = ({ OTPCode, secretAnswer }) => async (dispatch) => {
    dispatch(fetchRequest())
    try {
        const headers = {
            'x-auth-token': getAuthorizationHeader(),
        }

        console.log(getAuthorizationHeader())
        const client = new Client(AuthAPI, headers);
        const res = await client.post(SecondAuthAPI, { OTPCode, secretAnswer });

        console.log("Second Auth ->", res.data);

        dispatch(fetchRequestStopLoading());
        if (res.data) {
            dispatch(secondAuthSuccess(res.meta));
        }

        return res.data;
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

        console.log("Verify ->", res);

        dispatch(fetchRequestStopLoading());
        if (res.data) {
            dispatch(verifySuccess());
            return null;
        }

        return res.data;
    } catch (error) {
        dispatch(fetchFailure(error))
        console.log(error);
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


export const recover = ({ email }) => async (dispatch) => {
    dispatch(fetchRequest());
    try {
        const client = new Client(AuthAPI);
        const res = await client.post(recoverAPI, { email });

        console.log("recover ->", res);

        dispatch(fetchRequestStopLoading());
        if (res.data) {
            dispatch(recoverySuccess());
        }

        return res.data;
    } catch (error) {
        dispatch(fetchFailure(error))
        console.log(error)
    }
}

export const changePassword = ({ oldPassword, newPassword }) => async (dispatch) => {
    dispatch(fetchRequest())
    try {
        const client = new Client(AuthAPI);
        const res = await client.patch(changePasswordAPI, { oldPassword, newPassword });

        console.log("change Password ->", res);

        dispatch(fetchRequestStopLoading());
        if (res.data) {
            dispatch(changePasswordSuccess());
        }

        return res.data;
    } catch (error) {
        dispatch(fetchFailure(error))
        console.log(error)
    }
}


export const resetPassword = ({ email, token, password }) => async (dispatch) => {
    dispatch(fetchRequest())
    try {
        const client = new Client(AuthAPI);
        const res = await client.post(resetPasswordAPI, { email, token, password });

        console.log("Reset password ->", res.data);

        dispatch(fetchRequestStopLoading());
        if (res.data) {
            dispatch(resetPasswordSuccess());
        }

        return res.data;
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