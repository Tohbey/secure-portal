import {
    REGISTER_USER,
    REQUEST,
    REQUEST_FAILURE,
    GET_USER,
    GET_CURRENT_USER,
    GET_USERS,
    TERMINATE_USER_SUCCESS,
    REQUEST_STOP
} from '../actionTypes/user';

const initialState = {
    loading: false,
    error: "",
    isError: false,
    currentUser: null,
    newUser: false,
    email: '',
    users: []
};

export const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST:
            return {
                ...state,
                loading: true,
            }
        case REQUEST_STOP:
            return {
                ...state,
                loading: false,
            }
        case REQUEST_FAILURE:
            return {
                ...state,
                loading: false,
                isError: true,
                error: action.payload
            }
        case REGISTER_USER:
            return {
                ...state,
                error: '',
                newUser: true,
                email: action.payload,
                isError: false,
            }
        case GET_USERS:
            return {
                ...state,
                users: [
                    ...action.payload
                ],
                error: '',
                isError: false,
            }
        case GET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload,
                error: '',
                isError: false,
            }
        case GET_USER:
            return {
                ...state,
                user: action.payload,
                error: '',
                isError: false,
            }
        case TERMINATE_USER_SUCCESS:
            return {
                ...state,
                error: '',
                isError: false,
            }

        default: return state;
    }
}