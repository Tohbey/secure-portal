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
    FETCH_REQUEST_STOP_LOADING,
    LOGOUT
} from '../actionTypes/auth';

const initialState = {
    loading: false,
    error: '',
    isError: false,
    isLoggedIn: false,
    questionId: '',
    token: '',
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
        case FETCH_REQUEST_STOP_LOADING:
            return{
                ...state,
                loading: false
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                token: action.payload,
                questionId: action.questionId
            }
        case SECOND_AUTH_SUCCESS:
            return {
                ...state,
                secondAuth: true,
                token: action.payload
            }
        case VERIFY_SUCCESS:
            return {
                ...state,
            }
        case RESEND_TOKEN_SUCCESS:
            return {
                ...state,
            }
        case RECOVERY_SUCCESS:
            return {
                ...state,
            }
        case RESET_PASSWORD_SUCCESS:
            return {
                ...state,
            }
        case CHANGE_PASSWORD_SUCCESS:
            return {
                ...state,
            }
        case LOGOUT:
            return {
                ...state,
            }
        default: return state
    }
}