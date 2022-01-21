import {
    fetchFailure,
    fetchRequest,
    loginSuccess,
    logoutSuccess,
    verifySuccess,
    secondAuthSuccess,
    resendTokenSuccess,
    recoverySuccess,
    resetPasswordSuccess
} from '../actions/auth';
import { BASE_URL, LoginAPI, SecondAuthAPI, verifyAPI, resendOTPAPI, recoverAPI, resetPasswordAPI } from './APIs'
import Client from '../../utils/HTTPClient';


export const login = (email, password) => async (dispatch) => {
    dispatch(fetchRequest())
    try {
        const client = new Client(BASE_URL);
        const res = await client.post(LoginAPI, { email, password });

        console.log(res);

        dispatch(loginSuccess())
    } catch (error) {
        dispatch(fetchFailure(error))
        console.log(error)
    }
}


export const secondAuth = (OTPCode, secretAnswer) => async (dispatch) => {
    dispatch(fetchRequest())
    try {
        const client = new Client(BASE_URL);
        const res = await client.post(SecondAuthAPI, { OTPCode, secretAnswer });

        console.log(res);

        dispatch(secondAuthSuccess())
    } catch (error) {
        dispatch(fetchFailure(error))
        console.log(error)
    }
}


export const verify = ({ email, OTPCode }) => async (dispatch) => {
    dispatch(fetchRequest())
    try {
        const client = new Client(BASE_URL);
        const res = await client.post(verifyAPI, { email, OTPCode });

        console.log(res);

        dispatch(verifySuccess())
    } catch (error) {
        dispatch(fetchFailure(error))
        console.log(error)
    }
}


export const resendOTP = (email) => async (dispatch) => {
    dispatch(fetchRequest())
    try {
        const client = new Client(BASE_URL);
        const res = await client.post(resendOTPAPI, { email });

        console.log(res);

        dispatch(resendTokenSuccess())
    } catch (error) {
        dispatch(fetchFailure(error))
        console.log(error)
    }
}


export const recover = (email) => async (dispatch) => {
    dispatch(fetchRequest())
    try {
        const client = new Client(BASE_URL);
        const res = await client.post(recoverAPI, { email });

        console.log(res);

        dispatch(recoverySuccess())
    } catch (error) {
        dispatch(fetchFailure(error))
        console.log(error)
    }
}


export const resetPassword = (email, token, password) => async (dispatch) => {
    dispatch(fetchRequest())
    try {
        const client = new Client(BASE_URL);
        const res = await client.post(resetPasswordAPI, { email, token, password });

        console.log(res);

        dispatch(resetPasswordSuccess())
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