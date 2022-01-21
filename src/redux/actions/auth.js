import {
    LOGIN_SUCCESS,
    VERIFY_SUCCESS,
    LOGOUT,
    FETCH_FAILURE,
    FETCH_REQUEST, CHANGE_PASSWORD_SUCCESS,
    SECOND_AUTH_SUCCESS, RESEND_TOKEN_SUCCESS, RECOVERY_SUCCESS, RESET_PASSWORD_SUCCESS
} from '../actionTypes/auth';

export const fetchRequest = () => {
    return {
        type: FETCH_REQUEST
    }
}

export const fetchFailure = (error) => {
    return {
        type: FETCH_FAILURE,
        payload: error
    }
}

export const loginSuccess = () => {
    return {
        type: LOGIN_SUCCESS
    }
}

export const secondAuthSuccess = () => {
    return {
        type: SECOND_AUTH_SUCCESS
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
