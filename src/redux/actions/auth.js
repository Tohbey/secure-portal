import {
    LOGIN_SUCCESS,
    VERIFY_SUCCESS,
    LOGOUT,
    FETCH_FAILURE,
    FETCH_REQUEST, CHANGE_PASSWORD_SUCCESS, FETCH_REQUEST_STOP_LOADING,
    SECOND_AUTH_SUCCESS, RESEND_TOKEN_SUCCESS, RECOVERY_SUCCESS, RESET_PASSWORD_SUCCESS
} from '../actionTypes/auth';
import { authenticateUser } from '../../utils/Auth';

export const fetchRequest = () => {
    return {
        type: FETCH_REQUEST
    }
}

export const fetchRequestStopLoading = () => {
    return {
        type: FETCH_REQUEST_STOP_LOADING
    }
}

export const fetchFailure = (error) => {
    return {
        type: FETCH_FAILURE,
        payload: error
    }
}

export const loginSuccess = (token, questionId) => {
    authenticateUser(token);
    return {
        type: LOGIN_SUCCESS,
        payload: token,
        questionId
    }
}

export const secondAuthSuccess = (token) => {
    authenticateUser(token);
    return {
        type: SECOND_AUTH_SUCCESS,
        payload: token
    }
}

export const verifySuccess = () => {
    return {
        type: VERIFY_SUCCESS
    }
}

export const resendTokenSuccess = () => {
    return {
        type: RESEND_TOKEN_SUCCESS
    }
}

export const recoverySuccess = () => {
    return {
        type: RECOVERY_SUCCESS
    }
}

export const resetPasswordSuccess = () => {
    return {
        type: RESET_PASSWORD_SUCCESS
    }
}


export const changePasswordSuccess = () => {
    return {
        type: CHANGE_PASSWORD_SUCCESS
    }
}

export const logoutSuccess = () => {
    return {
        type: LOGOUT
    }
}
