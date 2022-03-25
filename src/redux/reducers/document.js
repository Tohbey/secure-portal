import {
    REQUEST,
    REQUEST_FAILURE,
    REQUEST_STOP,
    GET_DOCUMENT,
    GET_DOCUMENTS,
    GET_DOCUMENTS_BY_USER,
    DELETE_DOCUMENT,
    CREATE_DOCUMENT,
    SHARE_DOCUMENT
} from '../actionTypes/document';

const initialState = {
    loading: false,
    error: '',
    isError: false,
    documents: [],
    extras: [],
    document: null,
    msg:""
};

export const DocumentReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST:
            return {
                ...state,
                loading: true,
            }
        case REQUEST_FAILURE:
            return {
                ...state,
                loading: false,
                isError: true,
                error: action.payload
            }
        case REQUEST_STOP:
            return {
                ...state,
                loading: false,
            }
        case GET_DOCUMENT:
            return {
                ...state,
                loading: false,
                document: action.payload,
                msg: action.msg
            }
        case GET_DOCUMENTS:
            return {
                ...state,
                loading: false,
                extras: action.payload,
                msg: action.msg
            }
        case GET_DOCUMENTS_BY_USER:
            return {
                ...state,
                loading: false,
                documents: action.payload,
                msg: action.msg
            }
        case DELETE_DOCUMENT:
            return {
                ...state,
                loading: false,
                msg: action.msg
            }
        case CREATE_DOCUMENT:
            return {
                ...state,
                loading: false,
                msg: action.msg
            }
        case SHARE_DOCUMENT:
            return {
                ...state,
                loading: false,
            }
        default: return state
    }
}