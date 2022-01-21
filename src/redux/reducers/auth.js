import {
    FETCH_REQUEST,
    FETCH_FAILURE,
    LOGIN_SUCCESS,
    SECOND_AUTH_SUCCESS,
    VERIFY_SUCCESS,
    RESEND_TOKEN_SUCCESS,
    RECOVERY_SUCCESS,
    RESET_PASSWORD_SUCCESS,
    CHANGE_PASSWORD_SUCCESS,
    LOGOUT
} from '../actionTypes/auth';

const initialState = {
    loading: false,
    error: '',
    isError: false,
    isLoggedIn: false,
    secondAuth: false,
};


export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                isError: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                isLoggedIn: true,
                error: '',
                isError: false
            }
        case SECOND_AUTH_SUCCESS:
            return {
                ...state,
                loading: false,
                secondAuth: true,
                error: '',
                isError: false
            }
        case VERIFY_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case RESEND_TOKEN_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case RECOVERY_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case CHANGE_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case LOGOUT:
            return {
                ...state,
                loading: false,
            }
        default: return state
    }
}